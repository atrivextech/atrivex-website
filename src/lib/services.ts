import { FiCode, FiCpu, FiCloud, FiSmartphone } from 'react-icons/fi'

export type Service = {
  slug: string
  title: string
  description: string
  longDescription: string
  icon: typeof FiCode
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'software-development',
    title: 'Software Development',
    description: 'Custom enterprise software, web applications, and scalable solutions built with modern technologies.',
    longDescription: 'We build custom enterprise software and web solutions with a sharp focus on scalability, reliability, and user experience. Our team delivers end-to-end systems that align with your business goals and modern technical standards.',
    icon: FiCode,
    features: [
      'Custom web and desktop applications',
      'API development and system integration',
      'Enterprise-grade architecture and security',
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    description: 'Machine learning models, intelligent automation, and AI-powered business solutions.',
    longDescription: 'Our AI and automation services help businesses unlock more value from data, streamline workflows, and reduce manual effort. We design intelligent systems that automate complex processes while improving accuracy and efficiency.',
    icon: FiCpu,
    features: [
      'Machine learning model development',
      'Robotic process automation',
      'Intelligent workflow orchestration',
    ],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud migration, infrastructure setup, DevOps, and managed cloud services.',
    longDescription: 'Our cloud solutions help companies migrate safely to the cloud, build resilient infrastructure, and operate with modern DevOps practices. We provide managed support for AWS, Azure, and cloud-native platforms tailored to your needs.',
    icon: FiCloud,
    features: [
      'Cloud architecture and migration',
      'Platform engineering and automation',
      'Managed infrastructure and support',
    ],
  },
  {
    slug: 'web-mobile-apps',
    title: 'Web & Mobile Apps',
    description: 'Responsive web applications and native mobile apps for iOS and Android.',
    longDescription: 'From responsive web apps to native mobile experiences, we design and build digital products that delight users on every device. Our team focuses on usability, performance, and seamless cross-platform delivery.',
    icon: FiSmartphone,
    features: [
      'Responsive web application development',
      'Native iOS and Android apps',
      'Cross-platform UI/UX design',
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
