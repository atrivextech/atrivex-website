'use client'

import { useState } from 'react'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'
import { useLanguage, localeLabels, type Locale } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const locales = Object.keys(localeLabels) as Locale[]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300"
        aria-label="Switch language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <FiGlobe size={18} />
        <span className="text-sm font-medium hidden sm:inline">{localeLabels[locale]}</span>
        <FiChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          {/* Dropdown */}
          <ul
            role="listbox"
            aria-label="Select language"
            className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20 py-1 overflow-hidden"
          >
            {locales.map((l) => (
              <li key={l} role="option" aria-selected={l === locale}>
                <button
                  onClick={() => {
                    setLocale(l)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition hover:bg-gray-50 dark:hover:bg-gray-800 ${
                    l === locale
                      ? 'text-primary-600 dark:text-primary-400 font-semibold bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {localeLabels[l]}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
