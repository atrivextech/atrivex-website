import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Our Products - Atrivex Technology',
  description: 'Explore AtriVex products: DocLync clinic management, AtriScan document AI, AtriVault security, AtriWork workforce management, and more.',
}

const statusColors: Record<string, string> = {
  live: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  beta: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'coming-soon': 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}

const statusLabels: Record<string, string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Purpose-built software products solving real problems across healthcare, retail, education, real estate, and enterprise operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="h-2 bg-gradient-to-r from-primary-600 to-accent-500" />
                <div className="p-8 flex flex-col flex-1">
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

                  <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                    {product.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Have a product idea?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We build custom software products for businesses. Tell us about your challenge and we will design a solution.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  )
}
