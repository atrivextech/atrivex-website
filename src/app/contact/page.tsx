import { Metadata } from 'next'
import ContactPageContent from '@/components/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us - Atrivex Technology',
  description: 'Get in touch with Atrivex Technology. We are here to help with your technology needs.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
