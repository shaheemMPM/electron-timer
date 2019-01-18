const {app} = require('electron')
const mainWindow = require('./mainWindow')

app.on('ready', mainWindow.createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) mainWindow.createWindow()
})
