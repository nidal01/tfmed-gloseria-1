import { langSelectorLabel, navLinks, WORDMARK } from '../data/content'
import { ProductsMegaMenu } from './ProductsMegaMenu'

export function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="logo">
          {WORDMARK}
        </a>

        <nav className="site-nav" aria-label="Ana menü">
          <ul className="nav-menu">
            {navLinks.map((link) =>
              link.href === '#products' ? (
                <li key={link.href} className="nav-item nav-item--mega">
                  <a href={link.href} className="nav-link nav-link--mega-trigger">
                    {link.label}
                  </a>
                  <ProductsMegaMenu />
                </li>
              ) : (
                <li key={link.href} className="nav-item">
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button type="button" className="lang-selector" aria-label="Dil seç">
          {langSelectorLabel}
        </button>
      </div>
    </header>
  )
}
