'use strict';

// refs. http://qiita.com/nyanchu/items/15d514d9b9f87e5c0a29

// Electron Module
const electron = require("electron");

// Application Controller
const app = electron.app;

// use electron-pug
const locals = {/* ...*/};
const j = require("electron-pug")({
  pretty: true
}, locals);

// Window Module
const BrowserWindow = electron.BrowserWindow;


// application quit if cmd + q
app.on('window-all-closed', ()=> {
  if( process.platform != 'darwin' ) {
    app.quit();
  }
});

// Electron Init
app.on('ready', ()=> {
  // Main Window Settings
  let mainWindow = new BrowserWindow({
    width: 400,
    height: 600
  });
  mainWindow.loadURL('file://'+__dirname+'/views/index.pug');

  // Quit APP when Window closed
  mainWindow.on('closed', ()=> {
    mainWindow = null;
  });
});
