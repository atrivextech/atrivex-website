'use client'

import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { FiCode, FiCpu, FiCloud, FiSmartphone } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesOverview() {
  const { t } = useLanguage()

  const services = [
    {
      icon: FiCode,
      title: t.services.items.software.title,
      description: t.services.items.software.description,
      link: '/services',
    },
    {
      icon: FiCpu,
      title: t.services.items.ai.title,
      description: t.services.items.ai.description,
      link: '/services',
    },
    {
      icon: FiCloud,
      title: t.services.items.cloud.title,
      description: t.services.items.cloud.description,
      link: '/services',
    },
    {
      icon: FiSmartphone,
      title: t.services.items.mobile.title,
      description: t.services.items.mobile.description,
      link: '/services',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.services.heading}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.services.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
