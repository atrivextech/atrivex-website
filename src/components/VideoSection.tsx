'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function VideoSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t.video.heading}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{t.video.subheading}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            controls
            preload="metadata"
            poster="/images/hereBanner.png"
          >
            <source src="/videos/atrivex-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  )
}
