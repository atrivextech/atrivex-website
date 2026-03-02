import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: IconType
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition group"
    >
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
        <Icon className="text-primary-600 dark:text-primary-400" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link to="/services" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
        Learn More →
      </Link>
    </motion.div>
  )
}
