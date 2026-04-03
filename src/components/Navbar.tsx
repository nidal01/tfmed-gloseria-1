import { useTranslation } from 'react-i18next'
import { navRoutes } from '../data/content'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ProductsMegaMenu } from './ProductsMegaMenu'

export function Navbar() {
  const { t } = useTranslation()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="logo">
          {t('brand.wordmark')}
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
