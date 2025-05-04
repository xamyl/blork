import React, { useState, useEffect, useRef } from 'react';
import { Command } from 'blorkcast-core';

interface CommandPaletteProps {
  commands: Command[];
  onCommandSelect: (command: Command) => void;
  placeholder?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  commands,
  onCommandSelect,
  placeholder = 'Type to search...',
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          onCommandSelect(filteredCommands[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredCommands, selectedIndex, onCommandSelect]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 text-lg bg-gray-800/95 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {filteredCommands.length > 0 && (
        <div className="mt-2 bg-gray-800/95 rounded-lg border border-gray-700 max-h-96 overflow-y-auto">
          {filteredCommands.map((cmd, index) => (
            <div
              key={cmd.id}
              className={`px-4 py-3 cursor-pointer ${
                index === selectedIndex ? 'bg-gray-700' : 'hover:bg-gray-700/50'
              }`}
              onClick={() => onCommandSelect(cmd)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-white">{cmd.name}</div>
                  <div className="text-sm text-gray-400">{cmd.description}</div>
                </div>
                {index === selectedIndex && (
                  <div className="text-gray-400">↵</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {query && filteredCommands.length === 0 && (
        <div className="mt-2 text-center text-gray-400">
          No commands found
        </div>
      )}
    </div>
  );
}; 