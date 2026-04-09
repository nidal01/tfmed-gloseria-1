import { useMemo, type ReactElement } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { InnerHero } from '../components/InnerHero'
import { products, type Product, type ProductFormCard, type ProductStat, type ProductStatI18nLocale } from '../products/catalog'

type CatalogUiLocale = 'tr' | ProductStatI18nLocale

function resolveCatalogUiLocale(lang: string): CatalogUiLocale {
  const c = lang?.toLowerCase() ?? ''
  if (c.startsWith('tr')) return 'tr'
  if (c.startsWith('az')) return 'az'
  if (c.startsWith('en')) return 'en'
  if (c.startsWith('de')) return 'de'
  if (c.startsWith('pt')) return 'pt'
  if (c.startsWith('es')) return 'es'
  if (c.startsWith('ru')) return 'ru'
  return 'tr'
}

function pickProductField(
  product: Product,
  loc: CatalogUiLocale,
  key: 'title' | 'headline' | 'description' | 'ingredients',
): string {
  if (loc === 'tr') return product[key]
  if (loc === 'az') {
    const z = product.i18n?.az?.[key]
    return z ?? product[key]
  }
  const row = product.i18n?.[loc]?.[key] ?? product.i18n?.en?.[key]
  return row ?? product[key]
}

function pickStatLabel(stat: ProductStat, loc: CatalogUiLocale): string {
  if (loc === 'tr') return stat.label
  if (loc === 'az') return stat.i18n?.az?.label ?? stat.label
  return stat.i18n?.[loc]?.label ?? stat.i18n?.en?.label ?? stat.label
}

function pickStatValue(stat: ProductStat, loc: CatalogUiLocale): string {
  if (loc === 'tr') return stat.value
  if (loc === 'az') return stat.i18n?.az?.value ?? stat.value
  return stat.i18n?.[loc]?.value ?? stat.i18n?.en?.value ?? stat.value
}

function pickFormField(
  fc: ProductFormCard,
  loc: CatalogUiLocale,
  key: 'leftTitle' | 'leftSubtitle' | 'rightTitle' | 'rightSubtitle' | 'ctaLabel',
): string {
  if (loc === 'tr') return fc[key]
  if (loc === 'az') return fc.i18n?.az?.[key] ?? fc[key]
  return fc.i18n?.[loc]?.[key] ?? fc.i18n?.en?.[key] ?? fc[key]
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none" aria-hidden="true">
      <rect x="5" y="9" width="30" height="26" rx="4" stroke="#b8a08a" strokeWidth="1.6" fill="white" />
      <path d="M5 16h30" stroke="#b8a08a" strokeWidth="1.6" />
      <rect x="11" y="5" width="2.4" height="7" rx="1.2" fill="#c9a96e" />
      <rect x="27" y="5" width="2.4" height="7" rx="1.2" fill="#c9a96e" />
      <path d="M13 24l3 3 6-6" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none" aria-hidden="true">
      <rect x="10" y="12" width="20" height="18" rx="2.5" stroke="#b8a08a" strokeWidth="1.6" fill="white" />
      <line x1="14" y1="17" x2="26" y2="17" stroke="#d4b896" strokeWidth="1.2" />
      <line x1="14" y1="21" x2="22" y2="21" stroke="#d4b896" strokeWidth="1.2" />
      <line x1="14" y1="25" x2="19" y2="25" stroke="#d4b896" strokeWidth="1.2" />
    </svg>
  )
}

function DropletIcon() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none" aria-hidden="true">
      <path d="M20 6c-4 6-9 13-9 18.5C11 29.97 15.03 34 20 34s9-4.03 9-9.5C29 19 24 12 20 6z"
            stroke="#b8a08a" strokeWidth="1.6" fill="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const iconMap: Record<string, () => ReactElement> = {
  calendar: CalendarIcon,
  box: BoxIcon,
  droplet: DropletIcon,
}

function StatIcon({ type }: { type: string }) {
  const Icon = iconMap[type] || DropletIcon
  return <Icon />
}

export function ProductPage() {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const { i18n, t } = useTranslation()

  const product = useMemo(() => products[slug], [slug])
  const catalogLocale = useMemo(() => resolveCatalogUiLocale(i18n.language ?? ''), [i18n.language])

  if (!product) {
    return (
      <main>
        <InnerHero title={t('productPage.notFoundHero')} />
        <section className="product">
          <div className="product__container">
            <h2 className="product__title">{t('productPage.notFoundTitle')}</h2>
            <p className="product__text">{t('productPage.notFoundText')}</p>
          </div>
        </section>
      </main>
    )
  }

  const title = pickProductField(product, catalogLocale, 'title')
  const headline = pickProductField(product, catalogLocale, 'headline')
  const description = pickProductField(product, catalogLocale, 'description')
  const ingredients = pickProductField(product, catalogLocale, 'ingredients')

  return (
    <main>
      <InnerHero title={title} videoSrc={product.heroVideoSrc} />

      <section className="product">
        <div className="product__container">
          <div className="product__grid">
            <div className="product__copy">
              <h2 className="product__headline">{headline}</h2>
              <p className="product__text">{description}</p>
              <p className="product__text product__text--muted">{ingredients}</p>
            </div>

            <div className="product__media">
              <div className="product__imageFrame" aria-hidden="true">
                {product.imageSrc ? (
                  <img className="product__image" src={product.imageSrc} alt="" loading="lazy" />
                ) : (
                  <div className="product__imagePlaceholder">{t('productPage.imagePlaceholder')}</div>
                )}
              </div>
            </div>
          </div>

          <div className="product__stats product__stats--wide" role="list" aria-label={t('productPage.statsAria')}>
            {product.stats.map((stat) => (
              <div key={stat.label} className="product__stat" role="listitem">
                <div className="product__statIcon" aria-hidden="true">
                  <StatIcon type={stat.icon || ''} />
                </div>
                <div className="product__statBody">
                  <div className="product__statLabel">{pickStatLabel(stat, catalogLocale)}</div>
                  <div className="product__statValue">{pickStatValue(stat, catalogLocale)}</div>
                </div>
              </div>
            ))}
          </div>

          {product.formCard ? (
            <section className="product__formCard product__formCard--wide" aria-label={t('productPage.formAria')}>
              <div className="product__formCardInner">
                <div className="product__formCardLeft">
                  <div className="product__formCardKicker">
                    {pickFormField(product.formCard, catalogLocale, 'leftTitle')}
                  </div>
                  <div className="product__formCardSub">
                    {pickFormField(product.formCard, catalogLocale, 'leftSubtitle')}
                  </div>
                </div>
                <div className="product__formCardRight">
                  <div className="product__formCardRightTitle">
                    {pickFormField(product.formCard, catalogLocale, 'rightTitle')}
                  </div>
                  <div className="product__formCardRightText">
                    {pickFormField(product.formCard, catalogLocale, 'rightSubtitle')}
                  </div>
                  <Link className="product__formCardCta" to={product.formCard.ctaHref}>
                    {pickFormField(product.formCard, catalogLocale, 'ctaLabel')}
                  </Link>
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  )
}
