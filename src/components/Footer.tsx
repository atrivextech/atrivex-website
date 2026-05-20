'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/atrivex-logo.svg" 
                alt="Atrivex Technology" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <h3 className="text-xl font-bold text-gradient">Atrivex</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">{t.nav.about}</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">{t.nav.services}</Link></li>
              <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">{t.nav.products ?? 'Products'}</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <FiMail /> sales@atrivextech.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone /> +91 8884244422
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 flex-shrink-0" /> 
                <span>#07, Bhuvaneshwari Layout B Cross, Nagnathpura Hosa Road, Bengaluru-560100, Karnataka, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/atrivextech" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com/atrivextech" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="https://github.com/atrivextech" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/privacy" className="hover:text-primary-600">{t.footer.privacyPolicy}</Link>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <Link href="/terms" className="hover:text-primary-600">{t.footer.termsOfService}</Link>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <Link href="/impressum" className="hover:text-primary-600">{t.footer.impressum}</Link>
          </div>
          <p className="text-center">{t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-1">
            CIN: U62091KA2026PTC217478 | GSTIN: 29ABFCA1297C1ZQ
          </p>
        </div>
      </div>
    </footer>
  )
}
