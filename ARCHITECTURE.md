## Website MI Nurul Falah

---

## 1️⃣ Gambaran Umum Arsitektur

Website MI Nurul Falah menggunakan **arsitektur statis (static website architecture)** yang dirancang untuk:

- Mudah dikembangkan
- Hemat biaya
- Aman untuk admin non-teknis
- Cocok untuk hosting statis / shared hosting

Arsitektur ini **tidak menggunakan backend dan database** pada Fase 1.

---

## 2️⃣ Struktur Halaman (Page Structure)

Struktur halaman utama yang dapat diakses oleh pengguna:

```
/public
 ├── index.html# Beranda
 ├── profile.html# Profil Sekolah
 ├── akademik.html# Akademik
 ├── ppdb.html# PPDB
 ├── berita.html# Berita & Pengumuman
 ├── galeri.html# Galeri Kegiatan
 └── kontak.html# Kontak

```

### Prinsip Struktur Halaman

- Setiap halaman berdiri sendiri (*standalone HTML*)
- Header dan footer konsisten di seluruh halaman
- Navigasi utama tersedia di semua halaman

---

## 3️⃣ Arsitektur Teknis Tingkat Tinggi

```
User Browser
     ↓
HTML+ CSS+ JavaScript
     ↓
Static Hosting Server

```

### Penjelasan:

- **User Browser**
    
    Mengakses website melalui desktop atau mobile browser.
    
- **HTML + CSS + JavaScript**
    
    Seluruh logika tampilan dan interaksi berjalan di sisi klien (*client-side*).
    
- **Static Hosting Server**
    
    Server hanya melayani file statis tanpa pemrosesan data.
    

---

## 4️⃣ Alur PPDB (Fase 1)

Alur penggunaan modul PPDB pada Fase 1 bersifat **informatif dan redirect eksternal**.

```
User
 ↓
Mengakses Halaman PPDB
 ↓
Membaca Informasi PPDB
 (jadwal, persyaratan, alur)
 ↓
Klik Tombol "Daftar Sekarang"
 ↓
Redirect ke:
- WhatsApp Panitia
  atau
- Google Form Pendaftaran

```

### Karakteristik Alur PPDB

- Tidak ada input data yang disimpan di website
- Website hanya berfungsi sebagai **media informasi & pengarah**
- Proses pendaftaran dilakukan di platform eksternal

---

## 5️⃣ Catatan Arsitektur (Architecture Notes)

- **Tanpa Penyimpanan Data**
    
    Tidak ada database, API, maupun server-side processing.
    
- **Redirect Eksternal**
    
    Semua proses pendaftaran dialihkan ke WhatsApp atau Google Form.
    
- **Keamanan**
    
    Risiko keamanan rendah karena tidak ada data sensitif yang disimpan.
    
- **Hosting Friendly**
    
    Aman digunakan pada:
    
    - Shared hosting
    - Static hosting
    - Hosting murah / sekolah

---

## 6️⃣ Scalability & Future Development

Arsitektur ini **disiapkan untuk pengembangan lanjutan**, antara lain:

- Integrasi backend & database (PPDB Online)
- Dashboard panitia PPDB
- Sistem multi-unit (RA, MI, Yayasan)
- Login admin
- Export data pendaftar

> Pengembangan lanjutan dapat dilakukan tanpa mengubah struktur halaman utama, hanya menambahkan layer backend.
>