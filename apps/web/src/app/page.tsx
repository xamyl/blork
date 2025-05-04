'use client';

import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { User, Rocket, MonitorSmartphone, Puzzle } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1e293b] text-white flex flex-col items-center justify-center">
      {/* User Agent Button */}
      <div className="absolute top-6 right-8 z-10">
        <Button variant="secondary" size="icon" className="rounded-full shadow-lg hover:scale-110 transition-transform">
          <User className="w-6 h-6" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-32 pb-16">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text drop-shadow-xl text-center">
          Blork
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-8 text-center">
          A powerful, cross-platform application launcher and productivity tool
        </p>
        <Button size="lg" className="mt-2 px-8 py-4 text-lg font-semibold shadow-xl hover:scale-105 transition-transform rounded-full">
          <Rocket className="mr-2 w-5 h-5" /> Download for Windows
        </Button>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-24">
        <Card className="bg-card/80 border-none shadow-2xl hover:shadow-3xl transition-shadow">
          <CardHeader className="flex flex-col items-center text-center gap-2">
            <MonitorSmartphone className="w-10 h-10 text-purple-400 mb-2" />
            <CardTitle>Cross-Platform</CardTitle>
            <CardDescription>
              Available for Windows, macOS, and Linux. Your workflow stays consistent across all platforms.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-card/80 border-none shadow-2xl hover:shadow-3xl transition-shadow">
          <CardHeader className="flex flex-col items-center text-center gap-2">
            <Rocket className="w-10 h-10 text-pink-400 mb-2" />
            <CardTitle>Fast & Efficient</CardTitle>
            <CardDescription>
              Launch applications and perform actions with lightning speed using our powerful search engine.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-card/80 border-none shadow-2xl hover:shadow-3xl transition-shadow">
          <CardHeader className="flex flex-col items-center text-center gap-2">
            <Puzzle className="w-10 h-10 text-indigo-400 mb-2" />
            <CardTitle>Extensible</CardTitle>
            <CardDescription>
              Extend functionality with plugins. Create your own or use community-made plugins.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
} 