const {app, ipcMain, BrowserWindow} = require('electron');
const screenshot = require('screenshot-desktop');
const Jimp = require('jimp');

(async function main() {
  await app.whenReady();
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  await mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools();
  ipcMain.handle('screenshot', async function() {
    const imgBuffer = await screenshot();
    const img = await Jimp.read(imgBuffer);
    img.resize(Jimp.AUTO, 100);
    return img.getBase64Async(Jimp.MIME_JPEG);
  });
}());
