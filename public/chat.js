// Make conection
const serverUrl =
  window.location.hostname === 'localhost'
    ? 'http://localhost:4000'
    : window.location.origin;

const socket = io.connect(serverUrl);
