const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', function(socket) {
    console.log('Made socket connection', socket.id);
})
