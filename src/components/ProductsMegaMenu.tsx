import { useTranslation } from 'react-i18next'
import { megaMenuFeaturedImage } from '../data/content'

type MegaLink = { href: string; label: string }
type MegaColumn = { title: string; links: MegaLink[] }
type MegaFeatured = { href: string; imageAlt: string; label: string }

export function ProductsMegaMenu() {
  const { t } = useTranslation()
  const columns = t('megaMenu.columns', { returnObjects: true }) as MegaColumn[]
  const featured = t('megaMenu.featured', { returnObjects: true }) as MegaFeatured

  return (
    <div className="mega-menu" role="region" aria-label={t('megaMenu.aria')}>
      <div className="mega-menu__panel">
        <div className="mega-menu__grid">
          {columns.map((col, index) => (
            <div key={col.title + index} className="mega-menu__column">
              <p className="mega-menu__column-title">{col.title}</p>
              <ul className="mega-menu__list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="mega-menu__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mega-menu__column mega-menu__column--featured">
            <a href={featured.href} className="mega-menu__featured">
              <div className="mega-menu__featured-image-wrap">
                <img
                  src={megaMenuFeaturedImage}
                  alt={featured.imageAlt}
                  className="mega-menu__featured-img"
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
              <span className="mega-menu__featured-label">{featured.label}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
