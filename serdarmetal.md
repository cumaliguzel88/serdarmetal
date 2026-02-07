# Serdar Metal Geri Dönüşüm — Landing Page (Tek Sayfa) Proje Dokümanı

Bu doküman AI agent’ın (Codex) projeyi uçtan uca doğru standartlarda üretmesi için “tek kaynak doğruluk” (single source of truth) dosyasıdır. Agent her görevden önce bu dosyayı okuyup burada yazan kurallara uymak zorundadır.

---

## 1) Proje Tanımı

**Proje:** Serdar Metal Geri Dönüşüm firmasını tanıtan, tek sayfalık (scroll) kurumsal landing page.  
**Backend/DB:** Yok. Form zorunlu değil; ana CTA telefon/WhatsApp.  
**Temel hedef:** Ziyaretçi hızlıca iletişime geçsin (Ara / WhatsApp).  
**İkincil hedef:** Hizmetler + güven + süreç + konum bilgisiyle güven oluşturmak.

---

## 2) Hedef Kitle ve Cihaz Önceliği

- **Mobile-first zorunlu.** Trafiğin çoğu mobil.
- Masaüstü yalnızca “progressive enhancement” (iyileştirme) amaçlıdır.
- Mobilde kusursuz çalışmadan masaüstüne geçilmez.

---

## 3) Stack ve Deploy

### Stack (zorunlu)
- **Astro** (statik site üretimi)
- **TypeScript** (JS değil)
- **Tailwind CSS**
- **Vanilla JS** (minimum etkileşim)
- **GSAP + ScrollTrigger** (animasyonlar)

### Deploy (zorunlu)
- **GitHub Pages**
- Repo: `https://github.com/cumaliguzel88/serdarmetal`

Not: GitHub Pages path ile yayınlanacaksa base path ayarı yapılmalı; asset yolları kırılmamalı.

---

## 4) Sayfa İskeleti (Tek Sayfa, Scroll)

Tek sayfa ve aşağı kaydırmalı olacak. Header menüsü anchor ile section’lara kaydıracak.

Zorunlu section’lar (önerilen sıra):
1. **Header** (Logo + CTA)
2. **Hero** (değer önerisi + 2 CTA: Ara / WhatsApp)
3. **Hizmetler** (kartlar)
4. **Neden Biz** (güven maddeleri)
5. **Süreç** (3 adım)
6. **Referans / Galeri** (fotoğraf grid)
7. **Hakkımızda** (kısa tarihçe)
8. **İletişim** (telefon/whatsapp/adres/saat + Google Maps embed)

Her section id almalı:
- `#hero #hizmetler #neden-biz #surec #galeri #hakkimizda #iletisim`

---

## 5) Brand / UI Kuralları

### Renk
- Arka plan **tamamen beyaz**.
- Brand vurgu: **kırmızı** (logoya yakın ton) — “aksan” gibi, her yeri kırmızı yapma.
- Metin: saf siyah yerine **koyu gri**.
- İkincil renk: açık gri (border/divider/secondary text).

### Tipografi ve düzen
- Okunabilirlik öncelik: mobilde 16px base text, rahat satır aralığı.
- Dokunma alanı: buton/ikon en az **44px** yükseklik.
- Ferah boşluk: section padding’leri yeterli olmalı.
- Semantik HTML: **tek H1** (Hero başlığı). Diğerleri H2/H3.

### Navigasyon
- Header: Logo + “Teklif Al / Ara / WhatsApp” gibi net CTA.
- Mobilde hamburger şart değil; tek CTA + anchor linkler minimal olabilir.

---

## 6) İçerik ve Data Yönetimi (Hard-coded yasak)

### Kural
- Component içine uzun metin gömülmeyecek.
- Tüm metinler i18n’den, tüm listeler/data dosyalarından gelecek.

### Merkezi config/data (zorunlu)
- Şirket bilgileri tek yerden yönetilecek:
  - telefon, WhatsApp numarası/URL, adres, çalışma saatleri, harita linki, şirket adı
- Hizmetler, süreç adımları, galeri görselleri “data” olarak tutulacak.

---

## 7) i18n (TR + EN)

- **Varsayılan dil: Türkçe (TR).**
- Kullanıcı isterse **EN**’e geçebilmeli (header’da TR/EN toggle).
- Tüm string’ler anahtar bazlı kullanılmalı: `t("hero.title")` benzeri yaklaşım.
- Dil seçimi saklama: basitçe `localStorage` veya `?lang=en` (seçilen yöntem tutarlı uygulanacak).
- Yeni metin ekleme kuralı:
  1) `tr` ve `en` dosyasına ekle  
  2) UI’da key ile çağır

---

## 8) Animasyon Standartları (GSAP)

Amaç: profesyonel akış, abartısız premium his.

### Kurallar
- Scroll girişleri: hafif **opacity + translate**. Stagger kullanılabilir.
- Hover animasyonları: kartlarda hafif yükselme/shadow; butonda hafif fill/underline.
- Performans: animasyonlar mümkünse **transform/opacity** ile.
- **prefers-reduced-motion** desteği zorunlu:
  - kullanıcı azaltılmış hareket istiyorsa animasyonlar kapatılır veya minimize edilir
- Cursor/hover bazlı animasyonlar mobil için şart değil:
  - sadece `pointer:fine` (desktop) durumunda aktif olabilir.

### Organizasyon
- GSAP kodu dağınık yazılmayacak.
- Animasyonlar “init” fonksiyonlarıyla düzenlenecek (section bazlı).

---

## 9) Performans ve Görsel Optimizasyonu

- Site statik üretilecek; JS minimum tutulacak.
- Görseller:
  - mümkünse **WebP/AVIF**
  - hero görseli optimize (LCP için)
  - hero dışı görseller lazy-load
  - CLS üretmeyecek şekilde boyut/aspect planlı
- SEO zorunluları:
  - title, meta description
  - OpenGraph (og:title, og:description, og:image)
  - canonical + robots
  - mümkünse sitemap

---

## 10) Erişilebilirlik (A11y)

- Kontrast yeterli olmalı.
- Focus-visible ile klavye gezilebilirlik.
- WhatsApp/telefon linklerinde anlaşılır aria-label.
- Harita embed erişilebilir şekilde konumlandırılmalı (mobilde taşma yok).

---

## 11) Kod Standardı ve Sürdürülebilirlik

### Dil ve stil
- TypeScript zorunlu.
- Küçük fonksiyonlar, tek sorumluluk.
- “Magic number” yok:
  - animasyon süre/ease, spacing, breakpoint gibi değerler merkezi const/config üzerinden yönetilmeli.
- Yorum satırı:
  - “neden” açıklayan yorumlar yazılmalı, obvious şeyler yorumlanmamalı.

### Lint/format
- Repo standardı olarak ESLint + Prettier (varsa) çalıştırılmalı.
- Dosya/isimlendirme tutarlı:
  - Component: PascalCase
  - Data/config: kebab-case veya camelCase (tek standard seç)

---

## 12) Önerilen Klasör Yapısı

- `src/pages/`
  - `index.astro` (tek sayfa)
- `src/layouts/`
  - `BaseLayout.astro` (meta + ortak)
- `src/components/sections/`
  - `Header.astro`
  - `Hero.astro`
  - `Services.astro`
  - `WhyUs.astro`
  - `Process.astro`
  - `Gallery.astro`
  - `About.astro`
  - `Contact.astro`
- `src/components/ui/`
  - `Button.astro`, `Container.astro`, `SectionTitle.astro`, `Card.astro` vb.
- `src/content/`
  - `i18n/tr.json`
  - `i18n/en.json`
  - `site.config.ts` (şirket/iletişim)
  - `services.ts`
  - `process.ts`
  - `gallery.ts`
- `src/scripts/`
  - `animations/` (GSAP init fonksiyonları)
  - `i18n/` (t() helper, lang resolver)
- `public/`
  - `logo/`, `images/` (optimize edilecek kaynaklar)

Not: agent bu yapıyı uygularken, gereksiz dosya kalabalığı üretmeyecek; ama düzen korunacak.

---

## 13) Git Workflow (Kritik — Push Kuralı)

Bu repo public ve contributor’lar görecek. Bu nedenle disiplin zorunlu.

### Her görev için zorunlu akış
1) **Görevi al:** Görevi 1–2 cümleyle tekrar et.
2) **Görevleri tanımla:** Done kriterlerini madde madde yaz.
3) **Uygula:** Yalnızca görevin kapsamındaki değişiklikleri yap (gereksiz refactor yok).
4) **Terminalde çalıştır ve derle:** Dev server + prod build (ve varsa lint/format). Hata/uyarı varsa çöz.
5) **Push yok — kullanıcı kontrolü:** Değişiklik özetini ve test maddelerini yaz. Kullanıcıdan onay bekle.
6) **Kullanıcı onayı gelirse:** Commit + push.
7) **Kullanıcı olumsuzsa:** Düzelt → tekrar 4–6.

### Push yasağı
- Kullanıcı “pushla / bitirebilirsin / tamam” demeden **remote’a push yapılmayacak**.

### Commit standardı
- Mesaj formatı:
  - `feat: ...` yeni özellik/section
  - `fix: ...` hata düzeltme
  - `chore: ...` tooling/config
  - `refactor: ...` davranış değiştirmeyen düzenleme

---

## 14) Definition of Done (Görev bitiş kriterleri)

Bir iş “bitti” sayılması için:
- Mobilde (375px) tüm section’lar taşmadan, CTA’lar net.
- Anchor kaydırma sorunsuz.
- TR/EN toggle çalışıyor; default TR.
- Animasyonlar akıcı; reduced-motion uyumlu.
- Görseller optimize, CLS düşük.
- Prod build hatasız.

---

## 15) Notlar / İçerik Placeholder

Agent ilk etapta placeholder içerik kullanabilir ama:
- placeholder metinler bile i18n key ile gelmeli,
- iletişim bilgileri config’ten gelmeli,
- hizmet/süreç listeleri data dosyasından gelmeli.

(İletişim numarası, adres, galeri fotoğrafları gibi gerçek veriler sonradan config/data üzerinden güncellenecek.)

---
Son söz: Bu dokümandaki kurallar “üstün kurallar”dır. Agent, görev sırasında karar veremediği noktada önce bu dosyaya göre hareket eder.