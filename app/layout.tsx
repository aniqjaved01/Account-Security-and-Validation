import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Login Application',
  description: 'Created by Aniq Javed'
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
