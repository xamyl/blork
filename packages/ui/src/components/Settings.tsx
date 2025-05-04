import React from 'react';
import { Settings, Theme } from '@blork/core';
import { Switch } from './Switch';
import { Select } from './Select';
import { Slider } from './Slider';
import { Input } from './Input';

interface SettingsProps {
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
}

export const SettingsUI: React.FC<SettingsProps> = ({
  settings,
  onSettingsChange,
}) => {
  const updateSettings = (partialSettings: Partial<Settings>) => {
    onSettingsChange({ ...settings, ...partialSettings });
  };

  return (
    <div className="space-y-8 p-6">
      <section>
        <h2 className="text-xl font-bold mb-4">Appearance</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Theme</label>
            <Select
              value={settings.appearance.theme}
              onChange={(theme) =>
                updateSettings({
                  appearance: { ...settings.appearance, theme: theme as Theme },
                })
              }
              options={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' },
              ]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Font Size</label>
            <Slider
              value={settings.appearance.fontSize}
              onChange={(value) =>
                updateSettings({
                  appearance: { ...settings.appearance, fontSize: value },
                })
              }
              min={12}
              max={24}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Transparency</label>
            <Slider
              value={settings.appearance.transparency}
              onChange={(value) =>
                updateSettings({
                  appearance: { ...settings.appearance, transparency: value },
                })
              }
              min={0}
              max={100}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Search</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Fuzzy Search</label>
            <Switch
              checked={settings.search.fuzzySearch}
              onChange={(checked) =>
                updateSettings({
                  search: { ...settings.search, fuzzySearch: checked },
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Search Delay (ms)
            </label>
            <Slider
              value={settings.search.searchDelay}
              onChange={(value) =>
                updateSettings({
                  search: { ...settings.search, searchDelay: value },
                })
              }
              min={0}
              max={1000}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Plugins</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Auto Update</label>
            <Switch
              checked={settings.plugins.autoUpdate}
              onChange={(checked) =>
                updateSettings({
                  plugins: { ...settings.plugins, autoUpdate: checked },
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Update Interval (hours)
            </label>
            <Slider
              value={settings.plugins.updateInterval}
              onChange={(value) =>
                updateSettings({
                  plugins: { ...settings.plugins, updateInterval: value },
                })
              }
              min={0}
              max={24}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">General</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Hotkey</label>
            <Input
              value={settings.hotkey}
              onChange={(value) => updateSettings({ hotkey: value })}
              placeholder="Press a key..."
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Notifications</label>
            <Switch
              checked={settings.notifications}
              onChange={(checked) =>
                updateSettings({ notifications: checked })
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}; 