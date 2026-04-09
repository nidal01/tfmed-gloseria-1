/** Locales merged from product-i18n-overlays.ts (English stays inline in catalog). */
export type CatalogOverlayLocale = 'de' | 'pt' | 'es' | 'ru' | 'az'

export type ProductI18nBundle = Partial<{
  headline: string
  description: string
  ingredients: string
  title: string
}>

export type ProductFormCardI18nBundle = Partial<{
  leftTitle: string
  leftSubtitle: string
  rightTitle: string
  rightSubtitle: string
  ctaLabel: string
}>

export type StatI18nBundle = Partial<{ label: string; value: string }>

export type ProductI18nOverlay = {
  i18n?: Partial<Record<CatalogOverlayLocale, ProductI18nBundle>>
  formCard?: Partial<Record<CatalogOverlayLocale, ProductFormCardI18nBundle>>
  stats?: Array<Partial<Record<CatalogOverlayLocale, StatI18nBundle>>>
}
