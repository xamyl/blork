import './globals.css';

export const metadata = {
  title: 'Blork',
  description: 'A powerful, cross-platform application launcher and productivity tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-white">{children}</body>
    </html>
  )
}
