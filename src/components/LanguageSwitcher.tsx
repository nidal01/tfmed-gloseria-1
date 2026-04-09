import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeSiteLanguage, type SiteLanguage } from '../i18n/config'

const CURRENT_LABEL_KEY: Record<SiteLanguage, string> = {
  tr: 'lang.currentTr',
  en: 'lang.currentEn',
  de: 'lang.currentDe',
  pt: 'lang.currentPt',
  es: 'lang.currentEs',
  ru: 'lang.currentRu',
  az: 'lang.currentAz',
}

const LANG_OPTIONS: { code: SiteLanguage; labelKey: string }[] = [
  { code: 'tr', labelKey: 'lang.tr' },
  { code: 'en', labelKey: 'lang.en' },
  { code: 'de', labelKey: 'lang.de' },
  { code: 'pt', labelKey: 'lang.pt' },
  { code: 'es', labelKey: 'lang.es' },
  { code: 'ru', labelKey: 'lang.ru' },
  { code: 'az', labelKey: 'lang.az' },
]

function resolveLang(code: string): SiteLanguage {
  const c = code.toLowerCase()
  if (c.startsWith('tr')) return 'tr'
  if (c.startsWith('en')) return 'en'
  if (c.startsWith('de')) return 'de'
  if (c.startsWith('pt')) return 'pt'
  if (c.startsWith('es')) return 'es'
  if (c.startsWith('ru')) return 'ru'
  if (c.startsWith('az')) return 'az'
  return 'en'
}

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const active = resolveLang(i18n.language)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return
      setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  const pick = (lng: SiteLanguage) => {
    changeSiteLanguage(lng)
    setOpen(false)
  }

  return (
    <div className="lang-switcher" ref={rootRef}>
      <button
        type="button"
        className={`lang-selector${open ? ' lang-selector--open' : ''}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('lang.switch')}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((v) => !v)
        }}
      >
        <span className="lang-selector__label">{t(CURRENT_LABEL_KEY[active])}</span>
        <span className="lang-selector__chevron" aria-hidden="true">
          ▼
        </span>
      </button>
      {open ? (
        <ul className="lang-switcher__menu" role="listbox">
          {LANG_OPTIONS.map(({ code, labelKey }) => (
            <li key={code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={active === code}
                className={`lang-switcher__option${active === code ? ' is-active' : ''}`}
                onClick={() => pick(code)}
              >
                {t(labelKey)}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
