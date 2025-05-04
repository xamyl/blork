import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            Blork
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/plugins"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Plugins
            </Link>
            <Link
              href="/docs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/download"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 