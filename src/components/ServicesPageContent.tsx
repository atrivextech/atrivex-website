'use client'

import Link from 'next/link'
import { services as SERVICES } from '@/lib/services'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesPageContent() {
  const { t } = useLanguage()

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t.services.heading}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.services.pageSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.slug} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <service.icon className="text-primary-600 dark:text-primary-400 mb-4" size={40} />
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                {t.services.learnMore} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
