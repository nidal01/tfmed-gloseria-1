## İletişim Sayfası (Kurumsal) — Tasarım

**Amaç**  
Gloseria web sitesine, kurumsal sayfa diliyle uyumlu bir **İletişim** sayfası eklemek. Sayfa içinde hem iletişim bilgileri hem de (şimdilik backend’siz) bir iletişim formu bulunacak. Header ve footer mevcut root layout içinde sabit kalacak.

**Kapsam / Kapsam dışı**
- Kapsam: Yeni route + sayfa, iletişim bilgi blokları, form UI + validasyon + durum mesajı (gerçek gönderim yok).
- Kapsam dışı: Backend endpoint entegrasyonu, gerçek mail gönderimi, harita entegrasyonu (opsiyonel placeholder dışında).

### Navigasyon ve Yerleşim
- Route: **`/iletisim`** (paylaşılabilir, landing’i şişirmez, kurumsal sayfa hissi).
- Layout: TanStack Router root layout (`src/routes/__root.tsx`) zaten `Navbar` + `Outlet` + `SiteFooter` sağlıyor; sayfa sadece içerik üretir.

### Sayfa Yapısı (UI)
- Üst: `InnerHero` ile başlık “İletişim”
- Ana bölüm: beyaz zeminli, kurumsal sayfa diline yakın bir container

**Grid (2 kolon, responsive)**
- Sol kolon: “Bize Ulaşın” + kısa açıklama + 3 bilgi kartı
  - Adres: `contact.addressLines` ( `src/data/content.ts` )
  - Telefon: tıklanabilir `tel:` link
  - E‑posta: tıklanabilir `mailto:` link
- Sağ kolon: Form kartı
  - Alanlar: Ad Soyad (zorunlu), E‑posta (zorunlu), Telefon (opsiyonel), Mesaj (zorunlu)
  - Validasyon: boş alanlar + e‑posta formatı + mesaj minimum uzunluk
  - Gönder: “gerçek gönderim yok”; başarılı submit’te form temizlenir ve kart üstünde başarı paneli gösterilir (erişilebilir `role="status"`).

### Stil ve UX İlkeleri
- Mevcut palette uyum (`--primary-beige`, `--warm-brown`, `Playfair Display`)
- Kartlarda hover’da hafif yükselme, ince border + yumuşak gölge
- Erişilebilirlik: label’lar, `aria-invalid`, hata mesajları ve klavye odak stilleri
- Responsive: 900px altı tek kolona düşüş

### Dosya Etkisi (öngörü)
- Yeni: `src/pages/ContactPage.tsx`
- Yeni: `src/routes/iletisim.tsx`
- Düzenleme: `src/router.tsx` (route tree’ye ekleme)
- Stil: `src/styles/landing.css` içine yeni `.contact-*` sınıfları (tek yerde mevcut global stil yapısına uyumlu)
- (Gerekirse) navbar’a “İletişim” linki: mevcut `Navbar` implementasyonuna göre (opsiyonel).

