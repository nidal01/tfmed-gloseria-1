/** Görünür marka metni (yalnızca logo / footer wordmark) */
export const WORDMARK = 'GLOSERIA'

export const images = {
  hero:
    'https://z-cdn-media.chatglm.cn/files/420a8b69-f6be-4555-9dff-c7f1b5c9a9b6.png?auth_key=1875246085-924d165a75374ded87f44d5f8c136af0-0-ce433765219f8147e26876a56f286139',
  workshopBg:
    'https://z-cdn-media.chatglm.cn/files/1c1e2bdd-c7d7-4b8c-88ca-3da875e11d70.png?auth_key=1875246085-d5045681c11b482680c5cad4a55a3080-0-193a45a8ed26e6bd9db8a226a86bb19a',
} as const

export const navLinks = [
  { href: '#home', label: 'ANA SAYFA' },
  { href: '#corporate', label: 'KURUMSAL' },
  { href: '#products', label: 'ÜRÜNLER +' },
  { href: '#representatives', label: 'TEMSİLCİLİKLER' },
  { href: '#contact', label: 'İLETİŞİM' },
] as const

export const productsMegaMenu = {
  columns: [
    {
      id: 'skin',
      title: 'CİLT SERİSİ',
      items: [
        { label: 'Blue Shine', href: '#urun-blue-shine' },
        { label: 'Anti Aging Effect', href: '#urun-anti-aging-effect' },
        { label: 'Anti Hair Loss', href: '#urun-anti-hair-loss' },
        { label: 'Eye Shimmer', href: '#urun-eye-shimmer' },
        { label: 'Whitening Effect', href: '#urun-whitening-effect' },
        { label: 'Pure Dna', href: '#urun-pure-dna' },
      ],
    },
    {
      id: 'voluregen',
      title: 'VOLUREGEN SERİSİ',
      items: [
        { label: 'Hydrocalcium', href: '#urun-hydrocalcium' },
        { label: 'Bio Stimulator', href: '#urun-bio-stimulator' },
      ],
    },
    {
      id: 'genital',
      title: 'GENİTAL SERİSİ',
      items: [
        { label: 'G White', href: '#urun-g-white' },
        { label: 'H Pause', href: '#urun-h-pause' },
        { label: 'Rejuvenation', href: '#urun-rejuvenation' },
      ],
    },
    {
      id: 'shape',
      title: 'SHAPE SERİSİ',
      items: [
        { label: 'Liposhape Body', href: '#urun-liposhape-body' },
        { label: 'Liposhape Face', href: '#urun-liposhape-face' },
      ],
    },
  ] as const,
  featured: {
    href: '#urun-ultimate-5',
    image: '/mega-menu-featured.png',
    imageAlt: 'Ultimate 5 ürün kutusu',
    label: 'Gloseria Ultimate 5 →',
  },
} as const

export const langSelectorLabel = '🇹🇷 TR ▼'

export const hero = {
  image: images.hero,
  imageAlt: 'Hero arka plan',
  subtitle: 'YENİ NESİL',
  titleLine1: 'YENİLENME',
  titleLine2: 'PROTOKOLLERİ',
} as const

export const categoryCards = [
  {
    id: 'skin',
    name: 'CİLT SERİSİ',
    image:
      'https://z-cdn-media.chatglm.cn/files/2e2a7a97-dff8-4c94-bcb6-7ea9d33d1ee2.png?auth_key=1875246085-6f1aef92ff094504841c100a18b55d75-0-e65593db4fb09c4e9262faf9bf994867',
    alt: 'Cilt Serisi',
  },
  {
    id: 'volumegen',
    name: 'VOLUMEGEN SERİSİ',
    image:
      'https://z-cdn-media.chatglm.cn/files/2e2a7a97-dff8-4c94-bcb6-7ea9d33d1ee2.png?auth_key=1875246085-6f1aef92ff094504841c100a18b55d75-0-e65593db4fb09c4e9262faf9bf994867',
    alt: 'Voluregen Serisi',
  },
  {
    id: 'genital',
    name: 'GENİTAL SERİSİ',
    image:
      'https://z-cdn-media.chatglm.cn/files/2e2a7a97-dff8-4c94-bcb6-7ea9d33d1ee2.png?auth_key=1875246085-6f1aef92ff094504841c100a18b55d75-0-e65593db4fb09c4e9262faf9bf994867',
    alt: 'Genital Serisi',
  },
] as const

export const categoryCta = 'Ürünleri Görüntüle +'

export const professionalBlock = {
  titleLine1: 'Profesyoneller İçin',
  titleLine2: 'Geliştirildi',
  description:
    'Gloseria, cildin biyolojik ihtiyaçlarına göre geliştirilmiş ileri teknoloji aktif bileşenler sunar. Her ürün, klinik uygulamalara entegre edilebilecek profesyonel protokollerle tasarlanmıştır.',
} as const

export const aboutIntro = {
  headline:
    'Gloseria, dermatologların ve medikal estetik hekimlerinin ihtiyaçları için geliştirilmiş profesyonel ürünler sunar.',
} as const

export const features = [
  {
    number: '01',
    title: 'Moleküler Hassasiyet',
    description:
      'Ürünlerimiz, aktif bileşenlerin hedef dokuya en yüksek stabiliteyle ulaşmasını sağlayan ileri biyoteknolojik süreçlerle geliştirilir. Her bir flakon, klinik sonuçları optimize eden konsantre bir mühendislik eseridir.',
  },
  {
    number: '02',
    title: 'Sinerjik Protokoller',
    description:
      'Gloseria ürünleri sadece tekil çözümler değil, birbiriyle kombine edilebilen akıllı sistemlerdir. Lek tedavisinden biyo-stimülasyona kadar, klinik protokollerinize entegre olabilecek esnek bir uygulama yelpazesi sunar.',
  },
  {
    number: '03',
    title: 'Biyouyumlu ve Güvenli',
    description:
      'Dermatologların en hassas kriteri olan güvenliği önceliğimiz yapıyoruz. Gloseria serisi, cilt dokusuyla tam uyumlu, inflamasyon riskini minimize eden ve sterilizasyon standartları en üst düzeyde tutulmuş profesyonel içeriklerden oluşur.',
  },
  {
    number: '04',
    title: 'Kanıta Dayalı Estetik',
    description:
      'Pazarlama vaatlerine değil, klinik verilerine inanıyoruz. Gloseria; medikal estetik alanındaki en güncel literatürleri takip ederek, hekimlerin beklentilerini karşılayan "öngörülebilir" sonuçlar sağlar.',
  },
] as const

export const workshop = {
  backgroundImage: images.workshopBg,
  title: 'Workshop',
  introColumn:
    'Gloseria, farklı şehirlerde dermatologlar ve medikal estetik hekimlerine özel, uygulamalı ve sınırlı katılımlı workshop\'lar düzenler.',
  detailParagraphs: [
    'Bu seçkin buluşmalarda; ileri formülasyonların bilimsel altyapısı, klinik protokoller ve yüksek başarı sağlayan uygulama teknikleri birebir aktarılır. Canlı uygulamalar ve vaka paylaşımlarıyla teorik bilgi, üst düzey klinik deneyime dönüşür.',
    'Gloseria workshop\'ları, profesyonellerin bilgi birikimini derinleştirmek ve klinik standartlarını bir üst seviyeye taşımak üzere tasarlanmıştır.',
  ],
  ctaLabel: "WORKSHOP'LARI KEŞFET →",
  ctaHref: '#',
} as const

export const eventsSection = {
  title: 'Gelişmeler',
  items: [
    {
      id: 'congress-national',
      title: '8. Ulusal Medikal Estetik Kongresi',
      image:
        'https://z-cdn-media.chatglm.cn/files/57ffc087-ad88-40d9-bedd-00feb141f150.png?auth_key=1875246085-4c7799396e0041e7a20f119f84df5a8f-0-cab552c585d68eba2c814eadf958ba3d',
      imageAlt: '8. Ulusal Medikal Estetik Kongresi',
      description:
        "Gloseria, medikal estetik alanının en prestijli organizasyonlarından biri olan 8. Ulusal Medikal Estetik Kongresi'nde yer alarak yenilikçi ürün portföyünü ve bilimsel yaklaşımını sektör profesyonelleriyle buluşturdu.",
    },
    {
      id: 'congress-international',
      title: '8. Uluslararası Medikal Estetik Kongresi',
      image:
        'https://z-cdn-media.chatglm.cn/files/57ffc087-ad88-40d9-bedd-00feb141f150.png?auth_key=1875246085-4c7799396e0041e7a20f119f84df5a8f-0-cab552c585d68eba2c814eadf958ba3d',
      imageAlt: '8. Uluslararası Medikal Estetik Kongresi',
      description:
        "Gloseria, medikal estetik alanının en prestijli organizasyonlarından biri olan 8. Uluslararası Medikal Estetik Kongresi'nde yer alarak yenilikçi ürün portföyünü ve bilimsel yaklaşımını sektör profesyonelleriyle buluşturdu.",
    },
  ] as const,
}

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
  'VoluregenBio Stimulator',
] as const

export const contact = {
  addressLine1: 'ALAADDİNBEY MAH. 646.SK.',
  addressLine2: 'HUZUR PLAZA NO: 5 B/C NİLÜFER/ BURSA',
  phone: '+90 224 366 22 05',
  email: 'info@gloseria.com',
} as const

export const mapPlaceholderLabel = 'Harita Gösterimi'

export const footerHeadings = {
  products: 'ÜRÜNLERİMİZ',
  contact: 'İLETİŞİM BİLGİLERİ',
  location: 'KONUM',
} as const
