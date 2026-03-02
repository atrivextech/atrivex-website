import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiZap, FiShield } from 'react-icons/fi'

const features = [
  {
    icon: FiAward,
    title: 'Expert Team',
    description: 'Highly skilled professionals with years of industry experience',
  },
  {
    icon: FiZap,
    title: 'Fast Delivery',
    description: 'Agile methodology ensuring quick turnaround times',
  },
  {
    icon: FiShield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes',
  },
  {
    icon: FiUsers,
    title: 'Client-Focused',
    description: 'Dedicated support and transparent communication',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Atrivex</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We combine technical excellence with business understanding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
