import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import tr from '../locales/tr.json'

export const LANGUAGE_STORAGE_KEY = 'site-language'

function storedOrBrowserLanguage(): string {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === 'tr' || stored === 'en') return stored
  } catch {
    /* private mode / SSR */
  }
  if (typeof navigator !== 'undefined') {
    const nav = navigator.language.toLowerCase()
    if (nav.startsWith('en')) return 'en'
  }
  return 'tr'
}

function syncDocument(lang: string) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'tr'
  document.title = i18n.t('meta.title')
}

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
    },
    lng: storedOrBrowserLanguage(),
    fallbackLng: 'tr',
    interpolation: { escapeValue: false },
  })
  .then(() => {
    syncDocument(i18n.language)
  })

i18n.on('languageChanged', (lng) => {
  syncDocument(lng)
})

export function changeSiteLanguage(lng: 'tr' | 'en') {
  void i18n.changeLanguage(lng)
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng)
  } catch {
    /* ignore */
  }
}

export default i18n
