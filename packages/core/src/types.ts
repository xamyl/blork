export interface Command {
  id: string;
  name: string;
  description: string;
  action: () => void;
}

export interface Plugin {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  commands: Command[];
}

export interface Settings {
  theme: 'light' | 'dark' | 'system';
  hotkey: string;
  plugins: Plugin[];
} 