const {ipcRenderer} = require('electron');
const serverUrl = 'https://paranoia-server.herokuapp.com';
const socket = io(serverUrl);

socket.on('connect', function() {
  console.log('connecetd');
})
socket.on('take-screenshot', async function() {
  console.log('taking screenshot');
  const result = await ipcRenderer.invoke('screenshot');
  socket.emit('took-screenshot', result);
});
