// Make conection
const serverUrl =
  window.location.hostname === 'localhost'
    ? 'http://localhost:4000'
    : window.location.origin;

const socket = io.connect(serverUrl);

// Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');

// Emit events

btn.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// Listen for events
socket.on('chat', function(data) {
    output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
});
