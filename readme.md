# Unofficial WhatsApp Desktop App for Linux

**Description:**

Elevate your messaging experience with this unofficial desktop application for WhatsApp on Linux. Enjoy the convenience of a dedicated desktop app, seamlessly integrating with WhatsApp Web to bring your chats to the forefront of your digital workspace.

**Key Features:**

- **Effortless Messaging:** Stay connected with your friends and family through a dedicated desktop space for WhatsApp. Streamline your messaging workflow with a native app experience.

- **Desktop Convenience:** Embrace the simplicity of a dedicated desktop app. Send and receive messages, share media, and manage your WhatsApp conversations efficiently from your desktop.

- **Notifications:** Receive timely notifications for incoming messages, ensuring you never miss an important chat. Stay updated on your conversations without having to check your phone constantly.

**How to Use:**

1. **Download:** Get started by downloading and installing the app on your Linux desktop.

2. **Login:** Sign in with your WhatsApp credentials to securely access and manage your messages.

3. **Chat:** Enjoy a familiar chat interface, complete with emojis, media sharing, and group interactions, right on your desktop.

4. **Stay Notified:** Receive desktop notifications for incoming messages, allowing you to respond promptly.

**Please Note:**
This application is an independent project and is not affiliated with or endorsed by WhatsApp Inc. It is designed to enhance the desktop experience for WhatsApp users.

Simplify your messaging and stay connected effortlessly. Download the app now and bring WhatsApp to your Linux desktop!

# Changelog
## [1.3.1] - 2026-11-11
- Fixed the missing launcher icon (question mark) on the deb package
    - icons are now installed in the standard hicolor sizes (16 to 256) instead of a single 360x360 file
- Launcher entry is now named "WhatsApp"

## [1.3.0] - 2026-11-11
- Compatibility with Ubuntu 24.04 (deb package)
    - Fixed the "Save file" dialog showing empty boxes instead of text: the deb uses the GTK of the system, which can draw the default variable font (Ubuntu Sans)
    - The deb installs the AppArmor profile that Ubuntu 24.04 requires, so the Chromium sandbox stays enabled
    - Audio, microphone and camera work on the deb without connecting any snap plug
- Updated Rendering Engine from Chrome version: 124 to 156 (Electron 30 to 45)
- Updated electron-builder from 24 to 26
- Security: the window that loads web.whatsapp.com no longer has Node.js access
    - nodeIntegration disabled, contextIsolation and sandbox enabled
    - removed preload.js (it failed on load and did nothing)
- User agent is now taken from the bundled Chromium instead of a fixed Chrome 124 string
- External links are detected by hostname instead of searching for text inside the URL
- The window is now linked to its launcher on the dock (desktopName)
- Not changed: the snap still builds on the old base; use the deb on Ubuntu 22.04 / 24.04

## [1.2.0] - 2024-4-30
- Big update
- Updated Rendering Engine from Chrome version: 121 to 124
- In app notification added
- Added new fetures in (context menu)
    - now you can cut, undo, redo, reload, zoom in-out, reset zoom, toggle fullscreen
- Now this package also availble for native debian package
    - you can install using apt command
    - check https://mirror.himelrana.com
    - If you install from apt mirror your app loading will be more faster

## [1.1.0] - 2024-02-25
- Added a new feature (context menu)
    - Now you can copy, past, select, copy link
## [1.0.0] - 2024-01-19
- Initial release

## Installation

```bash
    sudo snap install whatsapp-linux-app
```
## using native debian apt command

```bash
    # Add mirror.himelrana.com in your system
    sudo apt install curl
    sudo curl -fsSLo /usr/share/keyrings/himel.gpg https://mirror.himelrana.com/himel.gpg
    echo "deb [signed-by=/usr/share/keyrings/himel.gpg] https://mirror.himelrana.com/ stable main"|sudo tee /etc/apt/sources.list.d/himel-release.list
    sudo apt update
```

```bash
    sudo apt install whatsapp-linux-app
```

Visit [Snapcraft Store](https://snapcraft.io/icloud-mail) and click **Install**.
Visit [Apt Mirror](https://mirror.himelrana.com)  and install using debian native **apt** command

## Build

### Development

``` shell script
node version: v20.20.2
electron version: ^45.3.0

```

```shell script
npm install
npm start
```

### Production

```shell script
npm install
npm run dist
```

### Deb package for Ubuntu 22.04 / 24.04

Versions 1.3.x are not published on the Snap Store or the apt mirror above (both still serve 1.2.0). Build and install the deb from this branch:

```shell script
npm install
npx electron-builder --linux deb
sudo apt install ./dist/whatsapp-linux-app_1.3.1_amd64.deb
```

Tested on Ubuntu 24.04. If the snap is installed, remove it afterwards with `sudo snap remove whatsapp-linux-app`; the deb keeps its own session, so the device has to be linked again.

## License

MIT