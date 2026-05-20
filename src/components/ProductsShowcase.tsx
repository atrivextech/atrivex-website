'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'
import { useLanguage } from '@/contexts/LanguageContext'

const statusColors = {
  live: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  beta: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'coming-soon': 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}

const statusLabels = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

export default function ProductsShowcase() {
  const { t } = useLanguage()
  const featured = products.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.products?.heading ?? 'Our Products'}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.products?.subheading ?? 'Purpose-built software products solving real problems in healthcare, retail, and enterprise'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`} className="block group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="h-2 bg-gradient-to-r from-primary-600 to-accent-500" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      {product.logo ? (
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={product.logo} alt={product.name} width={56} height={56} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <product.icon className="text-white" size={24} />
                        </div>
                      )}
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[product.status]}`}>
                        {statusLabels[product.status]}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition font-medium"
          >
            {t.products?.viewAll ?? 'View All Products'} &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
