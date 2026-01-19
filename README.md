# Website Resmi MI Nurul Falah

### 📌 Ringkasan Proyek

Website resmi **MI Nurul Falah** adalah platform digital berbasis web yang berfungsi sebagai **pusat informasi, edukasi, dan komunikasi** antara sekolah, orang tua siswa, calon wali murid, dan masyarakat umum.

Website ini bersifat **informatif**, **mudah diakses**, **responsif**, dan **sesuai nilai Islami**.

---

### 🎯 Tujuan Utama

1. Menyediakan informasi resmi & terpercaya
2. Meningkatkan citra profesional sekolah
3. Mempermudah akses informasi akademik
4. Menjadi arsip digital kegiatan sekolah

---

### 👥 Target Pengguna

- Orang tua siswa MI
- Calon wali murid
- Guru & staf
- Siswa
- Masyarakat umum

---

### 🔑 Ruang Lingkup Fitur

- Profil sekolah
- Informasi akademik
- Berita & pengumuman
- Galeri kegiatan
- Kontak & lokasi sekolah
- PPDB (Penerimaan Peserta Didik Baru)

### 🧩 Fitur PPDB

Fitur PPDB berfungsi sebagai **media informasi resmi PPDB MI Nurul Falah**, meliputi:

- Informasi jadwal & gelombang PPDB
- Persyaratan pendaftaran
- Alur pendaftaran
- Kontak panitia PPDB
- Tombol pendaftaran (manual / Google Form / WhatsApp)

> ⚠️ Catatan:
> 
> 
> Pada **Fase 1**, PPDB **belum menggunakan sistem backend & database**.
> 

---

### 🛠️ Teknologi (Fase 1)

- HTML5
- CSS3
- JavaScript (Vanilla)
- Hosting statis / shared hosting

---

### 📂 Struktur Repo

mi-nurul-falah-website/
│
├── [README.md](http://readme.md/)
├── [PRD.md](http://prd.md/)
├── [ARCHITECTURE.md](http://architecture.md/)
├── [SPECS.md](http://specs.md/)
├── [TASKS.md](http://tasks.md/)
│
├── docs/
│   ├── ppdb/
│   │   ├── [README-PPDB.md](http://readme-ppdb.md/)
│   │   ├── [alur-ppdb.md](http://alur-ppdb.md/)
│   │   └── [persyaratan-ppdb.md](http://persyaratan-ppdb.md/)
│   └── [assets-guideline.md](http://assets-guideline.md/)
│
├── public/
│   ├── index.html              # Beranda
│   ├── profile.html            # Profil Sekolah
│   ├── akademik.html           # Akademik
│   ├── ppdb.html               # PPDB
│   ├── berita.html             # Berita & Pengumuman
│   ├── galeri.html             # Galeri Kegiatan
│   └── kontak.html             # Kontak
│
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── ppdb.css            # Styling khusus PPDB
│   │
│   ├── js/
│   │   ├── main.js              # Global JS
│   │   ├── navbar.js
│   │   ├── slider.js
│   │   ├── form.js
│   │   └── ppdb.js              # Interaction PPDB
│   │
│   └── images/
│       ├── logo/
│       │   └── logo-mi-nurul-falah.png
│       │
│       ├── hero/
│       │   ├── hero-1.jpg
│       │   └── hero-2.jpg
│       │
│       ├── galeri/
│       │   ├── kegiatan-1.jpg
│       │   └── kegiatan-2.jpg
│       │
│       └── ppdb/
│           ├── ppdb-banner.jpg
│           ├── alur-ppdb.png
│           └── checklist.png
│
├── .gitignore
└── LICENSE
