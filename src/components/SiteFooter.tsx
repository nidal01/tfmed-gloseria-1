import {
  contact,
  footerHeadings,
  footerProducts,
  mapPlaceholderLabel,
  WORDMARK,
} from '../data/content'

export function SiteFooter() {
  const telHref = `tel:${contact.phone.replace(/\s/g, '')}`

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-logo">{WORDMARK}</div>

        <div className="footer-content">
          <div className="footer-column">
            <h4>{footerHeadings.products}</h4>
            <ul className="product-list">
              {footerProducts.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{footerHeadings.contact}</h4>
            <div className="contact-info">
              <p>
                <span className="contact-icon" aria-hidden="true">
                  📍
                </span>
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
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
            <h4>{footerHeadings.location}</h4>
            <div className="map-placeholder">{mapPlaceholderLabel}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
