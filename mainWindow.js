const {BrowserWindow} = require('electron')

exports.win

exports.createWindow = () =>{
  this.win = new BrowserWindow({
    width: 500,
    height: 500,
    minWidth: 400,
    maxWidth: 600,
    minHeight: 400,
    maxHeight: 600
  })

  this.win.loadURL(`file://${__dirname}/renderer/main.html`)

  this.win.on('closed', ()=>{
    this.win = null
  })
}
