# İletişim Sayfası Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Kurumsal dil ile uyumlu `/iletisim` sayfası: iletişim bilgileri + validasyonlu form (backend’siz).

**Architecture:** TanStack Router ile yeni route (`src/routes/iletisim.tsx`) eklenir. Sayfa `ContactPage` içinde `InnerHero` + iki kolon grid + form state/validasyon yönetimi yapar. Stil mevcut `src/styles/landing.css` içine yeni `.contact-*` sınıfları olarak eklenir.

**Tech Stack:** React + TypeScript, `@tanstack/react-router`, `react-i18next` (başlık/etiketler için opsiyonel), global CSS (`src/styles/landing.css`).

---

### Task 1: Mevcut navbar / nav yapısını doğrula

**Files:**
- Read: `src/components/Navbar.tsx` (varsa)
- Read: `src/data/content.ts` (navRoutes var)

**Step 1: Navbar implementasyonunu incele**
- Amaç: `/iletisim` linki eklemek gerekiyor mu? Yoksa footer/landing anchor’ları mı kullanılıyor?

**Step 2: Karar**
- Eğer navbar hardcoded route listesi kullanıyorsa: “İletişim” linkini ekle.
- Eğer sadece anchor’larla çalışıyorsa: `/iletisim` için ayrı link eklemek (opsiyonel) veya mevcut “İletişim” davranışını bozmamak için sadece sayfayı eklemek.

**Step 3: Manuel doğrulama**
- Beklenti: Navbar hâlâ render oluyor, route geçişleri bozulmuyor.

---

### Task 2: Yeni route ekle (`/iletisim`)

**Files:**
- Create: `src/routes/iletisim.tsx`
- Modify: `src/router.tsx`

**Step 1: Route dosyasını oluştur**
- `createRoute` ile parent `__root` ve `path: '/iletisim'`
- `component: ContactPage`

**Step 2: Router tree’ye ekle**
- `src/router.tsx` içine yeni Route import’u ekle
- `routeTree` children listesine `ContactRoute` ekle

**Step 3: Çalıştırma kontrolü**
- Beklenti: `/iletisim` açılabiliyor (beyaz ekran yok), header/footer görünüyor.

---

### Task 3: `ContactPage` sayfasını oluştur

**Files:**
- Create: `src/pages/ContactPage.tsx`
- Read: `src/pages/CorporatePage.tsx` (stil dili referansı)
- Read: `src/components/InnerHero.tsx`
- Read: `src/data/content.ts` (`contact` objesi)

**Step 1: Temel layout**
- `InnerHero title="İletişim"` (i18n varsa `t('nav.contact')` ile)
- Ana bölüm: container + grid

**Step 2: İletişim bilgi kartları**
- Adres: `contact.addressLines`
- Telefon: `tel:` link (boşluk temizleme)
- E‑posta: `mailto:` link

**Step 3: Form state ve validasyon**
- State: `name`, `email`, `phone`, `message`
- Errors: field bazlı string mesajlar
- Submit:
  - `preventDefault()`
  - Validasyon: required + email regex + message min length (örn 10)
  - Başarılıysa: state reset + `submitted=true` + status panel

**Step 4: Erişilebilirlik**
- Her input için `label` + `id`
- Hata mesajları `aria-describedby`
- `aria-invalid` hata varken `true`
- Status panel `role="status"` ve `aria-live="polite"`

**Step 5: Manual test**
- Boş submit: hatalar görünür
- Geçerli submit: başarı mesajı + alanlar temizlenir

---

### Task 4: CSS ekle (kurumsal dil + premium kartlar)

**Files:**
- Modify: `src/styles/landing.css`

**Step 1: Yeni sınıfları ekle**
- `.contact` section padding/arkaplan
- `.contact__container` max-width
- `.contact__grid` 2 kolon + responsive
- `.contact__card` bilgi kartı stili
- `.contact__formCard` gradient + border + shadow
- Form alanları: `.contact__field`, `.contact__input`, `.contact__textarea`, `.contact__error`, `.contact__button`
- Focus-visible stilleri

**Step 2: Responsive**
- 900px altı: tek kolon, padding ayarları

**Step 3: Manual test**
- Mobilde okunabilirlik, buton ve input genişlikleri

---

### Task 5: Lint / Type check

**Files:**
- Check: `src/pages/ContactPage.tsx`
- Check: `src/routes/iletisim.tsx`
- Check: `src/router.tsx`

**Step 1: Linter diagnostics**
- Beklenti: Yeni dosyalarda TS/React lint hatası yok.

**Step 2: Fix**
- Gerekirse import sırası, unused değişkenler, type’lar düzeltilir.

---

### Task 6: (Opsiyonel) Navbar’a link ekle

**Files:**
- Modify: `src/components/Navbar.tsx` (varsa)
- Modify: `src/data/content.ts` veya locale dosyaları (gerekirse)

**Step 1: Link ekleme**
- “İletişim” → `/iletisim`

**Step 2: Manual test**
- Link doğru sayfaya gider
- Landing’deki `#contact` davranışı bozulmaz (varsa korunur)

