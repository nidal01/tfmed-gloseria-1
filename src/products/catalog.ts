export type ProductStat = {
  label: string
  value: string
  i18n?: {
    en?: {
      label?: string
      value?: string
    }
  }
  icon?: string
}

export type ProductFormCard = {
  leftTitle: string
  leftSubtitle: string
  rightTitle: string
  rightSubtitle: string
  ctaLabel: string
  ctaHref: string
  i18n?: {
    en?: Partial<Omit<ProductFormCard, 'i18n'>>
  }
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
  formCard?: ProductFormCard
  i18n?: {
    en?: Partial<Omit<Product, 'i18n' | 'stats' | 'formCard'>>
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
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 2 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '4 Sessions at 7 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '10 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
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
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: "SKIN'S NEW BIOSTIMULATION",
          leftSubtitle: 'Concentrated, Deep & Homogeneous Distribution',
          rightTitle: 'Blue Shine Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Cellular Renewal & Radiance',
        description:
          'Blue Shine is an intensive skin revitalization solution that supports targeted biological activation in the dermal and epidermal layers.',
        ingredients:
          'With a combination of Hyaluronic Acid, Niacinamide, Glutathione, Tranexamic Acid and Salmon DNA, it helps increase skin vitality, strengthen elastic structure and reduce the appearance of fine wrinkles.',
      },
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
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 3 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3 Sessions at 21 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '10 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/9MQTIzmerOY?autoplay=1&mute=1&loop=1&playlist=9MQTIzmerOY&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-antiagingeffect.webp',
    formCard: {
      leftTitle: 'YAŞLANMA KARŞITI YENİLENME PROTOKOLÜ ÇÖZÜM',
      leftSubtitle: 'Canlı & Elastik Cilt',
      rightTitle: 'Anti Aging Effect Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'ANTI-AGING NEW GENERATION RENEWAL PROTOCOL SOLUTION',
          leftSubtitle: 'Vibrant & Elastic Skin',
          rightTitle: 'Anti Aging Effect Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Antioxidant Protection & Skin Renewal',
        description:
          "Anti Aging new generation renewal protocol solution is formulated to restore the skin's vitality and elasticity that diminishes over time.",
        ingredients:
          'Through amino acids, vitamins and peptide complexes, it reduces oxidative stress, softens the appearance of fine lines and helps the skin gain a smoother texture.',
      },
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
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 3-6 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3-6 Sessions at 21 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '10 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/FOG-pypCDYU?autoplay=1&mute=1&loop=1&playlist=FOG-pypCDYU&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-antihairloss.webp',
    formCard: {
      leftTitle: 'SAÇ SAĞLIĞININ YENİ BİOSTÜMİLASYONU',
      leftSubtitle: 'Konsantre, Derin & Homojen Dağılım',
      rightTitle: 'Anti Hair Loss Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: "HAIR'S NEW BIOSTIMULATION",
          leftSubtitle: 'Concentrated, Deep & Homogeneous Distribution',
          rightTitle: 'Anti Hair Loss Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Hair Loss Control & Follicle Strengthening',
        description:
          'Anti Hair Loss new generation renewal protocol solution helps reduce hair loss by supporting the biological activity of hair roots.',
        ingredients:
          'With biotin, vitamins and amino acids, it increases the nourishment of hair follicles, contributing to stronger hair strands and improved volume.',
      },
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
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 3 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3 Sessions at 21 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '5 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '5 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/_8bKi-dZBV0?autoplay=1&mute=1&loop=1&playlist=_8bKi-dZBV0&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-eyeshimmer.webp',
    formCard: {
      leftTitle: 'GÖZ ÇEVRESI YENİLENMESİNİN SIRRI',
      leftSubtitle: 'Hassas, Etkili ve Doğal Sonuçlar',
      rightTitle: 'Eye Shimmer Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'THE SECRET OF EYE AREA RENEWAL',
          leftSubtitle: 'Gentle, Effective and Natural Results',
          rightTitle: 'Eye Shimmer Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Eye Area Brightness & Vitality Effect',
        description:
          'Eye Shimmer new generation renewal protocol solution is specially formulated to reduce fine lines around the eyes and increase skin firmness.',
        ingredients:
          'With moisturizing complex and antioxidants, it helps the eye area skin look brighter, fresher and smoother. It reduces signs of aging.',
      },
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
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 3 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3 Sessions at 21 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '10 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/b4sOQlknp7o?autoplay=1&mute=1&loop=1&playlist=b4sOQlknp7o&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-whiteningeffect.webp',
    formCard: {
      leftTitle: 'IŞILTILI CİLT, IŞILTILI BİR GÖRÜNÜM',
      leftSubtitle: 'Zengin, Derin & Hızlı Sonuç',
      rightTitle: 'Whitening Effect Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'RADIANT SKIN LUMINOUS GLOW',
          leftSubtitle: 'Rich, Deep & Fast Results',
          rightTitle: 'Whitening Effect Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Skin Brightening & Luminous Radiance',
        description:
          'Whitening Effect new generation renewal protocol solution is formulated to effectively reduce dark spots, lentigines and hyperpigmentation on skin.',
        ingredients:
          "With L-ascorbic acid and plant extracts, it restores the skin's natural brightness. It improves pores, complexion and elasticity, providing a younger and brighter appearance.",
      },
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
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 3 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3 Sessions at 21 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '5 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '5 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/pgj-B4C71SU?autoplay=1&mute=1&loop=1&playlist=pgj-B4C71SU&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-puredna.webp',
    formCard: {
      leftTitle: 'CİLDİN GENETİK POTANSİYELİ',
      leftSubtitle: 'Doğal, Güçlü & Sürdürülebilir Sonuçlar',
      rightTitle: 'Pure DNA Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: "SKIN'S GENETIC POTENTIAL",
          leftSubtitle: 'Natural, Powerful & Sustainable Results',
          rightTitle: 'Pure DNA Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'DNA-Supported Skin Renewal & Genetic Enhancement',
        description:
          'Pure DNA new generation renewal protocol solution supports skin renewal and rejuvenation by targeting cellular DNA.',
        ingredients:
          'With natural nucleotides and renewal factors, it increases the biological activity of skin, slows the aging process and provides a healthier, fresher appearance.',
      },
    },
  },

  'voluregen-hydrocalcium': {
    slug: 'voluregen-hydrocalcium',
    title: 'Voluregen Hydrocalcium',
    headline: 'Hacim Artırma & Derin Cilt Dolgulama',
    description:
      'Voluregen Hydrocalcium yeni nesil yenilenme protokolü çözümü, kalsiyum ve hyaluronik asit kompleksi sayesinde cilt hacmini artırıcı ve derin dolgu etkisi sağlar.',
    ingredients:
      'Kaybolan cilt elastikiyetini ve ışıltılığını geri kazandırır. Kırışıklıkları doldurarak, cildin yaşlanmış görünümünü giderir ve daha dolgun, gençleştirilmiş bir yüz görünümü oluşturur.',
    stats: [
      {
        label: 'Seans Süresi',
        value: '1 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '1 Sessions' } },
      },
      {
        label: 'Satış Formu',
        value: '5 ml 1 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '5 ml 1 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc: 'https://www.youtube.com/embed/C2Xs8P_zjnQ?autoplay=1&mute=1&loop=1&playlist=C2Xs8P_zjnQ&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-voluregen-hydrocalcium.webp',
    formCard: {
      leftTitle: 'CİLT HACİM ARTIRMA VE DOLGU EFEKTİ',
      leftSubtitle: 'Doğal, Yapılandırılmış & Genç Görünüş',
      rightTitle: 'Voluregen Hydrocalcium Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'SKIN VOLUME INCREASE & FILLING',
          leftSubtitle: 'Natural, Structured & Youthful Appearance',
          rightTitle: 'Voluregen Hydrocalcium Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Volume Enhancement & Deep Skin Filling',
        description:
          'Voluregen Hydrocalcium new generation renewal protocol solution provides volume enhancement and deep filling effect through its calcium and hyaluronic acid complex.',
        ingredients:
          'It restores lost skin elasticity and radiance. By filling wrinkles, it eliminates aged skin appearance and creates a fuller, more rejuvenated facial appearance.',
      },
    },
  },

  'voluregen-biostimulator': {
    slug: 'voluregen-biostimulator',
    title: 'Voluregen Bio Stimulator',
    headline: 'Biyolojik Uyarım & Kollagen Üretimi Artırma',
    description:
      'Voluregen Bio Stimulator yeni nesil yenilenme protokolü formülasyonu, fibroblast aktivasyonu sağlayarak kollagen ve elastin üretimini doğal olarak uyarır.',
    ingredients:
      'Cildin kendi yenileme mekanizmalarını harekete geçirerek, derindedeki yaşlanma işaretlerini giderir. Cilt dokusunu güçlendirerek, uzun süreli gençleştirme ve doğal bir parlaklanma etkisi meydana getirir.',
    stats: [
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 2 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '2 Sessions at 21 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '5 ml 2 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '5 ml 2 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc: 'https://www.youtube.com/embed/EKBhttmbLjA?autoplay=1&mute=1&loop=1&playlist=EKBhttmbLjA&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-voluregen-biostimulator.webp',
    formCard: {
      leftTitle: 'BİYOLOJİK UYARIM & KOLLAGEN UYARISI',
      leftSubtitle: 'Doğal Gençleştirme & Derin Cilt Yenilenmesi',
      rightTitle: 'Voluregen Bio Stimulator Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'BIOLOGICAL STIMULATION & COLLAGEN INDUCTION',
          leftSubtitle: 'Natural Rejuvenation & Deep Skin Renewal',
          rightTitle: 'Voluregen Bio Stimulator Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Biological Stimulation & Collagen Production Enhancement',
        description:
          'Voluregen Bio Stimulator new generation renewal protocol formulation naturally stimulates collagen and elastin production by promoting fibroblast activation.',
        ingredients:
          "By activating the skin's own renewal mechanisms, it eliminates deep aging signs. Strengthening skin tissue, it creates long-lasting rejuvenation and natural radiance effect.",
      },
    },
  },

  'g-white': {
    slug: 'g-white',
    title: 'G White',
    headline: 'Genital Bölge Açıcılığı & Beyazlatma Etkisi',
    description:
      'G White yeni nesil yenilenme protokolü çözümü, genital bölgenin renk düzensizlikleri ve koyu lekeleri gidermek için özel olarak formüle edilmiştir.',
    ingredients:
      'Hassas bölgeye uygun bileşenler sayesinde cildin renk tonunu eşitler ve daha açık, parlak bir görünüm sağlar. Dermato jinekolojik açıdan güvenli ve etkilidir.',
    stats: [
      {
        label: 'Seans Süresi',
        value: '21 Gün Arayla 3-6 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3-6 Sessions at 21 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '10 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/g0QT9pxobWA?autoplay=1&mute=1&loop=1&playlist=g0QT9pxobWA&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-gwhite.webp',
    formCard: {
      leftTitle: 'GENİTAL BEYAZLIK',
      leftSubtitle: 'Güvenli, Etkili & Doğal Sonuç',
      rightTitle: 'G White Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'INTIMATE AREA BRIGHTNESS',
          leftSubtitle: 'Safe, Effective & Natural Result',
          rightTitle: 'G White Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Genital Area Brightness & Whitening Effect',
        description:
          'G White new generation renewal protocol solution is specially formulated to eliminate color irregularities and dark spots in the genital area.',
        ingredients:
          'With components suitable for sensitive areas, it evens out skin tone and provides a lighter, brighter appearance. It is safe and effective from a dermatogynecological perspective.',
      },
    },
  },

  'h-pause': {
    slug: 'h-pause',
    title: 'H Pause',
    headline: 'Hormonal Denge & Menopoz Sonrası Rahatlık',
    description:
      'H Pause yeni nesil yenilenme protokolü çözümü, menopoz döneminde ve sonrasında oluşan genital bölge sorunlarını hedef alarak iyileştirmek için formüle edilmiştir.',
    ingredients:
      'Fitoestrojen ve yenileme faktörleri sayesinde genital bölgenin esnekliğini ve nemini geri kazandırır. Hormonal değişimin olumsuz etkilerine karşı koruma sağlayarak konforlu bir yaşam kalitesini destekler.',
    stats: [
      {
        label: 'Seans Süresi',
        value: '14 Gün Arayla 3 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3 Sessions at 14 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '10 ml 3 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '10 ml 3 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/jtz2TOfNJew?autoplay=1&mute=1&loop=1&playlist=jtz2TOfNJew&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-hpause.webp',
    formCard: {
      leftTitle: 'MENOPOZ SONRASI YENI YAŞAM',
      leftSubtitle: 'Rahatlatıcı, Destekleyici & Etkili',
      rightTitle: 'H Pause Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'NEW LIFE AFTER MENOPAUSE',
          leftSubtitle: 'Soothing, Supportive & Effective',
          rightTitle: 'H Pause Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Hormonal Balance & Post-Menopausal Comfort',
        description:
          'H Pause new generation renewal protocol solution is formulated to target and improve genital area problems that occur during and after menopause.',
        ingredients:
          'With phytoestrogens and renewal factors, it restores elasticity and moisture to the genital area. It provides protection against negative effects of hormonal changes and supports a comfortable quality of life.',
      },
    },
  },

  rejuvenation: {
    slug: 'rejuvenation',
    title: 'rejuvenation',
    headline: 'Selülit Azaltma & Cilt Dokusunun Islahı',
    description:
      'rejuvenation yeni nesil yenilenme protokolü çözümü, selülit görünümünü azaltarak ve cilt dokusunu iyileştirerek vücut cildinin kalitesini artırır.',
    ingredients:
      'Drenaj destekleyici ve yenileme faktörleri sayesinde hücresel aktiviteyi uyarır. Cilt sarkılığını giderir, pürüzlü dokusunu düzeltir ve daha pürüzsüz, sıkı bir görünüm sağlar.',
    stats: [
      {
        label: 'Seans Süresi',
        value: '10 Gün Arayla 3 Seans',
        icon: 'calendar',
        i18n: { en: { label: 'Session Duration', value: '3 Sessions at 10 Day Intervals' } },
      },
      {
        label: 'Satış Formu',
        value: '10 ml 5 Flakon',
        icon: 'box',
        i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } },
      },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    heroVideoSrc:
      'https://www.youtube.com/embed/9MCpO2pje7s?autoplay=1&mute=1&loop=1&playlist=9MCpO2pje7s&controls=0&showinfo=0',
    imageSrc: '/images/gloseria-rejuvenation.webp',
    formCard: {
      leftTitle: 'SELÜLİT VE CİLT SIKILAŞTIRMA POTANSİYELİ',
      leftSubtitle: 'Yoğun, Çok Etkili & Görünür Sonuçlar',
      rightTitle: 'rejuvenation Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'CELLULITE & SKIN TIGHTENING POTENTIAL',
          leftSubtitle: 'Intensive, Highly Effective & Visible Results',
          rightTitle: 'rejuvenation Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Cellulite Reduction & Skin Texture Improvement',
        description:
          'rejuvenation new generation renewal protocol solution improves body skin quality by reducing cellulite appearance and improving skin texture.',
        ingredients:
          'With drainage-supporting and renewal factors, it stimulates cellular activity. It eliminates skin sagging, corrects rough texture and provides a smoother, tighter appearance.',
      },
    },
  },

  'liposhape-body': {
    slug: 'liposhape-body',
    title: 'Liposhape Body',
    headline: 'Vücut Şekillendirme & Lokalize Yağ Azaltma',
    description:
      'Liposhape Body yeni nesil yenilenme protokolü çözümü, vücut üzerinde istenmeyen yağ birikintilerini hedefleyerek lokalize yağ azaltmayı destekler.',
    ingredients:
      'Lipoliz destekleyici bileşenler sayesinde hücresel yağ parçalanmasını hızlandırır. Vücudun doğal hatlarını belirginleştirerek daha şekilli ve tonlu bir görünüm sağlar.',
    stats: [
      { label: 'Seans Süresi', value: '1 Seans', icon: 'calendar', i18n: { en: { label: 'Session Duration', value: '1 Sessions' } } },
      { label: 'Satış Formu', value: '10 ml 5 Flakon', icon: 'box', i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } } },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    imageSrc: '/images/gloseria-liposhapebody.webp',
    formCard: {
      leftTitle: 'VÜCUT ŞEKİLLENDİRME POTANSİYELİ',
      leftSubtitle: 'Etkili, Doğal & Görünür Sonuçlar',
      rightTitle: 'Liposhape Body Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'BODY CONTOURING POTENTIAL',
          leftSubtitle: 'Effective, Natural & Visible Results',
          rightTitle: 'Liposhape Body Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Body Contouring & Localized Fat Reduction',
        description:
          'Liposhape Body new generation renewal protocol solution supports localized fat reduction by targeting unwanted fat deposits on the body.',
        ingredients:
          "With lipolysis-supporting components, it accelerates cellular fat breakdown. It enhances the body's natural lines, providing a more sculpted and toned appearance.",
      },
    },
  },

  'liposhape-face': {
    slug: 'liposhape-face',
    title: 'Liposhape Face',
    headline: 'Yüz Şekillendirme Etkisi',
    description:
      'Liposhape Face yeni nesil yenilenme protokolü çözümü, yüz çizgilerini belirginleştirerek ve çenes altı bölgesini iyileştirerek doğal bir yüz kaldırma etkisi sağlar.',
    ingredients:
      'Lipoliz destekleyici bileşenler ve cilt sıkılaştırıcı faktörler sayesinde yüz kontarını tanımlar. Daha genç, çekili ve üç boyutlu bir yüz görünümü oluşturur.',
    stats: [
      { label: 'Seans Süresi', value: '1 Seans', icon: 'calendar', i18n: { en: { label: 'Session Duration', value: '1 Sessions' } } },
      { label: 'Satış Formu', value: '10 ml 5 Flakon', icon: 'box', i18n: { en: { label: 'Sales Form', value: '10 ml 5 Vials' } } },
      { label: 'Ph', value: '6.5 - 7.5', icon: 'droplet', i18n: { en: { label: 'pH' } } },
    ],
    imageSrc: '/images/gloseria-liposhapeface.webp',
    formCard: {
      leftTitle: 'YÜZDE ŞEKİL VE ZARİFLİK',
      leftSubtitle: 'Doğal & Tatmin Edici',
      rightTitle: 'Liposhape Face Uygulama',
      rightSubtitle: 'Uygulama videosunu e-posta olarak iletebiliriz.',
      ctaLabel: 'Formu Doldur',
      ctaHref: '/iletisim#contact-form',
      i18n: {
        en: {
          leftTitle: 'FACIAL SHAPE & TIGHTNESS ACHIEVED',
          leftSubtitle: 'Natural, Pleasant & Satisfying',
          rightTitle: 'Liposhape Face Application',
          rightSubtitle: 'We can send the application video via email.',
          ctaLabel: 'Fill out the form',
        },
      },
    },
    i18n: {
      en: {
        headline: 'Face Contouring & Lifting Effect',
        description:
          'Liposhape Face new generation renewal protocol solution provides a natural face lift effect by defining facial lines and improving the chin area.',
        ingredients:
          'With lipolysis-supporting components and skin-tightening factors, it defines facial contour. It creates a younger, lifted and three-dimensional facial appearance.',
      },
    },
  },
}
