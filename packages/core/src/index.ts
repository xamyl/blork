export interface Command {
  id: string;
  name: string;
  description: string;
  action: () => void;
}

export type Theme = 'light' | 'dark' | 'system';

export interface Settings {
  appearance: {
    theme: Theme;
    fontSize: number;
    transparency: number;
  };
  search: {
    fuzzySearch: boolean;
    searchDelay: number;
  };
  plugins: {
    autoUpdate: boolean;
    updateInterval: number;
    installed: string[];
  };
  hotkey: string;
  notifications: boolean;
  shortcuts: Record<string, string>;
} 