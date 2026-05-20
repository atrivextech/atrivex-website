import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { products, getProductBySlug } from '@/lib/products'

type ProductPageProps = {
  params: {
    slug: string
  }
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

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return { title: 'Product Not Found - Atrivex Technology' }
  }

  return {
    title: `${product.name} — ${product.tagline} | Atrivex Technology`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/products" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            &larr; All Products
          </Link>
        </div>

        {/* Hero */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden">
          <div className="h-3 bg-gradient-to-r from-primary-600 to-accent-500" />
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              {product.logo ? (
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={product.logo} alt={product.name} width={80} height={80} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <product.icon className="text-white" size={36} />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[product.status]}`}>
                    {statusLabels[product.status]}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl text-primary-600 dark:text-primary-400 font-medium">
                  {product.tagline}
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              {product.longDescription}
            </p>

            {/* Features */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Built With</h2>
              <div className="flex flex-wrap gap-3">
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">
                {product.status === 'coming-soon'
                  ? `Interested in ${product.name}?`
                  : `Get started with ${product.name}`}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
                {product.status === 'coming-soon'
                  ? 'Join the waitlist to be notified when we launch, or talk to us about early access.'
                  : 'Schedule a demo or talk to our team about how this product can work for your business.'}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 text-white hover:bg-primary-700 transition font-medium"
              >
                {product.status === 'coming-soon' ? 'Join Waitlist' : 'Schedule a Demo'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
