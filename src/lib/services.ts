import { FiCode, FiCpu, FiCloud, FiSmartphone, FiRefreshCw, FiDatabase } from 'react-icons/fi'

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
  {
    slug: 'digitization',
    title: 'Digitization Services',
    description: 'End-to-end digitization of business processes — from paper to cloud, manual to automated.',
    longDescription: 'We help traditional businesses make the leap to digital. Whether it is converting paper records to searchable digital archives, building custom workflow automation, setting up e-commerce, or digitizing field operations — we handle the full journey from assessment to deployment, training, and ongoing support.',
    icon: FiRefreshCw,
    features: [
      'Business process assessment & digital roadmap',
      'Paper-to-digital document conversion with OCR',
      'Custom workflow automation',
      'E-commerce setup & integration',
      'Field operations digitization (mobile apps)',
      'Staff training & change management',
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Turn your business data into actionable insights with dashboards, reporting, and AI-powered analytics.',
    longDescription: 'Our data and analytics services help businesses unlock the value hidden in their data. We design data pipelines, build interactive dashboards, set up automated reporting, and apply machine learning to surface patterns that drive better decisions.',
    icon: FiDatabase,
    features: [
      'Custom dashboards & reporting',
      'Data pipeline design & ETL',
      'Business intelligence setup',
      'AI-powered predictive analytics',
      'Data warehouse architecture',
      'Real-time monitoring & alerting',
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
