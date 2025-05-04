import React, { useState, useEffect } from 'react';
import { Command } from '@blork/core';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [commands, setCommands] = useState<Command[]>([]);

  useEffect(() => {
    // TODO: Load commands from plugins
    setCommands([
      {
        id: '1',
        name: 'Search Google',
        description: 'Search Google for your query',
        action: () => window.open(`https://www.google.com/search?q=${query}`),
      },
      {
        id: '2',
        name: 'Open Settings',
        description: 'Open Blork settings',
        action: () => console.log('Opening settings...'),
      },
    ]);
  }, []);

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-gray-900/95 text-white p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent border-none outline-none text-xl mb-4"
        placeholder="Type to search..."
        autoFocus
      />
      <div className="space-y-2">
        {filteredCommands.map((cmd) => (
          <div
            key={cmd.id}
            className="p-2 hover:bg-gray-800 rounded cursor-pointer"
            onClick={cmd.action}
          >
            <div className="font-medium">{cmd.name}</div>
            <div className="text-sm text-gray-400">{cmd.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App; 