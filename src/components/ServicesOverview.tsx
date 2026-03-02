'use client'

import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { FiCode, FiCpu, FiCloud, FiSmartphone } from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with modern technologies.',
    link: '/services/software-development',
  },
  {
    icon: FiCpu,
    title: 'AI & Automation',
    description: 'Intelligent automation and AI-powered solutions to optimize your operations.',
    link: '/services/ai-automation',
  },
  {
    icon: FiCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    link: '/services/cloud-solutions',
  },
  {
    icon: FiSmartphone,
    title: 'Web & Mobile Apps',
    description: 'Responsive web and mobile applications that deliver exceptional user experiences.',
    link: '/services/web-mobile-apps',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward
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
