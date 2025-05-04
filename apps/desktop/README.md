# Blork Desktop

The desktop application for Blork, built with Electron and React.

## Features

- 🔍 Fast command search
- ⌨️ Global hotkey (Cmd/Ctrl + Space)
- 🔌 Plugin system
- 🎨 Beautiful, modern UI
- ⚡ Built with Electron and React

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Architecture

- Main process: Electron
- Renderer process: React + Vite
- Plugin system: Custom plugin manager
- UI: Tailwind CSS

## Building

```bash
# Build for Windows
pnpm build:win

# Build for Linux
pnpm build:linux

# Build for macOS
pnpm build:mac
``` 