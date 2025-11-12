
// Instantiate web socket server 
const ws = require('ws');

const wsServer = new ws.WebSocketServer({
    port: 3001
});

// make the server to listen to a pariticular event from client 

wsServer.on('connection', (socket) => {
    console.log('conntection established');

    socket.on('message', (data) => {
        // data <Buffer 6e 6e 6e>
        // data get exchanged from buffers, this is buffer data , which is a stream of data 
        const b = Buffer.from(data).toString();
        console.log('b', b);
        socket.send(`${data}`);
    })

})