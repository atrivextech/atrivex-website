import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Atrivex Technology',
  description: 'Explore our portfolio of successful projects and case studies.',
}

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Built a scalable e-commerce platform handling 100K+ daily transactions',
    image: '/placeholder-project.jpg',
  },
  {
    title: 'AI Chatbot Solution',
    category: 'AI & Automation',
    description: 'Developed an intelligent chatbot reducing customer support costs by 40%',
    image: '/placeholder-project.jpg',
  },
  {
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Migrated enterprise infrastructure to AWS with 99.9% uptime',
    image: '/placeholder-project.jpg',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Created a secure mobile banking app with 500K+ downloads',
    image: '/placeholder-project.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Successful projects that showcase our expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-600 to-accent-500" />
              <div className="p-6">
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
