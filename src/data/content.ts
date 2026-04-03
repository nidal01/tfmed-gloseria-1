/** Medya URL’leri ve yapısal veri; kullanıcıya dönük metinler `src/locales/*.json` içinde. */

export const images = {
  hero:
    'https://z-cdn-media.chatglm.cn/files/420a8b69-f6be-4555-9dff-c7f1b5c9a9b6.png?auth_key=1875246085-924d165a75374ded87f44d5f8c136af0-0-ce433765219f8147e26876a56f286139',
  workshopBg:
    'https://z-cdn-media.chatglm.cn/files/1c1e2bdd-c7d7-4b8c-88ca-3da875e11d70.png?auth_key=1875246085-d5045681c11b482680c5cad4a55a3080-0-193a45a8ed26e6bd9db8a226a86bb19a',
} as const

export const megaMenuFeaturedImage = '/mega-menu-featured.png'

export const categoryCards = [
  {
    id: 'skin' as const,
    image:
      'https://z-cdn-media.chatglm.cn/files/2e2a7a97-dff8-4c94-bcb6-7ea9d33d1ee2.png?auth_key=1875246085-6f1aef92ff094504841c100a18b55d75-0-e65593db4fb09c4e9262faf9bf994867',
  },
  {
    id: 'volumegen' as const,
    image:
      'https://z-cdn-media.chatglm.cn/files/2e2a7a97-dff8-4c94-bcb6-7ea9d33d1ee2.png?auth_key=1875246085-6f1aef92ff094504841c100a18b55d75-0-e65593db4fb09c4e9262faf9bf994867',
  },
  {
    id: 'genital' as const,
    image:
      'https://z-cdn-media.chatglm.cn/files/2e2a7a97-dff8-4c94-bcb6-7ea9d33d1ee2.png?auth_key=1875246085-6f1aef92ff094504841c100a18b55d75-0-e65593db4fb09c4e9262faf9bf994867',
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
  'VoluregenBio Stimulator',
] as const

export const contact = {
  addressLines: [
    'Halaskargazi Cad. No:38-66',
    'Daire:46, Lotus AVM, Şişli',
    'İstanbul, Türkiye',
  ],
  phone: '+90 547 050 40 40',
  email: 'info@tfmed.com.tr',
} as const

export const workshopCtaHref = '#'

export const navRoutes = [
  { href: '#home', labelKey: 'nav.home' as const },
  { href: '#corporate', labelKey: 'nav.corporate' as const },
  { href: '#products', labelKey: 'nav.products' as const },
  { href: '#representatives', labelKey: 'nav.representatives' as const },
  { href: '#contact', labelKey: 'nav.contact' as const },
] as const
