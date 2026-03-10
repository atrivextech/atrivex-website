import type { Metadata } from 'next'
import { Inter, Noto_Sans_Kannada } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoKannada = Noto_Sans_Kannada({ subsets: ['kannada'], weight: ['400', '600', '700'], variable: '--font-noto-kn' })

export const metadata: Metadata = {
  title: 'Atrivex Technology - AI-Enabled Software Development & Solutions',
  description: 'Leading technology company specializing in AI-enabled software development, intelligent automation, cloud services, and digital transformation.',
  keywords: ['AI solutions', 'AI-enabled software', 'software development', 'cloud services', 'digital transformation', 'web development', 'intelligent automation'],
  authors: [{ name: 'Atrivex Technology' }],
  openGraph: {
    title: 'Atrivex Technology - AI-Enabled Software Development & Solutions',
    description: 'Leading technology company specializing in AI-enabled software development, intelligent automation, cloud services, and digital transformation.',
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
      <body className={`${inter.variable} ${notoKannada.variable} font-sans`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
