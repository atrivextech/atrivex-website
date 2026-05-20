'use client'

import { motion } from 'framer-motion'

const industries = [
  { name: 'Healthcare', emoji: '🏥' },
  { name: 'Retail', emoji: '🛒' },
  { name: 'Real Estate', emoji: '🏠' },
  { name: 'Education', emoji: '🎓' },
  { name: 'Enterprise', emoji: '🏢' },
  { name: 'Fintech', emoji: '💳' },
]

export default function TrustBar() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
          Building for industries that matter
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <span className="text-lg">{ind.emoji}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
