import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atrivex Technology - Software Development & AI Solutions',
  description: 'Leading technology company specializing in software development, AI solutions, cloud services, and digital transformation.',
  keywords: ['software development', 'AI solutions', 'cloud services', 'digital transformation', 'web development'],
  authors: [{ name: 'Atrivex Technology' }],
  openGraph: {
    title: 'Atrivex Technology - Software Development & AI Solutions',
    description: 'Leading technology company specializing in software development, AI solutions, cloud services, and digital transformation.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
