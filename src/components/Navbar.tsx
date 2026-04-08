import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { brandLogoSrc, navRoutes } from '../data/content'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ProductsMegaMenu } from './ProductsMegaMenu'

export function Navbar() {
  const { t } = useTranslation()
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const thresholdPx = 8

    const update = () => {
      setIsAtTop(window.scrollY <= thresholdPx)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`site-header ${isAtTop ? 'site-header--top' : 'site-header--scrolled'}`}>
      <div className="site-header__inner">
        <a href="#home" className="logo">
          <img
            src={brandLogoSrc}
            alt={t('brand.wordmark')}
            className="logo__img"
            width={160}
            height={40}
            decoding="async"
          />
        </a>

        <nav className="site-nav" aria-label={t('nav.aria')}>
          <ul className="nav-menu">
            {navRoutes.map((item) =>
              item.href === '#products' ? (
                <li key={item.href} className="nav-item nav-item--mega">
                  <a href={item.href} className="nav-link nav-link--mega-trigger">
                    {t(item.labelKey)}
                  </a>
                  <ProductsMegaMenu />
                </li>
              ) : (
                <li key={item.href} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {t(item.labelKey)}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  )
}
