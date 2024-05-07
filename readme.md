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
node version: v20.12.2
electron version: ^30.0.1

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

## License

MIT