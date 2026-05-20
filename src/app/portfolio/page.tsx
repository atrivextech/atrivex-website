import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - Atrivex Technology',
  description: 'Real projects built by AtriVex: DocLync clinic management, QuickFound retail app, RAAS Builders website, and business digitization.',
}

const projects = [
  {
    title: 'DocLync',
    category: 'Healthcare SaaS',
    description: 'Complete clinic management platform handling appointments, patient records, prescriptions, billing, and telemedicine for doctors and multi-branch clinics across India.',
    highlights: ['Multi-tenant architecture', 'HIPAA-aware', 'Web + Mobile'],
    link: '/products/doclync',
  },
  {
    title: 'QuickFound',
    category: 'Retail Mobile App',
    description: 'Location-based Android app using geofencing to deliver real-time retail offers. GDPR-compliant, supporting English and German markets with deep linking to partner stores.',
    highlights: ['Geofencing', 'GDPR compliant', 'Play Store live'],
    link: '/products/quickfound',
  },
  {
    title: 'RAAS Builders Website',
    category: 'Real Estate — Web',
    description: 'Full-featured real estate website for RAAS Builders & Developers with property listings, construction packages, admin panel, dual-language support (English/Kannada), and AWS deployment.',
    highlights: ['Admin panel', 'Bilingual', 'AWS hosted'],
    link: null,
  },
  {
    title: 'Business Digitization',
    category: 'Digitization Services',
    description: 'End-to-end digitization projects helping traditional businesses move from paper-based operations to cloud-based digital workflows, including document OCR, e-commerce setup, and custom automation.',
    highlights: ['Process automation', 'OCR & archival', 'Training & handoff'],
    link: '/services/digitization',
  },
  {
    title: 'AtriVault',
    category: 'Enterprise Security',
    description: 'Secure document management system with encryption at rest and in transit, role-based access, audit trails, and compliance-ready reporting for regulated industries.',
    highlights: ['End-to-end encryption', 'Audit trails', 'Compliance ready'],
    link: '/products/atrivault',
  },
  {
    title: 'AtriCampus',
    category: 'Education Platform',
    description: 'School and college management platform covering admissions, attendance, grades, fee collection, and parent-teacher communication. Designed for Indian educational institutions.',
    highlights: ['FERPA aware', 'Mobile app', 'Multi-institution'],
    link: '/products/atricampus',
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real products and projects we have built for businesses across healthcare, retail, real estate, and education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const cardContent = (
              <>
                <div className="h-3 bg-gradient-to-r from-primary-600 to-accent-500" />
                <div className="p-8">
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <p className="mt-4 text-sm text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                      View details &rarr;
                    </p>
                  )}
                </div>
              </>
            )

            return project.link ? (
              <Link
                key={project.title}
                href={project.link}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group"
              >
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
