import React from 'react';
import Head from 'next/head';

const plugins = [
  {
    id: '1',
    name: 'Calculator',
    description: 'Perform quick calculations right from your launcher',
    author: 'Blork Team',
    downloads: 1000,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Weather',
    description: 'Get weather information for your location',
    author: 'Blork Team',
    downloads: 800,
    rating: 4.5,
  },
  {
    id: '3',
    name: 'System Info',
    description: 'Monitor your system resources',
    author: 'Blork Team',
    downloads: 600,
    rating: 4.7,
  },
];

export default function Plugins() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Plugins - Blork</title>
        <meta name="description" content="Extend Blork with plugins" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Plugins</h1>
          <p className="text-xl text-gray-400">
            Extend Blork's functionality with plugins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plugins.map((plugin) => (
            <div
              key={plugin.id}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{plugin.name}</h3>
              <p className="text-gray-400 mb-4">{plugin.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">by {plugin.author}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★ {plugin.rating}</span>
                  <span className="text-gray-500">
                    {plugin.downloads.toLocaleString()} downloads
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 