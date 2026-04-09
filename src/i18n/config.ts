import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import az from '../locales/az.json'
import de from '../locales/de.json'
import en from '../locales/en.json'
import es from '../locales/es.json'
import pt from '../locales/pt.json'
import ru from '../locales/ru.json'
import tr from '../locales/tr.json'

export const LANGUAGE_STORAGE_KEY = 'site-language'

export const SITE_LANGUAGES = ['tr', 'en', 'de', 'pt', 'es', 'ru', 'az'] as const
export type SiteLanguage = (typeof SITE_LANGUAGES)[number]

function isSiteLanguage(value: string): value is SiteLanguage {
  return (SITE_LANGUAGES as readonly string[]).includes(value)
}

function storedOrBrowserLanguage(): SiteLanguage {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && isSiteLanguage(stored)) return stored
  } catch {
    /* private mode / SSR */
  }
  return 'en'
}

const HTML_LANG: Record<SiteLanguage, string> = {
  tr: 'tr',
  en: 'en',
  de: 'de',
  pt: 'pt',
  es: 'es',
  ru: 'ru',
  az: 'az',
}

function syncDocument(lang: string) {
  const code = isSiteLanguage(lang) ? lang : 'en'
  document.documentElement.lang = HTML_LANG[code]
  document.title = i18n.t('meta.title')
}

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
      de: { translation: de },
      pt: { translation: pt },
      es: { translation: es },
      ru: { translation: ru },
      az: { translation: az },
    },
    lng: storedOrBrowserLanguage(),
    fallbackLng: {
      default: ['en', 'tr'],
      de: ['en', 'tr'],
      pt: ['en', 'tr'],
      es: ['en', 'tr'],
      ru: ['en', 'tr'],
      az: ['tr', 'en'],
    },
    interpolation: { escapeValue: false },
  })
  .then(() => {
    syncDocument(i18n.language)
  })

i18n.on('languageChanged', (lng) => {
  syncDocument(lng)
})

export function changeSiteLanguage(lng: SiteLanguage) {
  void i18n.changeLanguage(lng)
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng)
  } catch {
    /* ignore */
  }
}

export default i18n
