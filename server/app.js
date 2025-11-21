
// Instantiate web socket server 
const ws = require('ws');
const http = require('http');

// have http server and ws server to listern to different ports 
// const wsServer = new ws.WebSocketServer({
//     port: 3001
// });

// const httpServer = http.createServer();
// httpServer.listen(3002)

// have http server and ws server to listern to same ports 

const httpServer = http.createServer();
httpServer.listen(3001);

const wsServer = new ws.WebSocketServer({
    server: httpServer
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