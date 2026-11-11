const { app, BrowserWindow, shell } = require('electron');
const contextMenu = require('electron-context-menu');


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    frame: true,
    webPreferences: {
      // The window only renders remote content (web.whatsapp.com), so it must
      // not get Node.js access.
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  mainWindow.loadURL('https://web.whatsapp.com');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  setupExternalLinkHandling();
}

function setupExternalLinkHandling() {
  // Open external links in the default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (isExternalLink(url)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

function isExternalLink(url) {
  // Anything that is not whatsapp.com or one of its subdomains is external
  try {
    const { protocol, hostname } = new URL(url);
    if (protocol === 'blob:' || protocol === 'about:') return false;
    if (protocol !== 'https:') return true;
    return !(hostname === 'whatsapp.com' || hostname.endsWith('.whatsapp.com'));
  } catch {
    return true;
  }
}

// WhatsApp Web rejects unknown browsers: present the bundled Chromium version
// without the Electron and app tokens, so the string never goes stale.
app.userAgentFallback = app.userAgentFallback
  .replace(/ Electron\/\S+/, '')
  .replace(new RegExp(` ${app.getName()}/\\S+`), '');

// Enable context menus
app.whenReady().then(() => {
  // Enable context menus
  contextMenu({
    showInspectElement: false, // Hide "Inspect Element" option
    prepend: (params, browserWindow) => [
      {
        label: 'Copy',
        role: 'copy',
      },
      {
        label: 'Cut',
        role: 'cut'
      },
      {
        label: 'Paste',
        role: 'paste',
      },
      { type: 'separator' },
      {
        label: 'Undo',
        role: 'undo'
      },
      {
        label: 'Redo',
        role: 'redo'
      },
      { type: 'separator' },
      {
        label: 'Zoom In',
        role: 'zoomIn'
      },
      {
        label: 'Zoom Out',
        role: 'zoomOut'
      },
      {
        label: 'Reset Zoom',
        role: 'resetZoom'
      },
      { type: 'separator' },
      {
        label: 'Reload',
        role: 'forceReload'
      },
      {
        label: 'Toggle Full Screen',
        role: 'togglefullscreen'
      }
    ],
  });
})


app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});