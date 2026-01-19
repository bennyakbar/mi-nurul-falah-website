# Product Requirement Document (PRD)

## Website MI Nurul Falah

---

## 1️⃣ Latar Belakang Masalah

Informasi dan dokumentasi kegiatan **MI Nurul Falah** saat ini belum terpusat dalam satu platform digital resmi, sehingga menimbulkan beberapa kendala berikut:

- Akses informasi resmi sekolah belum optimal
- Dokumentasi kegiatan sekolah belum terkelola secara sistematis
- Ketergantungan pada media informal (pesan pribadi, grup chat, selebaran)

Kondisi tersebut berpotensi mengurangi efektivitas komunikasi serta citra profesional lembaga di mata masyarakat.

---

## 2️⃣ Tujuan Produk

Website MI Nurul Falah dikembangkan dengan tujuan sebagai berikut:

| Aspek | Tujuan |
| --- | --- |
| Informasi | Menyediakan informasi sekolah yang terpusat dan mudah diakses |
| Transparansi | Menampilkan informasi akademik dan kelembagaan secara terbuka |
| Branding | Membangun citra sekolah yang profesional dan Islami |
| Aksesibilitas | Dapat diakses dengan baik melalui perangkat mobile |

---

## 3️⃣ Stakeholder

Pihak-pihak yang terlibat dan berkepentingan dalam pengembangan produk ini meliputi:

- Yayasan Nurul Falah
- Kepala Madrasah Ibtidaiyah Nurul Falah
- Guru dan staf sekolah
- Orang tua siswa
- Tim pengembang (developer)

---

## 4️⃣ Functional Requirements (Core Website)

| ID | Fitur | Deskripsi | Prioritas |
| --- | --- | --- | --- |
| FR-01 | Beranda | Menampilkan ringkasan profil dan highlight utama sekolah | High |
| FR-02 | Profil | Menyajikan visi, misi, dan sejarah sekolah | High |
| FR-03 | Akademik | Informasi kurikulum dan program pendidikan | High |
| FR-04 | Berita | Artikel dan pengumuman kegiatan sekolah | High |
| FR-05 | Galeri | Dokumentasi foto kegiatan sekolah | Medium |
| FR-06 | Kontak | Informasi alamat dan kontak WhatsApp | High |

---

## 5️⃣ Non-Functional Requirements (Core Website)

- **Responsiveness**
    
    Website harus responsif dan menerapkan pendekatan *mobile-first*.
    
- **Performance**
    
    Waktu muat halaman maksimal **< 3 detik** pada koneksi internet standar.
    
- **Maintainability**
    
    Konten dapat dikelola oleh admin non-teknis melalui pembaruan manual.
    
- **Language & Tone**
    
    Menggunakan Bahasa Indonesia yang formal, edukatif, santun, dan sesuai nilai Islami.
    
- **Security (Basic)**
    
    Tidak menyimpan data sensitif pengguna.
    

---

## 6️⃣ Constraint (Batasan Proyek)

- Tidak menggunakan backend dan database pada **Fase 1**
- Keterbatasan anggaran pengembangan
- Admin pengelola bukan berlatar belakang teknis (non-IT)

---

## 7️⃣ Modul PPDB – Product Requirements

### 🎯 Tujuan Modul PPDB

Modul PPDB dikembangkan sebagai sarana informasi resmi penerimaan peserta didik baru dengan tujuan:

- Menyediakan informasi PPDB yang jelas, resmi, dan terpusat
- Mengurangi pertanyaan berulang kepada panitia PPDB
- Meningkatkan profesionalisme dan kepercayaan calon wali murid

---

## 7.1 Functional Requirements – PPDB

| ID | Fitur | Deskripsi | Prioritas |
| --- | --- | --- | --- |
| FR-PPDB-01 | Halaman PPDB | Halaman khusus informasi PPDB | High |
| FR-PPDB-02 | Jadwal PPDB | Informasi tanggal dan gelombang pendaftaran | High |
| FR-PPDB-03 | Persyaratan | Informasi dokumen dan ketentuan pendaftaran | High |
| FR-PPDB-04 | Alur Pendaftaran | Penjelasan langkah pendaftaran secara bertahap | High |
| FR-PPDB-05 | Tombol Daftar | CTA menuju WhatsApp atau Google Form | High |
| FR-PPDB-06 | Kontak Panitia | Informasi kontak panitia PPDB | High |

---

## 7.2 Non-Functional Requirements – PPDB

- Informasi mudah dipahami oleh orang tua dari berbagai latar belakang
- Bahasa formal, persuasif, dan komunikatif
- Konten PPDB dapat diperbarui setiap tahun ajaran tanpa perubahan struktur kode
- Tampilan optimal pada perangkat mobile

---

## 7.3 Out of Scope – PPDB (Fase 1)

Fitur berikut **tidak termasuk dalam Fase 1** dan direncanakan sebagai pengembangan lanjutan:

- Upload dokumen pendaftaran secara online
- Verifikasi otomatis pendaftar
- Dashboard panitia PPDB
- Status pendaftaran real-time

---

##