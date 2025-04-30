import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Scorecard',
  description: 'A fresh start for the Scorecard app.'
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
