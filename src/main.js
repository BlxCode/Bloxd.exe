import { app, BrowserWindow, Menu,Tray } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';

if (started) {
  app.quit();
}
const createWindow = () => {
  var mainWindow = new BrowserWindow({ icon: './images/bloxdlauncher.png',title:"Blxm's Bloxd Launcher" });
  mainWindow.setTitle(require('../package.json').productName);
  mainWindow.loadURL("https://blxm.vercel.app/assets/bloxd.exev2he/");
  mainWindow.maximize();
  
  const menuthing = [
    {
      label: 'Go To',
      submenu: [
        {
          label: 'Launcher',
          click: () => {
            mainWindow.loadURL("https://blxm.vercel.app/assets/bloxd.exev2he/");
          }
        },
        {
          label: 'Discord',
          click: () => {
            mainWindow.loadURL("https://discord.app");
          }
        },
        {
          label: 'Google',
          click: () => {
            mainWindow.loadURL("https://google.com");
          }
        },
 	{
		label: "Blxm's Website",
		click: ()=>{
		mainWindow.loadURL("https://blxm.vercel.app");
		}
	}
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuthing);
  Menu.setApplicationMenu(menu);  // Use setApplicationMenu for Electron app
};




app.whenReady().then(() => {
  createWindow();
  const tray = new Tray('../images/bloxdlauncher.png');
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


