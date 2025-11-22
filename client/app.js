// initialize socket connection at the very start
// use web socket api that is available in the web browser
// aside fetch , setTimeout, etc
// ws: websocket protocol, aside http protocol
const socket = io("ws://localhost:3001");

const form = document.querySelector("form");

const sendMessage = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value) {
    socket.emit('message', input.value);
    input.value = '';
  }
};

form.addEventListener("submit", sendMessage);

socket.on("message", ( data ) => {
  const ulElement = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = data;
  ulElement.appendChild(li);
});
