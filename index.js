const express = require('express');
const http = require('http')
const cors = require('cors')
const {DBconnection} = require('./database/configMongoDB.js')
const {api} = require('./routes/api.routes.js')

require('dotenv').config();


DBconnection();
const port = 4000;
const app = express();
const server = http.createServer(app);



const io = require('socket.io')(server, {
    cors: { origin: '*' }
})

io.on('connection', (socket) => {
    console.log('conectao')
    socket.broadcast.emit('envio_mensaje', {
        usuario: 'ONLINE',
        mensaje: 'Se conecto el propio'
    })
    socket.on('envio_mensaje', (data) => {
        io.emit('envio_mensaje', data)
    })
})


app.use(express.json());
app.use(cors());
app.use("/api", api);

server.listen(port)


