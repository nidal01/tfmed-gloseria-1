export type ProductStat = {
  label: string
  value: string
  icon?: string
}

export type Product = {
  slug: string
  title: string
  headline: string
  description: string
  ingredients: string
  stats: ProductStat[]
  heroVideoSrc?: string
  imageSrc?: string
  formCard?: {
    leftTitle: string
    leftSubtitle: string
    rightTitle: string
    rightSubtitle: string
    ctaLabel: string
    ctaHref: string
  }
}

export const products: Record<string, Product> = {
  'blue-shine': {
    slug: 'blue-shine',
    title: 'Blue Shine',
    headline: 'Hücresel Yenilenme & Parlaklık',
    description:
      'Blue Shine, dermal ve epidermal tabakalarda hedeflenen biyolojik aktivasyonu destekleyen, yoğun içerikli bir cilt revitalizasyon çözümüdür.',
    ingredients:
      'Hyaluronic Acid, Niacinamide, Glutatyon, Tranexamic Acid ve Somon DNA kombinasyonu ile cilt canlılığının artırılmasına, elastik yapının güçlendirilmesine ve ince kırışıklık görünümünün azaltılmasına yardımcı olur.',
    stats: [
      { label: 'Seans Süresi', value: '21 Gün Arayla 2 Seans', icon: 'calendar' },
      { label: 'Satış Formu', value: '10 ml 5 Flakon', icon: 'box' },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet' },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/LcROQJ25utw?autoplay=1&mute=1&loop=1&playlist=LcROQJ25utw&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-blueshine.webp',
    formCard: {
      leftTitle: 'CİLDİN YENİ BİOSTÜMİLASYONU',
      leftSubtitle: 'Konsantre, Derin & Homojen Dağılım',
      rightTitle: 'Blue Shine Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '#',
    },
  },
}
