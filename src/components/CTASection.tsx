'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-white"
      >
        <h2 className="text-4xl font-bold mb-4">{t.cta.heading}</h2>
        <p className="text-xl mb-8 opacity-90">
          {t.cta.description}
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition font-medium"
        >
          {t.cta.button}
        </Link>
      </motion.div>
    </section>
  )
}
