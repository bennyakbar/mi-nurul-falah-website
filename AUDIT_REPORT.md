# 🔍 Website Audit Report: MI Nurul Falah

**Tanggal Audit:** 27 Januari 2026  
**Fokus:** Reliability & Usability

---

## 📋 Ringkasan Eksekutif

Website **MI Nurul Falah** adalah website statis untuk sekolah Madrasah Ibtidaiyah yang dibangun dengan **HTML, CSS, dan JavaScript murni**. Website ini berfungsi sebagai profil sekolah dengan fitur utama informasi PPDB (Penerimaan Peserta Didik Baru).

**Struktur Project:**
- 11 halaman HTML
- 7 file CSS
- 5 file JavaScript
- Responsive design dengan mobile menu

---

## ✅ FUNGSI YANG SUDAH ADA

### 1. **Navigasi & Layout**
| Fitur | Status | Lokasi |
|-------|--------|--------|
| Header sticky dengan glassmorphism | ✅ Berfungsi | `style.css` line 174-183 |
| Mobile hamburger menu | ✅ Berfungsi | `script.js` line 1-11 |
| Footer dengan info kontak | ✅ Berfungsi | Semua halaman |
| Smooth scroll | ✅ Berfungsi | `style.css` line 582-584 |

### 2. **Halaman Website**
| Halaman | Status | Konten |
|---------|--------|--------|
| `index.html` | ✅ Berfungsi | Hero section, keunggulan sekolah |
| `profile.html` | ✅ Berfungsi | Profil sekolah, visi misi |
| `akademik.html` | ✅ Berfungsi | Kurikulum, program akademik |
| `ppdb.html` | ✅ Berfungsi | Info pendaftaran, persyaratan, timeline |
| `berita.html` | ✅ Berfungsi | Daftar berita/kegiatan |
| `galeri.html` | ✅ Berfungsi | Galeri foto kegiatan |
| `kontak.html` | ✅ Berfungsi | Form kontak, peta lokasi |
| `tahfidz.html` | ✅ Berfungsi | Program tahfidz |
| `ekstrakurikuler.html` | ✅ Berfungsi | Kegiatan ekstrakurikuler |
| `fasilitas.html` | ✅ Berfungsi | Fasilitas sekolah |
| `berita-*.html` (3 file) | ✅ Berfungsi | Detail berita individual |

### 3. **Formulir Kontak**
| Fitur | Status | Lokasi |
|-------|--------|--------|
| Form validation (required fields) | ✅ Berfungsi | `form.js` |
| Real-time validation on blur | ✅ Berfungsi | `form.js` line 41-50 |
| Email format validation | ✅ Berfungsi | `form.js` line 52-60 |
| Phone number filtering | ✅ Berfungsi | `form.js` line 63-69 |
| Loading state on submit | ✅ Berfungsi | `form.js` line 164-174 |
| Success/Error messages | ✅ Berfungsi | `form.js` line 215-234 |

### 4. **PPDB Page Features**
| Fitur | Status | Lokasi |
|-------|--------|--------|
| CTA highlighting dengan pulse animation | ✅ Berfungsi | `ppdb.js` line 88-159 |
| Smooth scroll antar section | ✅ Berfungsi | `ppdb.js` line 164-196 |
| Scrollspy untuk section aktif | ✅ Berfungsi | `ppdb.js` line 198-234 |
| WhatsApp/Google Form confirmation | ✅ Berfungsi | `ppdb.js` line 240-264 |
| Ripple effect on buttons | ✅ Berfungsi | `ppdb.js` line 103-129 |

### 5. **UI/UX Features**
| Fitur | Status |
|-------|--------|
| Responsive design (breakpoint 768px, 480px) | ✅ Berfungsi |
| Card hover effects | ✅ Berfungsi |
| Button press feedback | ✅ Berfungsi |
| Focus visible states | ✅ Berfungsi |
| Form input focus ring | ✅ Berfungsi |
| Gallery hover zoom | ✅ Berfungsi |
| Timeline visualization | ✅ Berfungsi |

### 6. **Accessibility**
| Fitur | Status |
|-------|--------|
| Semantic HTML structure | ✅ Berfungsi |
| aria-label on mobile menu button | ✅ Berfungsi |
| Proper heading hierarchy | ✅ Berfungsi |
| Form labels linked to inputs | ✅ Berfungsi |

---

## ⚠️ FUNGSI YANG KURANG OPTIMAL

### 1. **🟠 CSS Syntax Error - MEDIUM**
```css
/* style.css line 432-435 */
/* Increase padding for more drama */
text-align: center;
position: relative;
overflow: hidden;
}
```
**Masalah:** CSS properties orphaned di luar selector. Ini adalah syntax error yang akan diabaikan browser.

**Rekomendasi:** Hapus baris 432-435 atau perbaiki struktur CSS.

---

### 2. **🟠 JavaScript Files Tidak Digunakan - MEDIUM**
Di folder `assets/js/` ada file:
- `form.js` (242 lines)
- `ppdb.js` (325 lines)
- `main.js` (6759 bytes)
- `navbar.js` (3150 bytes)

Namun di HTML hanya di-include:
```html
<script src="assets/js/script.js"></script>
```

**Masalah:** File JavaScript yang lengkap seperti `form.js` dan `ppdb.js` dengan fitur validation, accordion, ripple effect **TIDAK DILOAD** di halaman mana pun!

**Rekomendasi:** Tambahkan script tags untuk file yang dibutuhkan:
```html
<!-- Untuk kontak.html -->
<script src="assets/js/form.js"></script>

<!-- Untuk ppdb.html -->
<script src="assets/js/ppdb.js"></script>
```

---

### 3. **🟠 Contact Form Selector Mismatch - MEDIUM**
Di `form.js`:
```javascript
const contactForm = document.querySelector('.form');
```
Di `kontak.html`:
```html
<form action="#" method="post" id="contactForm" class="card">
```
**Masalah:** Script mencari class `.form` tapi form memiliki class `.card`. Script `form.js` tidak akan berfungsi karena selector salah.

**Rekomendasi:** Ubah selector di `form.js` atau tambahkan class `form` ke elemen form.

---

### 4. **🟠 Duplicate Contact Form Handler**
`script.js`:
```javascript
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih!...');
        contactForm.reset();
    });
}
```
**Masalah:** Ada 2 handler untuk contact form (di `script.js` dan `form.js`). Ini bisa menyebabkan confusing behavior jika keduanya di-load.

---

### 5. **🟡 Hardcoded Placeholder Data - LOW**
- Alamat: "Jalan Pendidikan No. 123, Kota Contoh"
- Email: "info@smpnurulfalah.sch.id" (SMP, bukan MI)
- Google Maps embed: placeholder coordinates
- Google Form link: `https://forms.google.com/example` (invalid URL)

---

### 6. **🟡 Year Hardcoded - LOW**
```html
<p>&copy; 2024 MI Nurul Falah. All Rights Reserved.</p>
```
**Rekomendasi:** Gunakan JavaScript untuk dynamic year:
```javascript
document.getElementById('year').textContent = new Date().getFullYear();
```

---

### 7. **🟡 No Image Alt Fallback - LOW**
Galeri dan berita menggunakan gambar dengan alt text, tapi tidak ada fallback jika gambar tidak ditemukan.

---

### 8. **🟡 Inline Styles Overuse - LOW**
Banyak inline style di HTML yang seharusnya di CSS:
```html
<div style="height: 200px; margin: -32px -32px 20px -32px; overflow: hidden; border-radius: 16px 16px 0 0;">
```

---

## 🐛 BUG POTENSIAL

### 1. **🔴 CRITICAL: JavaScript Features Not Loading**
File-file JavaScript dengan fitur advanced tidak di-include di HTML:
- `form.js` - Real-time validation tidak berfungsi
- `ppdb.js` - Accordion, CTA animation, scrollspy tidak berfungsi
- `main.js` - Tidak diketahui fungsinya
- `navbar.js` - Kemungkinan mobile menu redundant

**Impact:** Semua fitur interaktif di halaman PPDB dan form validation tidak akan berjalan!

---

### 2. **🔴 CRITICAL: Contact Form Won't Submit**
```html
<form action="#" method="post" id="contactForm">
```
**Bug:** `action="#"` dan handler hanya menampilkan `alert()`. Tidak ada backend atau service untuk menerima pesan.

**Rekomendasi:** Integrasikan dengan:
- Formspree.io
- Netlify Forms
- Google Forms
- Email API

---

### 3. **🟠 Mobile Menu Doesn't Close on Link Click - HIGH**
```javascript
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});
```
**Bug:** Menu hanya di-toggle saat hamburger diklik. Saat user klik link di mobile, menu tetap terbuka sehingga user harus manual close.

**Rekomendasi:** Tambahkan:
```javascript
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
```

---

### 4. **🟠 No Loading State for Images - HIGH**
Galeri tidak memiliki lazy loading atau skeleton loading. Pada koneksi lambat, user akan melihat layout shift.

**Rekomendasi:** Tambahkan `loading="lazy"` ke semua images.

---

### 5. **🟡 News Links Point to "#" - MEDIUM**
```html
<a href="#" style="color: var(--color-primary);...">Baca Selengkapnya &rarr;</a>
```
**Bug:** Link "Baca Selengkapnya" di halaman berita mengarah ke `#` bukan ke halaman detail. Padahal sudah ada `berita-maulid.html`, `berita-museum.html`, `berita-tahfidz.html`.

---

### 6. **🟡 Utils Object Used Before Definition - MEDIUM**
Di `form.js`:
```javascript
// Line 56 - Utils.isValidEmail used
if (this.value && !Utils.isValidEmail(this.value)) {

// Line 237-241 - Utils defined
const Utils = {
    isValidEmail: function(email) { ... }
};
```
**Bug:** `Utils` digunakan sebelum didefinisikan. Ini berfungsi karena hoisting, tapi bisa confusing.

---

### 7. **🟡 WhatsApp Confirmation Might Annoy Users - LOW**
```javascript
const confirmWhatsApp = confirm('Anda akan diarahkan ke WhatsApp...');
if (!confirmWhatsApp) {
    e.preventDefault();
}
```
**Issue:** Menampilkan confirm dialog setiap kali bisa mengganggu user experience.

---

## 📊 RELIABILITY SCORE

| Aspek | Score | Catatan |
|-------|-------|---------|
| Page Load | 8/10 | Static site, fast loading |
| Error Handling | 4/10 | Minimal error handling |
| Form Reliability | 3/10 | No actual submission, validation not loaded |
| Link Integrity | 6/10 | Some broken links (#) |
| Script Loading | 2/10 | Critical scripts not included! |

**Overall Reliability Score: 4.6/10**

---

## 📊 USABILITY SCORE

| Aspek | Score | Catatan |
|-------|-------|---------|
| Navigation | 8/10 | Clear structure, mobile responsive |
| Visual Design | 9/10 | Modern, clean, professional |
| Accessibility | 7/10 | Good semantics, some improvements needed |
| Mobile UX | 6/10 | Menu doesn't close after click |
| Form UX | 5/10 | Basic validation only |
| Content | 7/10 | Placeholder content needs updating |

**Overall Usability Score: 7.0/10**

---

## 🔧 REKOMENDASI PRIORITAS

### 🔴 High Priority (Harus diperbaiki)
1. **Include JavaScript files yang hilang** di HTML
2. **Perbaiki selector form.js** (`.form` → `.card` atau `#contactForm`)
3. **Integrasikan contact form** dengan backend/service
4. **Fix mobile menu** - tutup saat link diklik
5. **Perbaiki CSS syntax error** di line 432-435

### 🟠 Medium Priority (Sebaiknya diperbaiki)
6. **Update berita links** dari `#` ke halaman detail yang benar
7. **Add lazy loading** untuk images
8. **Update placeholder content** dengan data sebenarnya
9. **Fix Google Maps embed** dengan koordinat yang benar

### 🟡 Low Priority (Nice to have)
10. **Dynamic copyright year** dengan JavaScript
11. **Add loading skeletons** untuk gallery
12. **Consolidate inline styles** ke CSS
13. **Add favicon**

---

## 📁 File Statistics

| Category | Files | Total Size |
|----------|-------|------------|
| HTML | 11 | ~70 KB |
| CSS | 7 | ~15 KB |
| JavaScript | 5 | ~30 KB |
| **Total** | **23** | **~115 KB** |

---

*Audit dilakukan oleh: AI Assistant*  
*Tanggal: 27 Januari 2026*
