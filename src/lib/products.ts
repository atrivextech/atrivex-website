import { FiActivity, FiShield, FiBookOpen, FiHome, FiBriefcase, FiSearch, FiTool } from 'react-icons/fi'

export type Product = {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  icon: typeof FiActivity
  logo?: string            // path to logo image in /public
  features: string[]
  techStack: string[]
  status: 'live' | 'beta' | 'coming-soon'
  category: string
}

export const products: Product[] = [
  {
    slug: 'doclync',
    name: 'DocLync',
    tagline: 'Clinic Management, Simplified',
    description: 'A complete clinic management SaaS that a single doctor can set up in 30 minutes and a multi-branch chain can scale into.',
    longDescription: 'DocLync replaces the patchwork of Google Sheets, WhatsApp groups, paper prescriptions, and desktop billing programs that most clinics run on today. It handles appointments, patient records, consultations, prescriptions, billing, lab integrations, telemedicine, and analytics — all from one platform. Multi-tenant by design, HIPAA-aware, and built for the Indian healthcare market.',
    icon: FiActivity,
    features: [
      'Appointment scheduling & queue management',
      'Electronic health records & clinical notes',
      'Digital prescriptions with pharmacy sharing',
      'Billing, payments & insurance claims',
      'Lab & diagnostic integrations',
      'Telemedicine / video consultations',
      'Patient mobile app with reminders',
      'Multi-branch & multi-doctor support',
      'Waiting-room TV display',
      'Owner dashboard & analytics',
    ],
    techStack: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'beta',
    category: 'Healthcare',
  },
  {
    slug: 'atriscan',
    name: 'AtriScan',
    tagline: 'AI-Powered Document Intelligence',
    description: 'Scan, extract, and digitize documents using AI — from invoices and receipts to medical records and legal papers.',
    longDescription: 'AtriScan uses advanced AI and OCR to transform physical documents into structured, searchable digital data. Point your camera at an invoice, prescription, or form — AtriScan extracts the fields, categorizes the document, and stores it securely. Built for businesses drowning in paper: clinics, accounting firms, law offices, and government departments.',
    icon: FiSearch,
    logo: '/images/products/atriscan.png',
    features: [
      'AI-powered OCR with field extraction',
      'Automatic document categorization',
      'Handwriting recognition',
      'Batch scanning & processing',
      'Searchable digital archive',
      'Export to PDF, Excel, JSON',
      'API for integration with other systems',
      'Multi-language document support',
    ],
    techStack: ['Python', 'TensorFlow', 'Flutter', 'FastAPI', 'AWS'],
    status: 'coming-soon',
    category: 'AI / Document Tech',
  },
  {
    slug: 'atriwork',
    name: 'AtriWork',
    tagline: 'Smart Workforce Management',
    description: 'Field workforce tracking, task assignment, attendance, and productivity analytics for teams on the move.',
    longDescription: 'AtriWork is built for businesses with field teams — construction crews, delivery staff, sales reps, maintenance technicians. It tracks real-time location, assigns tasks with geo-verification, manages attendance with selfie check-in, and gives managers a live dashboard of team productivity. No more guesswork about who is where and what got done.',
    icon: FiTool,
    logo: '/images/products/atriwork.png',
    features: [
      'Real-time field staff location tracking',
      'Task assignment with geo-verification',
      'Selfie-based attendance & check-in',
      'Route optimization for field visits',
      'Expense reporting from the field',
      'Manager dashboard & productivity analytics',
      'Offline mode for low-connectivity areas',
      'Payroll integration',
    ],
    techStack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'Firebase'],
    status: 'coming-soon',
    category: 'Workforce',
  },
  {
    slug: 'atrivault',
    name: 'AtriVault',
    tagline: 'Secure Document Management',
    description: 'Enterprise-grade document vault with encryption, access controls, and compliance-ready audit trails.',
    longDescription: 'AtriVault provides businesses with a secure, cloud-based document management system. Every document is encrypted at rest and in transit, with granular role-based access controls and a full audit trail. Built for organizations that need to meet compliance requirements (HIPAA, SOC 2, GDPR) while keeping document workflows simple and fast.',
    icon: FiShield,
    features: [
      'End-to-end document encryption',
      'Role-based access controls',
      'Complete audit trail & compliance reporting',
      'Version history & document recovery',
      'Secure sharing with expiring links',
      'OCR & full-text search',
      'API for system integration',
      'Multi-tenant with tenant isolation',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS S3', 'KMS'],
    status: 'coming-soon',
    category: 'Enterprise',
  },
  {
    slug: 'atricampus',
    name: 'AtriCampus',
    tagline: 'Smart Campus Management',
    description: 'A complete school and college management platform covering admissions, attendance, grades, fees, and parent communication.',
    longDescription: 'AtriCampus digitizes every aspect of educational institution management. From student admissions and attendance tracking to grade management, fee collection, and parent-teacher communication — it replaces paper registers and disconnected spreadsheets with a unified, FERPA-aware platform that works for K-12 schools and colleges alike.',
    icon: FiBookOpen,
    logo: '/images/products/atricampus.png',
    features: [
      'Student admissions & enrollment',
      'Attendance tracking with biometric integration',
      'Grade management & report cards',
      'Fee collection & financial reporting',
      'Parent-teacher communication portal',
      'Timetable & resource scheduling',
      'Library management',
      'Transport tracking',
    ],
    techStack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'coming-soon',
    category: 'Education',
  },
  {
    slug: 'atriestate',
    name: 'AtriEstates',
    tagline: 'Real Estate Made Digital',
    description: 'End-to-end real estate platform for property listing, virtual tours, document management, and transaction tracking.',
    longDescription: 'AtriEstates brings the entire property buying and selling journey online. Agents list properties with photos and virtual tours, buyers browse and shortlist, documents are managed securely, and transactions are tracked from offer to registration. Built for the Indian real estate market with RERA compliance baked in.',
    icon: FiHome,
    logo: '/images/products/atriestate.png',
    features: [
      'Property listing with photos & virtual tours',
      'Buyer-agent matching & communication',
      'Document management & e-signing',
      'Transaction pipeline tracking',
      'RERA compliance tools',
      'EMI calculator & financial planning',
      'Area & locality insights',
      'Agent performance dashboard',
    ],
    techStack: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'coming-soon',
    category: 'Real Estate',
  },
  {
    slug: 'bizos',
    name: 'BizOS',
    tagline: 'Business Operations Platform',
    description: 'Unified workspace for HR, project management, invoicing, and team collaboration — built for small and mid-size businesses.',
    longDescription: 'BizOS is the operating system for your business. It combines HR management, project tracking, time sheets, invoicing, expense management, and team collaboration into one platform. Designed for businesses with 10–500 employees who are tired of juggling 8 different SaaS tools.',
    icon: FiBriefcase,
    features: [
      'HR management & employee directory',
      'Project & task management',
      'Time tracking & timesheets',
      'Invoicing & expense management',
      'Team chat & collaboration',
      'Leave management & attendance',
      'Performance reviews',
      'Custom workflows & automation',
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    status: 'coming-soon',
    category: 'Workplace',
  },
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
