'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      {/* Hero Banner Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hereBanner.png" 
          alt="Hero Banner" 
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-center"
        >
          <Image 
            src="/images/atrivex-full-logo.svg" 
            alt="Atrivex Technology" 
            width={500} 
            height={375}
            className="w-full max-w-md"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-600/80 text-white text-sm font-semibold rounded-full tracking-wide uppercase">
            {t.hero.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white break-words"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          {t.hero.heading}{' '}
          <span
            className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent"
            style={{ textShadow: 'none', WebkitTextStroke: '0px' }}
          >
            {t.hero.headingHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-white font-semibold mb-8 max-w-3xl mx-auto"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium"
          >
            {t.hero.cta}
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-medium"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
