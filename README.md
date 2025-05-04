# Blork

A cross-platform Raycast clone built with Electron and React.

## Features

- 🔍 Fast and powerful search
- 🎨 Beautiful, modern UI
- 🔌 Plugin system for extensibility
- 🌐 Cross-platform support (Windows & Linux)
- ⚡ Built with modern technologies

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blork.git
cd blork
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development servers:
```bash
# Start desktop app
pnpm dev:desktop

# Start web app
pnpm dev:web
```

## Project Structure

```
blork/
├── apps/
│   ├── desktop/     # Electron desktop application
│   └── web/         # Next.js web application
├── packages/
│   ├── core/        # Shared types and utilities
│   └── ui/          # Shared UI components
└── package.json     # Root package.json
```

## Development

### Desktop App

The desktop app is built with Electron and React. It uses Vite for development and building.

Key features:
- Global hotkey (Cmd/Ctrl + Space)
- Plugin system
- Command palette
- Settings management

### Web App

The web app is built with Next.js and serves as the documentation and download hub.

## Building for Production

```bash
# Build desktop app
pnpm build:desktop

# Build web app
pnpm build:web
```

## License

MIT 