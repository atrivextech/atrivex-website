'use client'

import Link from 'next/link'
import { FiMapPin, FiCalendar, FiUsers, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPageContent() {
  const { t } = useLanguage()

  const milestones = [
    { year: '2023', event: t.about.milestone1 },
    { year: '2024', event: t.about.milestone2 },
    { year: '2025', event: t.about.milestone3 },
    { year: '2026', event: t.about.milestone4 },
  ]

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">{t.about.heading}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">{t.about.ourStory}</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-4">
            <p>{t.about.storyP1}</p>
            <p>{t.about.storyP2}</p>
            <p>{t.about.storyP3}</p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiCalendar className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">2023</div>
            <div className="text-sm text-gray-500">{t.about.founded}</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiMapPin className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">Bengaluru</div>
            <div className="text-sm text-gray-500">{t.about.headquarters}</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiUsers className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">7+</div>
            <div className="text-sm text-gray-500">{t.about.productsLabel}</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <FiGlobe className="mx-auto mb-2 text-primary-600" size={24} />
            <div className="text-2xl font-bold">India & EU</div>
            <div className="text-sm text-gray-500">{t.about.markets}</div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">{t.about.ourJourney}</h2>
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
          <h2 className="text-3xl font-semibold mb-8">{t.about.theTeam}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                VK
              </div>
              <h3 className="text-xl font-semibold">{t.about.founderName}</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">{t.about.founderRole}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.about.founderBio}</p>
            </div>
            {/* Hiring card */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-primary-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-3">+</div>
              <h3 className="text-lg font-semibold mb-2">{t.about.joinTeam}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {t.about.joinTeamDesc}
              </p>
              <Link
                href="/contact"
                className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline"
              >
                {t.about.getInTouch} &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">{t.about.whatWeBelieve}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">{t.about.value1Title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t.about.value1Desc}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">{t.about.value2Title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t.about.value2Desc}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">{t.about.value3Title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t.about.value3Desc}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-2">{t.about.value4Title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t.about.value4Desc}</p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">{t.about.whereWeAre}</h2>
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
              {t.about.locationDesc}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
