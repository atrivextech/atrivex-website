'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          Transform Your Business with{' '}
          <span className="text-gradient">Cutting-Edge Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-white font-semibold mb-8 max-w-3xl mx-auto"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          We deliver innovative software solutions, AI automation, and cloud services
          to help businesses thrive in the digital age.
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
            Get Started
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-medium"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
