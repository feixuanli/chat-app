
// Instantiate web socket server 
// const ws = require('ws'); // socket.io to broadcast the data
const { Server } = require('socket.io');
const http = require('http');

// v1 have http server and ws server to listern to different ports 
// const wsServer = new ws.WebSocketServer({
//     port: 3001
// });

// const httpServer = http.createServer();
// httpServer.listen(3002)

// v2  have http server and ws server to listern to same ports 

// const httpServer = http.createServer();
// httpServer.listen(3001);

// const wsServer = new ws.WebSocketServer({
//     server: httpServer
// });

// v3 
const httpServer = http.createServer();
httpServer.listen(3001);

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