import { Metadata } from 'next'
import Link from 'next/link'
import { FiCode, FiCpu, FiCloud, FiSmartphone } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Our Services - Atrivex Technology',
  description: 'Explore our comprehensive technology services including software development, AI solutions, cloud services, and mobile app development.',
}

const services = [
  {
    icon: FiCode,
    title: 'Software Development',
    description: 'Custom enterprise software, web applications, and scalable solutions built with modern technologies.',
    slug: 'software-development',
  },
  {
    icon: FiCpu,
    title: 'AI & Automation',
    description: 'Machine learning models, intelligent automation, and AI-powered business solutions.',
    slug: 'ai-automation',
  },
  {
    icon: FiCloud,
    title: 'Cloud Solutions',
    description: 'Cloud migration, infrastructure setup, DevOps, and managed cloud services.',
    slug: 'cloud-solutions',
  },
  {
    icon: FiSmartphone,
    title: 'Web & Mobile Apps',
    description: 'Responsive web applications and native mobile apps for iOS and Android.',
    slug: 'web-mobile-apps',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <service.icon className="text-primary-600 dark:text-primary-400 mb-4" size={40} />
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <Link 
                href={`/services/${service.slug}`}
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
