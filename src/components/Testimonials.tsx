'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const testimonials = [
  {
    quote: 'AtriVex built our entire website with admin panel, bilingual support, and property management — delivered fast and exactly how we needed it.',
    name: 'RAAS Builders & Developers',
    role: 'Real Estate — Shivamogga & Bengaluru',
    initials: 'RB',
  },
  {
    quote: 'QuickFound was a complex geofencing project with GDPR requirements across two markets. The AtriVex team handled both the Android engineering and the compliance aspects seamlessly.',
    name: 'QuickFound Project',
    role: 'Retail Tech — Germany & India',
    initials: 'QF',
  },
  {
    quote: 'We needed a clinic management system that could scale from a single-doctor practice to a multi-branch chain. DocLync was designed with that exact growth path in mind.',
    name: 'DocLync Early Access',
    role: 'Healthcare SaaS — Karnataka',
    initials: 'DL',
  },
]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real projects, real results — from startups to established businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.heading}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t.testimonials.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {t.testimonials.cta}
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition font-semibold text-lg"
            >
              {t.testimonials.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
