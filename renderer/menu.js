const {remote, shell} = require('electron')
const template = [
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'pasteandmatchstyle'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    label: 'About',
    submenu: [
      {
        label: 'Learn More',
        click() {shell.openExternal('https://www.github.com/shaheemMPM/electron-timer')}
      },
      {
        type: 'separator'
      },
      {
        label: 'Developer',
        click() {shell.openExternal('https://www.github.com/shaheemMPM')}
      }
    ]
  },

]
const menu = remote.Menu.buildFromTemplate(template)
remote.Menu.setApplicationMenu(menu)
