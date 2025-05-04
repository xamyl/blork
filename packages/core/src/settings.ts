import { z } from 'zod';
import { Plugin } from './types';

export const ThemeSchema = z.enum(['light', 'dark', 'system']);
export type Theme = z.infer<typeof ThemeSchema>;

export const HotkeySchema = z.string().regex(/^[A-Za-z0-9]+$/);
export type Hotkey = z.infer<typeof HotkeySchema>;

export const AppearanceSettingsSchema = z.object({
  theme: ThemeSchema,
  fontSize: z.number().min(12).max(24),
  fontFamily: z.string(),
  borderRadius: z.number().min(0).max(20),
  animationSpeed: z.number().min(0).max(2),
  transparency: z.number().min(0).max(100),
});

export const SearchSettingsSchema = z.object({
  fuzzySearch: z.boolean(),
  searchDelay: z.number().min(0).max(1000),
  maxResults: z.number().min(5).max(50),
  searchHistory: z.boolean(),
  historyLimit: z.number().min(0).max(100),
});

export const PluginSettingsSchema = z.object({
  autoUpdate: z.boolean(),
  updateInterval: z.number().min(0).max(24),
  trustedSources: z.array(z.string()),
  disabledPlugins: z.array(z.string()),
});

export const SettingsSchema = z.object({
  appearance: AppearanceSettingsSchema,
  search: SearchSettingsSchema,
  plugins: PluginSettingsSchema,
  hotkey: HotkeySchema,
  language: z.string(),
  notifications: z.boolean(),
  analytics: z.boolean(),
  telemetry: z.boolean(),
});

export type Settings = z.infer<typeof SettingsSchema>;

export class SettingsManager {
  private settings: Settings;
  private listeners: Set<(settings: Settings) => void> = new Set();

  constructor(defaultSettings: Settings) {
    this.settings = SettingsSchema.parse(defaultSettings);
  }

  getSettings(): Settings {
    return this.settings;
  }

  updateSettings(partialSettings: Partial<Settings>): void {
    this.settings = SettingsSchema.parse({
      ...this.settings,
      ...partialSettings,
    });
    this.notifyListeners();
  }

  resetSettings(): void {
    this.settings = SettingsSchema.parse({
      appearance: {
        theme: 'system',
        fontSize: 16,
        fontFamily: 'system-ui',
        borderRadius: 8,
        animationSpeed: 0.2,
        transparency: 0,
      },
      search: {
        fuzzySearch: true,
        searchDelay: 200,
        maxResults: 10,
        searchHistory: true,
        historyLimit: 20,
      },
      plugins: {
        autoUpdate: true,
        updateInterval: 24,
        trustedSources: ['https://api.raycast.com'],
        disabledPlugins: [],
      },
      hotkey: 'Space',
      language: 'en',
      notifications: true,
      analytics: false,
      telemetry: false,
    });
    this.notifyListeners();
  }

  addListener(listener: (settings: Settings) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener(this.settings));
  }
} 