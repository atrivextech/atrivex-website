'use client'

import Link from 'next/link'
import { getServiceBySlug } from '@/lib/services'
import { useLanguage } from '@/contexts/LanguageContext'
import { notFound } from 'next/navigation'

export default function ServiceDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage()
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/services" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            ← {t.services.backToServices}
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-10">
          <div className="flex items-center gap-4 mb-8">
            <service.icon className="text-primary-600 dark:text-primary-400" size={44} />
            <div>
              <h1 className="text-4xl font-bold">{service.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{service.description}</p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{service.longDescription}</p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{t.services.whatWeDeliver}</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 transition">
              {t.services.contactAbout} {service.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
