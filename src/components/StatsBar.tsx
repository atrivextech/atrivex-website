'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const stats = [
  { value: '8+', labelKey: 'products' },
  { value: '5+', labelKey: 'industries' },
  { value: '10+', labelKey: 'clients' },
  { value: '2+', labelKey: 'countries' },
]

const labels: Record<string, Record<string, string>> = {
  products: { en: 'Products Built', de: 'Entwickelte Produkte', kn: 'ನಿರ್ಮಿಸಿದ ಉತ್ಪನ್ನಗಳು' },
  industries: { en: 'Industries Served', de: 'Branchen bedient', kn: 'ಸೇವಿಸಿದ ಉದ್ಯಮಗಳು' },
  clients: { en: 'Clients & Partners', de: 'Kunden & Partner', kn: 'ಗ್ರಾಹಕರು ಮತ್ತು ಪಾಲುದಾರರು' },
  countries: { en: 'Countries', de: 'Länder', kn: 'ದೇಶಗಳು' },
}

export default function StatsBar() {
  const { locale } = useLanguage()

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                {labels[stat.labelKey][locale] || labels[stat.labelKey].en}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
