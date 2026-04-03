import { useTranslation } from 'react-i18next'
import { contact, footerProducts } from '../data/content'

export function SiteFooter() {
  const { t } = useTranslation()
  const telHref = `tel:${contact.phone.replace(/\s/g, '')}`

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-logo">{t('brand.wordmark')}</div>

        <div className="footer-content">
          <div className="footer-column">
            <h4>{t('footer.products')}</h4>
            <ul className="product-list">
              {footerProducts.map((name) => (
                <li key={name}>{name}</li>
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
