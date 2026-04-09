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

  'anti-aging-effect': {
    slug: 'anti-aging-effect',
    title: 'Anti Aging Effect',
    headline: 'Antioksidan Koruma & Cilt Yenilenmesi',
    description:
      'Anti Aging yeni nesil yenilenme protokolü çözümü, cildin zamanla kaybettiği canlılık ve elastik yapıyı yeniden desteklemek amacıyla formüle edilmiştir.',
    ingredients:
      'Aminoasitler, vitaminler ve peptid kompleksleri sayesinde oksidatif stresi azaltır, ince kırışıklıkların görünümünü hafifletir ve cildin daha pürüzsüz bir doku kazanmasına yardımcı olur.',
    stats: [
      { label: 'Seans Süresi', value: '21 Gün Arayla 2 Seans', icon: 'calendar' },
      { label: 'Satış Formu', value: '10 ml 5 Flakon', icon: 'box' },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet' },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/9MQTIzmerOY?autoplay=1&mute=1&loop=1&playlist=9MQTIzmerOY&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-antiagingeffect.webp',
    formCard: {
      leftTitle: 'CİLDİN YENİ BİOSTÜMİLASYONU',
      leftSubtitle: 'Konsantre, Derin & Homojen Dağılım',
      rightTitle: 'Anti Aging Effect Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '#',
    },
  },

  'anti-hair-loss': {
    slug: 'anti-hair-loss',
    title: 'Anti Hair Loss',
    headline: 'Saç Dökülmesi Kontrolü & Folikül Güçlendirme',
    description:
      'Anti Hair Loss yeni nesil yenilenme protokolü çözümü, saç köklerinin biyolojik aktivitesini destekleyerek saç dökülmesini azaltmaya yardımcı olur.',
    ingredients:
      'Biotin, vitaminler ve aminoasitler ile saç foliküllerinin beslenmesini artırır, saç tellerinin güçlenmesine ve hacim kazanmasına katkı sağlar.',
    stats: [
      { label: 'Seans Süresi', value: '21 Gün Arayla 2 Seans', icon: 'calendar' },
      { label: 'Satış Formu', value: '10 ml 5 Flakon', icon: 'box' },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet' },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/FOG-pypCDYU?autoplay=1&mute=1&loop=1&playlist=FOG-pypCDYU&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-antihairloss.webp',
    formCard: {
      leftTitle: 'CİLDİN YENİ BİOSTÜMİLASYONU',
      leftSubtitle: 'Konsantre, Derin & Homojen Dağılım',
      rightTitle: 'Anti Hair Loss Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '#',
    },
  },

  'eye-shimmer': {
    slug: 'eye-shimmer',
    title: 'Eye Shimmer',
    headline: 'Göz Çevresi Parlaklığı & Canlılık Etkisi',
    description:
      'Eye Shimmer yeni nesil yenilenme protokolü ürünü, göz çevresi cildini özel olarak hedefleyerek, ince çizgileri ve kırışıklıkları azaltmaya yardımcı olur.',
    ingredients:
      'Hassas göz bölgesine uygun formülasyonu sayesinde, cildin canlılığını artırır ve parlak bir görünüm sağlar. Yaşlanmış bakışları gençleştirerek, gözleri daha açık ve dinç gösterir.',
    stats: [
      { label: 'Seans Süresi', value: '21 Gün Arayla 2 Seans', icon: 'calendar' },
      { label: 'Satış Formu', value: '3 ml 5 Flakon', icon: 'box' },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet' },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/_8bKi-dZBV0?autoplay=1&mute=1&loop=1&playlist=_8bKi-dZBV0&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-eyeshimmer.webp',
    formCard: {
      leftTitle: 'CİLDİN YENİ BİOSTÜMİLASYONU',
      leftSubtitle: 'Konsantre, Derin & Homojen Dağılım',
      rightTitle: 'Eye Shimmer Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '#',
    },
  },

  'whitening-effect': {
    slug: 'whitening-effect',
    title: 'Whitening Effect',
    headline: 'Cilt Açıcı & Işıltılı Parlaklık',
    description:
      'Whitening Effect yeni nesil yenilenme protokolü ürünü, L-askorbik asit ve bitki ekstraksiyonları sayesinde cildin tonunu eşitleyerek açıcı etki sağlar.',
    ingredients:
      'Melanin üretimini dengeleyen formülasyonu ile koyu lekeleri hafifletir ve cildin doğal parlaklığını ortaya çıkarır. Aydınlık ve eşit bir cilt tonu elde edilmesini sağlar.',
    stats: [
      { label: 'Seans Süresi', value: '21 Gün Arayla 2 Seans', icon: 'calendar' },
      { label: 'Satış Formu', value: '10 ml 5 Flakon', icon: 'box' },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet' },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/b4sOQlknp7o?autoplay=1&mute=1&loop=1&playlist=b4sOQlknp7o&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-whiteningeffect.webp',
    formCard: {
      leftTitle: 'CİLDİN YENİ BİOSTÜMİLASYONU',
      leftSubtitle: 'Konsantre, Derin & Homojen Dağılım',
      rightTitle: 'Whitening Effect Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '#',
    },
  },

  'pure-dna': {
    slug: 'pure-dna',
    title: 'Pure DNA',
    headline: 'DNA Destekli Cilt Yenilenmesi & Genetik İyileştirme',
    description:
      'Pure DNA yeni nesil yenilenme protokolü ürünü, DNA sentezini destekleyen nükleotidler ve tamir faktörleri sayesinde cildin kendini yenileme kapasitesini artırır.',
    ingredients:
      'Hücresel düzeyde cilt onarım mekanizmalarını harekete geçirerek, yaşlanma işaretlerini azaltır ve doğal ışıltıyı geri kazandırır. Daha genç, sağlıklı ve parlak bir cilt görünümü elde edilmesini sağlar.',
    stats: [
      { label: 'Seans Süresi', value: '21 Gün Arayla 2 Seans', icon: 'calendar' },
      { label: 'Satış Formu', value: '10 ml 5 Flakon', icon: 'box' },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet' },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/pgj-B4C71SU?autoplay=1&mute=1&loop=1&playlist=pgj-B4C71SU&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-puredna.webp',
    formCard: {
      leftTitle: 'CİLDİN YENİ BİOSTÜMİLASYONU',
      leftSubtitle: 'Konsantre, Derin & Homojen Dağılım',
      rightTitle: 'Pure DNA Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '#',
    },
  },
}
