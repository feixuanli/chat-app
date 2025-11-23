import { Server } from "socket.io";
import express from "express";

const app = express();
const PORT = process.env.PORT || "3001";

const httpServer = app.listen(PORT, () => {
  console.log(`server is now listening to ${PORT}`);
});

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(` User ${socket.id} is connected`);
  // Upon connection - only to current user
  socket.emit("message", "welcome to chat app");
  // upon connect - to all other users
  socket.broadcast.emit(
    "message",
    `User  ${socket.id.substring(0, 5)} connected `
  );

  // upon disconnection - all other users
  socket.on("disconnect", () => {
    socket.broadcast.emit(
      "message",
      `User ${socket.id.substring(0, 5)} disconnected`
    );
  });

  // capturing activity event
  socket.on("activity", (name) => {
    socket.broadcast.emit("activity", name);
  });

  socket.on("message", (data) => {
    console.log("data", data);
    io.emit("message", `${socket.id.substring(0, 5)}:  ${data}`);
  });
});
