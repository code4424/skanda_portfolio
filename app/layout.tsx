import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Skanda I B',
  description: 'Created by Skanda Idur Balachandra, a software engineer from India.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
