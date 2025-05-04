import { z } from 'zod';
import { Command, Plugin as PluginType } from './types';

export const CommandSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  action: z.function(),
});

export const PluginSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
  author: z.string(),
  description: z.string(),
  commands: z.array(CommandSchema),
});

export class Plugin implements PluginType {
  constructor(
    public id: string,
    public name: string,
    public version: string,
    public author: string,
    public description: string,
    public commands: Command[]
  ) {}

  static validate(plugin: unknown): Plugin {
    const validated = PluginSchema.parse(plugin);
    return new Plugin(
      validated.id,
      validated.name,
      validated.version,
      validated.author,
      validated.description,
      validated.commands
    );
  }

  registerCommand(command: Command): void {
    this.commands.push(command);
  }

  removeCommand(commandId: string): void {
    this.commands = this.commands.filter((cmd) => cmd.id !== commandId);
  }
}

export class PluginManager {
  private plugins: Map<string, Plugin> = new Map();

  registerPlugin(plugin: Plugin): void {
    this.plugins.set(plugin.id, plugin);
  }

  unregisterPlugin(pluginId: string): void {
    this.plugins.delete(pluginId);
  }

  getPlugin(pluginId: string): Plugin | undefined {
    return this.plugins.get(pluginId);
  }

  getAllPlugins(): Plugin[] {
    return Array.from(this.plugins.values());
  }

  getAllCommands(): Command[] {
    return Array.from(this.plugins.values()).flatMap((plugin) => plugin.commands);
  }
} 