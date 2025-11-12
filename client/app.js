// initialize socket connection at the very start
// use web socket api that is available in the web browser
// aside fetch , setTimeout, etc
// ws: websocket protocol, aside http protocol
const socket = new WebSocket("ws://localhost:3001");

const form = document.querySelector("form");

const sendMessage = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value) {
    socket.send(input.value);
  }
};

form.addEventListener("submit", sendMessage);

socket.addEventListener("message", ({ data }) => {
  console.log("hi");
  console.log(data);
});
