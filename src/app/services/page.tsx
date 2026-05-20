import { Metadata } from 'next'
import ServicesPageContent from '@/components/ServicesPageContent'

export const metadata: Metadata = {
  title: 'Our Services - Atrivex Technology',
  description: 'Explore our comprehensive technology services including software development, AI solutions, cloud services, and mobile app development.',
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
