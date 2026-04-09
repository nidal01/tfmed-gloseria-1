import { useTranslation } from 'react-i18next'
import {
  brandLogoSrc,
  contact,
  footerProducts,
  footerVideoEmbedSrc,
} from '../data/content'
import { YouTubeEmbed } from './YouTubeEmbed'
import { products } from '../products/catalog'

export function SiteFooter() {
  const { t } = useTranslation()
  const telHref = `tel:${contact.phone.replace(/\s/g, '')}`

  const hrefByFooterName = (name: string) => {
    const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '')
    const target = normalize(name)
    const entry = Object.values(products).find((p) => normalize(p.title) === target)
    return entry ? `/${entry.slug}` : undefined
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer-video-frame">
        <YouTubeEmbed
          className="footer-video"
          src={footerVideoEmbedSrc}
          title={t('footer.videoTitle')}
        />
      </div>
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          <img
            src={brandLogoSrc}
            alt={t('brand.wordmark')}
            className="footer-logo__img"
            width={280}
            height={70}
            decoding="async"
          />
        </a>

        <div className="footer-content">
          <div className="footer-column">
            <h4>{t('footer.products')}</h4>
            <ul className="product-list">
              {footerProducts.map((name) => (
                <li key={name}>
                  {hrefByFooterName(name) ? (
                    <a href={hrefByFooterName(name)} className="contact-link">
                      {name}
                    </a>
                  ) : (
                    name
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t('footer.contact')}</h4>
            <div className="contact-info">
              <p>
                <span className="contact-icon" aria-hidden="true">
                  📍
                </span>
                <span>
                  {contact.addressLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p>
                <span className="contact-icon" aria-hidden="true">
                  📞
                </span>
                <a href={telHref} className="contact-link">
                  {contact.phone}
                </a>
              </p>
              <p>
                <span className="contact-icon" aria-hidden="true">
                  ✉️
                </span>
                <a href={`mailto:${contact.email}`} className="contact-link">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h4>{t('footer.location')}</h4>
            <div className="map-placeholder">{t('footer.mapPlaceholder')}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
