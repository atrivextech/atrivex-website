import { Metadata } from 'next'
import { services, getServiceBySlug } from '@/lib/services'
import ServiceDetailContent from '@/components/ServiceDetailContent'

type ServicePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found - Atrivex Technology',
    }
  }

  return {
    title: `${service.title} - Atrivex Technology`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  return <ServiceDetailContent slug={params.slug} />
}
