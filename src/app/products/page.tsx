import { Metadata } from 'next'
import ProductsPageContent from '@/components/ProductsPageContent'

export const metadata: Metadata = {
  title: 'Our Products - Atrivex Technology',
  description: 'Explore AtriVex products: DocLync clinic management, AtriScan document AI, AtriVault security, AtriWork workforce management, and more.',
}

export default function ProductsPage() {
  return <ProductsPageContent />
}
