import { Metadata } from 'next'
import AboutPageContent from '@/components/AboutPageContent'

export const metadata: Metadata = {
  title: 'About Us - Atrivex Technology',
  description: 'AtriVex Technology — a Bengaluru-based product company building software for healthcare, retail, real estate, and education.',
}

export default function AboutPage() {
  return <AboutPageContent />
}
