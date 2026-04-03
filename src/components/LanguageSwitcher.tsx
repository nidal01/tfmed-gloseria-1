import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeSiteLanguage } from '../i18n/config'

function resolveLang(code: string): 'tr' | 'en' {
  return code.startsWith('en') ? 'en' : 'tr'
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

  const pick = (lng: 'tr' | 'en') => {
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
        <span className="lang-selector__label">
          {active === 'tr' ? t('lang.currentTr') : t('lang.currentEn')}
        </span>
        <span className="lang-selector__chevron" aria-hidden="true">
          ▼
        </span>
      </button>
      {open ? (
        <ul className="lang-switcher__menu" role="listbox">
          <li role="none">
            <button
              type="button"
              role="option"
              aria-selected={active === 'tr'}
              className={`lang-switcher__option${active === 'tr' ? ' is-active' : ''}`}
              onClick={() => pick('tr')}
            >
              {t('lang.tr')}
            </button>
          </li>
          <li role="none">
            <button
              type="button"
              role="option"
              aria-selected={active === 'en'}
              className={`lang-switcher__option${active === 'en' ? ' is-active' : ''}`}
              onClick={() => pick('en')}
            >
              {t('lang.en')}
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  )
}
