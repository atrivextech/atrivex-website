'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en, { type Translations } from '../translations/en'
import de from '../translations/de'
import kn from '../translations/kn'

export type Locale = 'en' | 'de' | 'kn'

const translations: Record<Locale, Translations> = { en, de, kn }

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  kn: 'ಕನ್ನಡ',
}

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('atrivex-locale') as Locale
      if (saved && Object.keys(translations).includes(saved)) {
        setLocaleState(saved)
      }
    } catch {
      // localStorage not available
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem('atrivex-locale', newLocale)
    } catch {
      // localStorage not available
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
