import { Metadata } from 'next'
import { products, getProductBySlug } from '@/lib/products'
import ProductDetailContent from '@/components/ProductDetailContent'

type ProductPageProps = {
  params: {
    slug: string
  }
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
  return <ProductDetailContent slug={params.slug} />
}
