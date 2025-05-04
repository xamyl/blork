import { Plugin, Command } from './types';
import axios from 'axios';

interface RaycastPlugin {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  commands: Array<{
    id: string;
    name: string;
    description: string;
    action: string;
  }>;
}

export class PluginLoader {
  private static RAYCAST_API_URL = 'https://api.raycast.com/v1/plugins';

  static async loadRaycastPlugins(): Promise<Plugin[]> {
    try {
      const response = await axios.get<RaycastPlugin[]>(this.RAYCAST_API_URL);
      return response.data.map((plugin) => this.convertRaycastPlugin(plugin));
    } catch (error) {
      console.error('Failed to load Raycast plugins:', error);
      return [];
    }
  }

  private static convertRaycastPlugin(raycastPlugin: RaycastPlugin): Plugin {
    return {
      id: raycastPlugin.id,
      name: raycastPlugin.name,
      version: raycastPlugin.version,
      author: raycastPlugin.author,
      description: raycastPlugin.description,
      commands: raycastPlugin.commands.map((cmd) => ({
        id: cmd.id,
        name: cmd.name,
        description: cmd.description,
        action: () => {
          // Convert Raycast action to Blork action
          // This is a placeholder - you'll need to implement the actual conversion
          console.log(`Executing Raycast command: ${cmd.name}`);
        },
      })),
    };
  }

  static async loadLocalPlugins(pluginPaths: string[]): Promise<Plugin[]> {
    const plugins: Plugin[] = [];

    for (const path of pluginPaths) {
      try {
        // In a real implementation, you would load the plugin from the file system
        // and validate it against your plugin schema
        const plugin = await import(path);
        if (this.isValidPlugin(plugin)) {
          plugins.push(plugin);
        }
      } catch (error) {
        console.error(`Failed to load plugin from ${path}:`, error);
      }
    }

    return plugins;
  }

  private static isValidPlugin(plugin: unknown): plugin is Plugin {
    // Implement validation logic here
    return true;
  }
} 