
import { Server } from "socket.io";
import express from 'express';


const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT);

const httpServer = app.listen(PORT, () => {
    console.log(`server is now listening to ${PORT}`)
})

const io = new Server(httpServer, {
    cors: {
        orgin: '*'
    }
})

// make the server to listen to a pariticular event from client 

io.on('connection', (socket) => {

    console.log(` User ${socket.id} is connected`)
    socket.on('message', (data) => {
        // data <Buffer 6e 6e 6e>
        // data get exchanged from buffers, this is buffer data , which is a stream of data 
        // const b = Buffer.from(data).toString();
        // console.log('b', b);
        console.log('data', data)
        // socket.send(`${data}`);
        io.emit('message', `${socket.id.substring(0,5)}:  ${data}`);
    })

})