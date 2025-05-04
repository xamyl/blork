'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faWindows, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface Release {
  tag_name: string;
  assets: ReleaseAsset[];
  published_at: string;
}

export const Download: React.FC = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/xamyl/blork/releases', {
          headers: {
            'User-Agent': 'Blork-Downloader/1.0',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch releases');
        }

        const data = await response.json();
        setReleases(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch releases');
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const getAssetForPlatform = (assets: ReleaseAsset[], platform: string) => {
    return assets.find(asset => 
      asset.name.toLowerCase().includes(platform.toLowerCase())
    );
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Byte';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  const latestRelease = releases[0];
  if (!latestRelease) {
    return (
      <div className="text-gray-500 text-center p-4">
        No releases available
      </div>
    );
  }

  const windowsAsset = getAssetForPlatform(latestRelease.assets, 'windows');
  const macAsset = getAssetForPlatform(latestRelease.assets, 'mac');
  const linuxAsset = getAssetForPlatform(latestRelease.assets, 'linux');

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Download Blork</h2>
        <p className="text-gray-400">Version {latestRelease.tag_name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {windowsAsset && (
          <a
            href={windowsAsset.browser_download_url}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FontAwesomeIcon icon={faWindows} className="text-4xl mb-4" />
            <span className="font-semibold">Windows</span>
            <span className="text-sm text-gray-400">{formatFileSize(windowsAsset.size)}</span>
            <div className="mt-4 flex items-center text-blue-400">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download
            </div>
          </a>
        )}

        {macAsset && (
          <a
            href={macAsset.browser_download_url}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FontAwesomeIcon icon={faApple} className="text-4xl mb-4" />
            <span className="font-semibold">macOS</span>
            <span className="text-sm text-gray-400">{formatFileSize(macAsset.size)}</span>
            <div className="mt-4 flex items-center text-blue-400">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download
            </div>
          </a>
        )}

        {linuxAsset && (
          <a
            href={linuxAsset.browser_download_url}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FontAwesomeIcon icon={faLinux} className="text-4xl mb-4" />
            <span className="font-semibold">Linux</span>
            <span className="text-sm text-gray-400">{formatFileSize(linuxAsset.size)}</span>
            <div className="mt-4 flex items-center text-blue-400">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download
            </div>
          </a>
        )}
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>Released on {new Date(latestRelease.published_at).toLocaleDateString()}</p>
        <a
          href={`https://github.com/yourusername/blork/releases/tag/${latestRelease.tag_name}`}
          className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
        >
          View all releases
        </a>
      </div>
    </div>
  );
}; 