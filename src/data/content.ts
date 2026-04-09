/** Medya URL’leri ve yapısal veri; kullanıcıya dönük metinler `src/locales/*.json` içinde. */

export const heroVideoEmbedSrc =
  'https://www.youtube.com/embed/5Ku2SNDLFyY?autoplay=1&mute=1&loop=1&playlist=5Ku2SNDLFyY&controls=0&showinfo=0&playsinline=1&rel=0' as const

export const workshopVideoEmbedSrc =
  'https://www.youtube.com/embed/GcCYhUa_kGk?autoplay=1&mute=1&loop=1&playlist=GcCYhUa_kGk&controls=0&showinfo=0&playsinline=1&rel=0' as const

export const footerVideoEmbedSrc =
  'https://www.youtube.com/embed/oZgQ2eGaIH4?autoplay=1&mute=1&loop=1&playlist=oZgQ2eGaIH4&controls=0&showinfo=0&playsinline=1&rel=0' as const

export const megaMenuFeaturedImage = '/images/gloseria-ultimate-5.webp'

export const brandLogoSrc = '/logo.png' as const

export const categoryCards = [
  {
    id: 'skin' as const,
    image: '/images/gloseria-skin-series.png',
  },
  {
    id: 'volumegen' as const,
    image: '/images/gloseria-voluregen-series.png',
  },
  {
    id: 'genital' as const,
    image: '/images/gloseria-genital-series.png',
  },
] as const

export const eventImages = {
  national:
    'https://z-cdn-media.chatglm.cn/files/57ffc087-ad88-40d9-bedd-00feb141f150.png?auth_key=1875246085-4c7799396e0041e7a20f119f84df5a8f-0-cab552c585d68eba2c814eadf958ba3d',
  international:
    'https://z-cdn-media.chatglm.cn/files/57ffc087-ad88-40d9-bedd-00feb141f150.png?auth_key=1875246085-4c7799396e0041e7a20f119f84df5a8f-0-cab552c585d68eba2c814eadf958ba3d',
} as const

export const footerProducts = [
  'Blue Shine',
  'Anti Aging Effect',
  'Anti Hair Loss',
  'Eye Shimmer',
  'Whitening Effect',
  'Pure Dna',
  'Liposhape Body',
  'Liposhape Face',
  'G White',
  'H Pause',
  'Rejuvenation',
  'Voluregen Hydrocalcium',
  'Voluregen Bio Stimulator',
] as const

export const contact = {
  addressLines: [
    '66 W FLAGLER ST',
    'MIAMI, FL 33130, US',
  ],
  phone: '+1 (631) 792-2005',
  email: 'info@gloseria.usa',
} as const

export const workshopCtaHref = '#'

export const navRoutes = [
  { href: '#home', labelKey: 'nav.home' as const },
  { href: '#corporate', labelKey: 'nav.corporate' as const },
  { href: '#products', labelKey: 'nav.products' as const },
  { href: '#representatives', labelKey: 'nav.representatives' as const },
  { href: '#contact', labelKey: 'nav.contact' as const },
] as const
