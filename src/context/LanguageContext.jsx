import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'bn')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (path) => {
    const keys = path.split('.')
    let cur = translations[lang]
    for (const k of keys) cur = cur?.[k]
    if (cur === undefined || cur === null) {
      let fallback = translations.bn
      for (const k of keys) fallback = fallback?.[k]
      return fallback ?? path
    }
    return cur
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
