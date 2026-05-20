import { Metadata } from 'next'
import Link from 'next/link'
import { FiMapPin, FiCalendar, FiUsers, FiGlobe } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'About Us - Atrivex Technology',
  description: 'AtriVex Technology — a Bengaluru-based product company building software for healthcare, retail, real estate, and education.',
}

const milestones = [
  { year: '2023', event: 'AtriVex Technology Pvt. Ltd. incorporated in Bengaluru' },
  { year: '2024', event: 'QuickFound launched on Google Play Store (Germany & India)' },
  { year: '2025', event: 'DocLync clinic management enters beta with early adopters' },
  { year: '2026', event: 'Product portfolio grows to 6+ products across 4 industries' },
]

const team = [
  {
    name: 'Vinayak K V',
    role: 'Founder & CEO',
    bio: 'Full-stack engineer and entrepreneur. Built AtriVex from a solo consultancy into a product company spanning healthcare, retail, and real estate.',
    initials: 'VK',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About AtriVex</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a Bengaluru-based technology company that builds software products for industries
            where digital tools are still an afterthought — healthcare clinics, retail shops, real estate agencies, and schools.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-4">
            <p>
              AtriVex started with a simple observation: millions of small and mid-size businesses in India
              and abroad still run on spreadsheets, WhatsApp groups, and paper registers. Not because they
              do not want technology — but because the software available is either too expensive, too complex,
              or not built for how they actually work.
            </p>
            <p>
              We set out to change that. Our first product, <strong>QuickFound</strong>, was a location-based
              retail app built for the German and Indian markets. Then came <strong>DocLync</strong> — after
              watching a doctor in Shivamogga manage appointments on a WhatsApp group and prescriptions on a
              notepad, we realized clinic management software did not have to be a ₹5 lakh hospital system.
              It could be a simple SaaS that a single doctor sets up in 30 minutes.
            </p>
            <p>
              Today, we are building products across healthcare, retail, real estate, education, and enterprise —
              each one designed to be simple enough for a non-technical owner to run, and robust enough to
              scale to hundreds of branches.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiCalendar className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">2023</div>
            <div className="text-sm text-gray-500">Founded</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiMapPin className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">Bengaluru</div>
            <div className="text-sm text-gray-500">Headquarters</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiUsers className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">6+</div>
            <div className="text-sm text-gray-500">Products</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiGlobe className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">India & EU</div>
            <div className="text-sm text-gray-500">Markets</div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mt-1.5" />
                  {i < milestones.length - 1 && (
                    <div className="absolute top-4 left-1 w-0.5 h-8 bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 pt-0.5">{m.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
            {/* Hiring card */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-primary-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-3">+</div>
              <h3 className="text-lg font-semibold mb-2">Join the team</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                We are always looking for engineers and designers who want to build products that matter.
              </p>
              <Link
                href="/contact"
                className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline"
              >
                Get in touch &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">Ship real products, not demos</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Every product we build goes to production with real users. We measure success by adoption, not feature count.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">Simple enough for the owner</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">If a clinic owner or a shop manager cannot figure out the software in 30 minutes without training, we have failed.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">Build once, serve many</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Multi-tenant from day one. One deployment serves hundreds of businesses, each with their own data, branding, and billing.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">India-first, global-ready</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">We design for Indian markets first — UPI, regional languages, local compliance — then expand to Europe and beyond.</p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Where We Are</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-start gap-4 mb-4">
              <FiMapPin className="text-primary-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">AtriVex Technology Pvt. Ltd.</p>
                <p className="text-gray-600 dark:text-gray-400">
                  #07, Bhuvaneshwari Layout B Cross, Nagnathpura Hosa Road,<br />
                  Bengaluru 560100, Karnataka, India
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our office is near Electronic City, one of Bengaluru&apos;s major IT hubs. We chose this location
              for its proximity to talent, clients, and the startup ecosystem that makes Bengaluru the
              technology capital of India.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
