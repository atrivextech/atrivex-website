'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  index: number
}

export default function TestimonialCard({ name, role, content, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={20} />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{content}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">{role}</p>
      </div>
    </motion.div>
  )
}
