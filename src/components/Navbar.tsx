import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { brandLogoSrc, megaMenuFeaturedImage, navRoutes } from '../data/content'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ProductsMegaMenu } from './ProductsMegaMenu'
import { Link } from '@tanstack/react-router'

type MegaLink = { href: string; label: string }
type MegaColumn = { title: string; links: MegaLink[] }
type MegaFeatured = { href: string; imageAlt: string; label: string }

export function Navbar() {
  const { t } = useTranslation()
  const [isAtTop, setIsAtTop] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const drawerId = useId()
  const productsPanelId = useId()
  const openBtnRef = useRef<HTMLButtonElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const megaColumns = useMemo(() => {
    return t('megaMenu.columns', { returnObjects: true }) as MegaColumn[]
  }, [t])
  const megaFeatured = useMemo(() => {
    return t('megaMenu.featured', { returnObjects: true }) as MegaFeatured
  }, [t])

  useEffect(() => {
    const thresholdPx = 8

    const update = () => {
      setIsAtTop(window.scrollY <= thresholdPx)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const openBtn = openBtnRef.current
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      openBtn?.focus()
    }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileProductsOpen(false)
    setMobileOpen(false)
  }

  return (
    <header className={`site-header ${isAtTop ? 'site-header--top' : 'site-header--scrolled'}`}>
      <div className="site-header__inner">
        <Link to="/" className="logo">
          <img
            src={brandLogoSrc}
            alt={t('brand.wordmark')}
            className="logo__img"
            width={160}
            height={40}
            decoding="async"
          />
        </Link>

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
              ) : item.href === '#corporate' ? (
                <li key={item.href} className="nav-item">
                  <Link to="/kurumsal" className="nav-link">
                    {t(item.labelKey)}
                  </Link>
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

        <div className="site-header__actions">
          <LanguageSwitcher />
          <button
            ref={openBtnRef}
            type="button"
            className={`hamburger${mobileOpen ? ' is-open' : ''}`}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
            aria-controls={drawerId}
            onClick={() => {
              setMobileOpen((v) => {
                const next = !v
                if (next) setMobileProductsOpen(false)
                return next
              })
            }}
          >
            <span className="hamburger__lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`}
        data-open={mobileOpen ? 'true' : 'false'}
      >
        <button
          type="button"
          className="mobile-drawer__overlay"
          aria-hidden={!mobileOpen}
          tabIndex={mobileOpen ? 0 : -1}
          onClick={closeMobile}
        />
        <aside
          id={drawerId}
          className="mobile-drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.mobileMenuAria')}
        >
          <div className="mobile-drawer__header">
            <span className="mobile-drawer__brand" aria-hidden="true">
              {t('brand.wordmark')}
            </span>
            <button
              ref={closeBtnRef}
              type="button"
              className="mobile-drawer__close"
              aria-label={t('nav.closeMenu')}
              onClick={closeMobile}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="mobile-drawer__nav" aria-label={t('nav.mobileMenuAria')}>
            <ul className="mobile-drawer__list">
              {navRoutes.map((item) =>
                item.href === '#products' ? (
                  <li key={item.href} className="mobile-drawer__item">
                    <button
                      type="button"
                      className={`mobile-drawer__link mobile-drawer__link--accordion${
                        mobileProductsOpen ? ' is-open' : ''
                      }`}
                      aria-expanded={mobileProductsOpen}
                      aria-controls={productsPanelId}
                      onClick={() => setMobileProductsOpen((v) => !v)}
                    >
                      <span>{t(item.labelKey)}</span>
                      <span className="mobile-drawer__chev" aria-hidden="true">
                        ▾
                      </span>
                    </button>
                    <div
                      id={productsPanelId}
                      className={`mobile-products${mobileProductsOpen ? ' mobile-products--open' : ''}`}
                    >
                      <div className="mobile-products__inner">
                        <div className="mobile-products__grid">
                          {megaColumns.map((col, idx) => (
                            <section key={col.title + idx} className="mobile-products__col">
                              <p className="mobile-products__title">{col.title}</p>
                              <ul className="mobile-products__links">
                                {col.links.map((lnk) => (
                                  <li key={lnk.href}>
                                    <a
                                      className="mobile-products__link"
                                      href={lnk.href}
                                      onClick={closeMobile}
                                    >
                                      {lnk.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </section>
                          ))}
                        </div>
                        <a className="mobile-products__featured" href={megaFeatured.href} onClick={closeMobile}>
                          <div className="mobile-products__featuredMedia">
                            <img
                              src={megaMenuFeaturedImage}
                              alt={megaFeatured.imageAlt}
                              width={96}
                              height={96}
                              loading="lazy"
                            />
                          </div>
                          <span className="mobile-products__featuredLabel">{megaFeatured.label}</span>
                        </a>
                      </div>
                    </div>
                  </li>
                ) : item.href === '#corporate' ? (
                  <li key={item.href} className="mobile-drawer__item">
                    <Link to="/kurumsal" className="mobile-drawer__link" onClick={closeMobile}>
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ) : (
                  <li key={item.href} className="mobile-drawer__item">
                    <a href={item.href} className="mobile-drawer__link" onClick={closeMobile}>
                      {t(item.labelKey)}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  )
}
