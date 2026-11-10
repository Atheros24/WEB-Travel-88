# Panduan Web SM88 Trans

Panduan lengkap untuk pemilik / pengelola travel. Ditulis dengan bahasa sehari-hari — tidak perlu paham istilah teknis.

---

## 1. Apa ini?

Ada **dua bagian** yang harus dipahami dulu:

| Bagian | Alamat | Siapa yang pakai | Fungsi |
|---|---|---|---|
| **Website (halaman pelanggan)** | https://web-travel-88-2026-nine.vercel.app | Calon penumpang | Lihat rute, harga, armada, lalu pesan tiket |
| **Panel Admin** | https://backend-production-2163e.up.railway.app/admin | Kamu (pemilik travel) | Mengatur harga, armada, melihat & memproses pesanan |

Analogi sederhananya:
- **Website** = etalase toko. Pelanggan lihat-lihat, lalu masuk untuk pesan.
- **Panel Admin** = ruang belakang toko. Kamu atur barang, harga, dan mencatat siapa yang pesan.

Keduanya **sudah tersambung**. Kalau kamu ubah harga di Panel Admin, harga di website berubah sendiri. Kalau ada pelanggan pesan di website, pesanannya langsung masuk ke Panel Admin.

---

## 2. Login ke Panel Admin

### Langkah

1. Buka browser (Chrome / Safari / Edge), ketik alamat:
   **https://backend-production-2163e.up.railway.app/admin**
2. Akan muncul halaman **Login**.
3. Isi:
   - **Email:** `admin@sm88trans.id`
   - **Password:** `password`
4. Centang **Ingat saya** kalau memakai komputer sendiri (biar tak perlu login ulang).
5. Klik **Masuk**.

### ⚠️ WAJIB DILAKUKAN SEKARANG

Password di atas adalah **password bawaan** dan **tertulis di dokumen ini** — artinya siapa pun yang baca dokumen ini bisa masuk ke panelmu.

**Segera ganti:**
1. Di panel kiri klik **User**
2. Klik baris `Admin SM88` untuk membuka detailnya
3. Isi kolom **Password** dengan password baru (minimal 8 karakter)
4. Klik **Update**

> Catat password barunya. Kalau lupa, harus di-reset lewat tenaga teknis.

### Tampilan panel

Di sisi kiri ada 6 menu:

| Menu | Isi |
|---|---|
| **Dashboard** | Ringkasan angka: total pesanan, pesanan baru, pendapatan |
| **Booking** | Daftar semua pesanan masuk |
| **Rute** | Daftar jurusan + harga |
| **Armada** | Daftar mobil/van |
| **Testimoni** | Ulasan pelanggan yang tampil di website |
| **User** | Akun yang bisa masuk panel |

> **Dari HP?** Menu ini otomatis pindah ke deretan atas dan bisa digeser ke samping. Tetap bisa dipakai dari HP.

---

## 3. Bagian yang dilihat pelanggan di website

Buka **https://web-travel-88-2026-nine.vercel.app** — urutannya dari atas ke bawah:

### 3.1 Navbar (menu atas)

Ada logo SM88 Trans di kiri, lalu menu: **Beranda · Rute & Tarif · Armada · Layanan · Tentang · Kontak**, dan tombol kuning **Pesan Sekarang** di kanan.

Menu ini "menempel" di atas — tetap terlihat walau halaman digulir.

### 3.2 Hero (halaman pembuka)

Judul besar *"Perjalanan Aman, Nyaman & Terpercaya"*.

Di **sebelah kanan** ada **kotak pemesanan** — ini bagian paling penting. Detailnya dibahas di bagian 4.

### 3.3 Marquee

Tulisan berjalan: *Travel Reguler · Door to Door · Armada Premium · On Time · Carter Pariwisata · Wedding Car · Tour Wisata*.

### 3.4 Tentang

Cerita singkat SM88 Trans.

### 3.5 Rute & Tarif

Kartu-kartu jurusan. Setiap kartu berisi:
- Gambar kota tujuan
- Nama jurusan (misal *Situbondo ⇄ Surabaya*)
- Lambang durasi (misal *5–6 jam*)
- Label kecil seperti **Terlaris** atau **BARU** (kalau diisi di panel admin)
- Harga sekali jalan, dan harga pulang-pergi di bawahnya

Seluruh kartu **bisa diklik** — langsung membuka WhatsApp dengan pesan rute yang sudah terisi.

### 3.6 Layanan

7 jenis layanan yang bisa ditawarkan:

| Layanan | Keterangan | Nomor WA yang dibuka |
|---|---|---|
| Travel Reguler | Antar kota terjadwal, door-to-door | 0812-2668-8882 (Travel) |
| Carter Pariwisata | Sewa unit untuk wisata | 0878-6218-7796 (Carter) |
| Carter Ziarah | Ziarah rombongan | 0878-6218-7796 (Carter) |
| Antar Jemput | Bandara, stasiun, pelabuhan | 0812-2668-8882 (Travel) |
| Acara Dinas | Perjalanan kerja, meeting | 0812-2668-8882 (Travel) |
| Wedding Car | Unit premium + dekorasi | 0878-6218-7796 (Carter) |
| Tour Wisata | Paket Bali, Bromo, Ijen, Malang | 0878-6218-7796 (Carter) |

Setiap kartu layanan juga bisa diklik → langsung WhatsApp.

### 3.7 Armada

Kartu-kartu kendaraan. Tiap kartu menampilkan foto mobil, kelas (Premium / Van / MPV / Bus Mini), kapasitas penumpang, dan **label status** di kiri bawah foto:

| Label | Warna | Arti |
|---|---|---|
| **Tersedia** | Hijau | Siap dipakai |
| **Penuh** | Merah | Kursi habis |
| **Perawatan** | Kuning | Sedang di bengkel |

Status ini kamu atur sendiri di **Panel Admin → Armada**. Bisa diklik → WhatsApp nomor Carter.

### 3.8 Keunggulan

4 kotak: *Armada Premium · Driver Profesional · On Time · Door to Door*.

### 3.9 Testimoni

Ulasan pelanggan. **Isinya diambil dari Panel Admin → Testimoni**, jadi kamu bisa menambah/mengubah sendiri.

### 3.10 Kontak (kotak kuning)

Judul *"Butuh Bantuan Booking?"* dengan dua tombol besar:
- **0812-2668-8882 · Travel** (hitam)
- **0878-6218-7796 · Carter** (garis hitam)

### 3.11 Footer

Alamat: *Jl. Irian Jaya P-06, Pasar Mimbaan Baru, Situbondo*. Ada juga daftar Rute Populer, daftar Layanan, dan nomor kontak.

### 3.12 Tombol WhatsApp melayang

Bulatan hijau di **pojok kanan bawah**, selalu ikut saat halaman digulir. Klik → chat WA Travel.

---

## 4. Cara pelanggan memesan (kotak pemesanan)

Ini inti dari website. Kotaknya ada di bagian atas halaman (sebelah kanan judul besar).

### 4.1 Isi kotak dari atas ke bawah

1. **Pilih tipe perjalanan**
   - **Sekali Jalan** — harga normal
   - **Pulang Pergi ×2** — harga otomatis dikali 2

2. **Kotak Dari / Ke**
   - Ada tombol bulat dengan ikon panah di tengah.
   - Klik tombol itu untuk **membalik arah** (Situbondo→Surabaya jadi Surabaya→Situbondo).

3. **Pilih kota tujuan**
   - 3 tombol: **Surabaya / Malang / Jember** (masing-masing menampilkan harganya).
   - Klik salah satu. Tombol yang aktif berwarna emas.

4. **Nama** — isi nama pemesan.

5. **No. HP** — isi nomor WhatsApp yang aktif. Ini penting karena admin akan menghubungi lewat nomor ini.

6. **Tanggal** — pilih tanggal keberangkatan.
   - Tanggal yang sudah lewat **tidak bisa dipilih** (dikunci otomatis oleh sistem).
   - Bisa pesan untuk hari ini juga.

7. **Penumpang** — tombol **−** dan **+**. Minimal 1, maksimal 40 di tampilan website.

8. **Kotak harga** — otomatis menghitung. Contoh: *Rp 180.000 × 2* lalu total besar di kanan.

9. **Tombol kuning "Pesan Sekarang"**

### 4.2 Apa yang terjadi setelah klik "Pesan Sekarang"

1. Tombol berubah jadi **"Memproses..."** sebentar.
2. Sistem menyimpan pesanan ke database.
3. Muncul tulisan hijau, contoh:
   **"Booking SM88-261110-A1B2C3 tersimpan — total Rp 180.000."**
4. Tombol berganti jadi dua:
   - **Lanjut ke WhatsApp** (hijau) — klik untuk lanjut chat konfirmasi
   - **Pesan lagi** — untuk memesan tiket tambahan

> **Penting:** pesanan **sudah tercatat** begitu tulisan hijau muncul. Klik WhatsApp hanya untuk konfirmasi pembayaran/jemput. Kalau pelanggan tidak klik WhatsApp, pesanan tetap masuk ke Panel Admin.

### 4.3 Kalau ada yang salah

Pesan merah muncul di bawah kotak harga, contohnya:
- *"Isi tanggal berangkat."*
- *"Isi nama & nomor HP."*
- *"Gagal simpan booking: Tanggal berangkat tidak boleh sebelum hari ini."*

Perbaiki kolom yang disebut, klik lagi.

### 4.4 Kode booking

Formatnya: `SM88-` + tanggal + 6 huruf acak.
Contoh `SM88-261110-A1B2C3` = dibuat 10 November 2026.

**Kode ini yang dipakai saat pelanggan menghubungi admin.** Minta pelanggan menyebutkan kodenya.

---

## 5. Mengelola pesanan (menu Booking)

### 5.1 Melihat pesanan

Klik **Booking** di panel kiri. Tabel berisi:

| Kolom | Arti |
|---|---|
| **Kode** | Kode booking + tanggal/jam pesanan dibuat |
| **Pelanggan** | Nama + nomor HP |
| **Rute / Unit** | Jurusan + tipe (sekali jalan / pulang pergi) |
| **Tanggal** | Tanggal keberangkatan |
| **Pax** | Jumlah penumpang |
| **Total** | Total harga |
| **Status** | Kondisi pesanan (bisa diubah) |

### 5.2 Arti status

| Status | Arti | Kapan dipakai |
|---|---|---|
| **pending** | Baru masuk, belum diproses | Otomatis saat pelanggan pesan di website |
| **confirmed** | Sudah dikonfirmasi & dibayar | Setelah kamu terima pembayaran |
| **onboard** | Penumpang sedang di perjalanan | Saat penjemputan/hari berangkat |
| **done** | Selesai | Setelah penumpang tiba |
| **cancelled** | Dibatalkan | Kalau pelanggan batal atau tidak jadi |

### 5.3 Mengubah status

Di kolom Status ada kotak pilihan. **Klik kotaknya, pilih status baru — langsung tersimpan otomatis.** Tidak perlu klik tombol simpan.

### 5.4 Mencari pesanan

Ada kotak pencarian di atas tabel:
- Ketik **nama** pelanggan, **nomor HP**, atau **kode booking** → klik **Filter**
- Atau pilih **status** dari dropdown → klik **Filter**

Berguna kalau pelanggan menelepon dan menyebut kode bookingnya.

### 5.5 Menambah pesanan manual

Untuk pelanggan yang memesan lewat telepon / datang langsung:

1. Klik tulisan **"+ Tambah Booking"** di atas tabel.
2. Isi formulir: nama, HP, rute, armada (opsional), tipe, tanggal, pax, status, catatan.
3. Klik **Simpan**.

Kode booking dibuat otomatis.

### 5.6 Menghapus pesanan

Klik tombol **Hapus** di ujung kanan baris → muncul konfirmasi → klik OK.

> **Saran:** daripada menghapus, lebih baik ubah status jadi **cancelled**. Data tetap tersimpan sebagai riwayat, dan angka pendapatan tidak terpengaruh.

### 5.7 Paginasi

Kalau pesanan lebih dari 15, akan ada tombol nomor halaman di bawah tabel.

---

## 6. Mengelola rute & harga (menu Rute)

### 6.1 Melihat rute

Klik **Rute**. Tabel menampilkan: jurusan, harga, harga PP, durasi, badge, status aktif.

**Klik baris mana pun** untuk membuka formulir edit.

### 6.2 Menambah rute baru

1. Klik **"+ Tambah Rute"**.
2. Isi:

| Kolom | Isi | Contoh |
|---|---|---|
| **Asal** | Kota asal | Situbondo |
| **Tujuan** | Kota tujuan | Banyuwangi |
| **Durasi** | Perkiraan waktu | 2 jam |
| **Harga (Rp)** | Harga sekali jalan **per orang**, tulis angka saja | 90000 |
| **Harga Pulang-Pergi (Rp)** | Harga PP **per orang** | 180000 |
| **Badge** | Label kecil di kartu (boleh kosong) | Terlaris / BARU / Promo |
| **Rute aktif** | Centang supaya tampil di website | ✔ |

3. Klik **Simpan**.

### 6.3 Mengubah harga

Klik rute → ubah angka di **Harga (Rp)** → klik **Update**.

**Perubahan langsung tampil di website** dalam hitungan detik (mungkin perlu refresh halaman).

### 6.4 Menyembunyikan rute tanpa menghapus

Hilangkan centang **Rute aktif** → **Update**.

Rute hilang dari website, tapi data & riwayat pesanannya tetap utuh.

### 6.5 Menghapus rute

Klik **Hapus** di formulir. Pesanan lama yang memakai rute ini **tidak ikut terhapus** — hanya kolom rutenya jadi kosong.

> **Saran:** untuk rute yang tidak dijual lagi, lebih aman **hilangkan centang "Rute aktif"** saja.

### 6.6 Catatan penting soal harga

Harga yang ditulis adalah **harga per orang**. Kalau rute Surabaya diisi `180000`:
- 1 orang sekali jalan = Rp 180.000
- 2 orang sekali jalan = Rp 360.000
- 2 orang pulang pergi = Rp 720.000

Sistem menghitung sendiri, kamu tidak perlu hitung manual.

---

## 7. Mengelola armada (menu Armada)

### 7.1 Melihat daftar armada

Klik **Armada**. Di paling atas ada **ringkasan ketersediaan** — 4 kotak angka:

| Kotak | Arti |
|---|---|
| **Tersedia** | Unit siap jalan |
| **Penuh** | Kursi sudah habis / tidak bisa dipesan |
| **Perawatan** | Unit masuk bengkel |
| **Total Unit** | Jumlah seluruh unit |

Angka-angka ini **menghitung sendiri** setiap kali kamu mengubah status unit.

Di bawahnya ada tabel: nama unit, kelas, kapasitas, status, harga/hari, aktif. Klik baris untuk membuka formulir edit.

> **Perhatian:** angka ringkasan menghitung **semua unit**, termasuk yang tidak aktif. Kalau ada unit yang disembunyikan dari website (tidak aktif), unit itu **tetap ikut dihitung**. Jadi kalau angka terasa lebih besar dari yang tampil di website, cek kolom **Aktif**.

### 7.2 Arti status armada

| Status | Arti | Warna di website | Kapan dipakai |
|---|---|---|---|
| **Tersedia** | Unit siap dipakai, kursi masih ada | Hijau | Kondisi normal |
| **Penuh** | Kursi sudah habis untuk keberangkatan yang berjalan | Merah | Saat semua kursi terjual |
| **Perawatan** | Unit sedang servis / bengkel | Kuning | Saat mobil tidak bisa dipakai |

Status ini **muncul sebagai label di kartu armada pada website**, jadi calon penumpang tahu kondisi unit sebelum menghubungi.

### 7.3 Mengubah status dengan cepat

Di tabel, kolom **Status** berisi kotak pilihan.

**Klik kotaknya → pilih status baru → langsung tersimpan otomatis.** Tidak perlu klik tombol Update, tidak perlu buka formulir.

Cara ini paling sering dipakai — misalnya pagi hari semua unit masih *Tersedia*, lalu siang ada yang penuh, tinggal klik dan ganti.

> Notifikasi hijau akan muncul di atas: *"Toyota Hiace Premio → Penuh."*

### 7.4 Penting soal status "Penuh"

Status **Penuh** adalah **tanda manual, bukan sistem otomatis**.

Artinya: sistem **tidak** menghitung sendiri berapa kursi yang sudah terjual. Kamu yang menentukan kapan sebuah unit dianggap penuh.

**Alur yang disarankan:**
1. Pagi: cek menu **Booking** → lihat pesanan hari ini
2. Kalau sebuah unit sudah terisi penuh, ubah statusnya jadi **Penuh**
3. Besok pagi, kembalikan ke **Tersedia**

> Kenapa manual? Karena sistem pemesanan saat ini **tidak mengikat pesanan ke unit tertentu** — pelanggan memilih rute, bukan memilih mobil. Jadi angka "sisa kursi" tidak bisa dihitung otomatis. Ini keterbatasan yang perlu kamu tahu (lihat bagian 12.2).

### 7.5 Menambah unit

1. Klik **"+ Tambah Armada"**.
2. Isi:

| Kolom | Keterangan |
|---|---|
| **Nama Unit** | Contoh: Toyota Hiace Premio |
| **Kelas** | Contoh: Premium Van, MPV, Bus Mini |
| **Kapasitas (pax)** | Jumlah kursi |
| **Status Ketersediaan** | Tersedia / Penuh / Perawatan |
| **Harga / Hari (Rp)** | Boleh dikosongkan kalau tidak disewakan harian |
| **Upload Gambar** | Foto mobil. Format JPG/PNG/WEBP, maksimal 4 MB |
| **atau Path Gambar** | Untuk tenaga teknis — biasanya tidak perlu diisi |
| **Unit aktif** | Centang supaya tampil di website |

3. Klik **Simpan**.

### 7.6 Bug yang sudah diperbaiki (penting untuk kamu tahu)

Sebelumnya, **mengubah nama unit** membuat sistem membuat "alamat" unit baru. Akibatnya unit bisa **terduplikasi** dan **fotonya hilang**. Sudah diperbaiki: nama boleh diganti berkali-kali, unit tetap satu, foto tetap aman.

### 7.7 Soal foto armada

**Cara paling mudah:** pakai tombol **Upload Gambar** dan pilih foto dari HP/komputer.

Saran foto:
- Latar belakang polos atau terang
- Mobil terlihat utuh (tidak terpotong)
- Ukuran lebar minimal 1000 piksel
- Foto landscape (mendatar), bukan portrait

Kalau tidak ada foto, website otomatis menampilkan kotak abu-abu dengan ikon koper. Tidak error, hanya kurang menarik.

### 7.8 Mengganti foto

Klik unit → pilih file baru di **Upload Gambar** → **Update**. Foto lama otomatis terhapus.

### 7.9 Menghapus foto

Klik unit → centang **Hapus gambar** → **Update**.

### 7.10 Menonaktifkan unit

Hilangkan centang **Unit aktif** → **Update**. Unit hilang dari website, data tetap ada.

---

## 8. Mengelola testimoni (menu Testimoni)

### 8.1 Kenapa penting

Testimoni adalah **bukti sosial**. Calon penumpang lebih percaya kalau melihat pengalaman orang lain.

### 8.2 Menambah testimoni

1. Klik **"+ Tambah Testimoni"**.
2. Isi:

| Kolom | Keterangan |
|---|---|
| **Nama** | Nama penumpang. Boleh disingkat (misal "Budi S.") |
| **Keterangan** | Contoh: Penumpang Surabaya, Rombongan ziarah |
| **Rating** | 1–5 |
| **Isi Testimoni** | Kutipan pengalaman mereka |
| **Tampilkan** | Centang supaya muncul di website |

3. Klik **Simpan**.

Testimoni **langsung tampil di website**.

### 8.3 Tips menulis testimoni

Ambil dari chat WhatsApp pelanggan. Pilih yang menyebut hal spesifik, misalnya:
- "Tepat waktu"
- "Mobilnya bersih"
- "Drivernya ramah"

Kalau pelanggan setuju, tulis namanya. Kalau tidak, tulis inisial saja.

### 8.4 Menyembunyikan testimoni

Hilangkan centang **Tampilkan** → **Update**.

### 8.5 Menghapus

Klik **Hapus** di formulir edit.

> **Saran:** jangan tampilkan lebih dari 6 testimoni sekaligus — website jadi panjang. Ganti-ganti secara berkala.

---

## 9. Mengelola akun (menu User)

### 9.1 Kapan perlu?

Kalau ada karyawan yang perlu mengurus pesanan tanpa boleh mengubah harga.

### 9.2 Role

| Role | Bisa apa |
|---|---|
| **admin** | Semua: pesanan, harga, armada, testimoni, user |
| **staff** | Saat ini **sama saja** dengan admin — belum ada pembatasan menu |

> Catatan jujur: pembatasan hak akses per-menu **belum dibuat**. Kalau kamu memberi akses staff, mereka bisa mengubah harga juga. Sementara ini, **beri akses hanya ke orang yang kamu percaya**.

### 9.3 Menambah user

1. Klik **"+ Tambah User"**.
2. Isi nama, email, HP, role, dan password (**minimal 8 karakter**).
3. Klik **Simpan**.

### 9.4 Ganti password

Klik nama user → isi **Password** baru → **Update**.

Kalau kolom password dikosongkan, password lama tetap dipakai.

### 9.5 Menghapus user

Klik **Hapus**. **Tidak bisa menghapus akun sendiri** (muncul pesan error) — ini pengaman supaya kamu tidak mengunci diri sendiri.

---

## 10. Membaca Dashboard

Kotak angka di paling atas:

| Kotak | Arti |
|---|---|
| **Booking** | Total seluruh pesanan yang pernah masuk |
| **Pending** | Yang belum kamu proses |
| **Confirmed** | Yang sudah dikonfirmasi |
| **Pendapatan** | Jumlah total harga dari pesanan berstatus *confirmed* + *done* |

> **Penting soal Pendapatan:** angka ini adalah **nilai pesanan**, **bukan uang yang sudah masuk rekening**. Sistem tidak terhubung ke bank/e-wallet. Konfirmasi pembayaran tetap manual — karena itu, ubah status ke **confirmed** hanya setelah uang benar-benar diterima.

Di bawahnya ada jumlah User, Rute, Armada, Testimoni. Lalu tabel **"Booking Terbaru"** berisi 10 pesanan terakhir.

### 10.1 Rutinitas harian yang disarankan

**Pagi:**
1. Buka Dashboard → lihat angka **Pending**
2. Buka menu Booking → filter status **pending**
3. Hubungi setiap pelanggan lewat WhatsApp
4. Buka menu **Armada** → perbarui status unit (Tersedia / Penuh / Perawatan)

**Setelah pelanggan bayar:**
- Ubah status → **confirmed**

**Hari keberangkatan:**
- Ubah status → **onboard**

**Setelah penumpang tiba:**
- Ubah status → **done**

**Kalau batal:**
- Ubah status → **cancelled** (jangan dihapus)

---

## 11. Alur lengkap dari pesanan sampai selesai

```
Pelanggan buka website
        ↓
Isi kotak pemesanan (nama, HP, rute, tanggal, pax)
        ↓
Klik "Pesan Sekarang"
        ↓
Sistem simpan → pelanggan lihat kode booking
        ↓
Pelanggan klik "Lanjut ke WhatsApp"
        ↓
Chat masuk ke WA 0812-2668-8882 dengan rincian pesanan
        ↓
─────── Kamu (admin) ───────
Buka Panel Admin → Booking
Lihat pesanan baru (status: pending)
        ↓
Hubungi pelanggan, sepakati pembayaran & titik jemput
        ↓
Uang masuk → ubah status: confirmed
        ↓
Hari H → ubah status: onboard
        ↓
Penumpang tiba → ubah status: done
        ↓
Minta testimoni → tambahkan di menu Testimoni
```

---

## 12. Hal yang perlu diketahui (jujur, bukan menakut-nakuti)

### 12.1 Yang sudah berfungsi penuh

✅ Website tampil rapi di HP, tablet, laptop
✅ Pemesanan tersimpan ke database sungguhan
✅ Panel admin bisa dari HP
✅ Ubah harga / rute / armada / testimoni dari panel, langsung tampil di website
✅ Upload foto armada
✅ Pencarian & filter pesanan
✅ Kode booking unik otomatis
✅ Tanggal lampau ditolak otomatis (zona waktu Asia/Jakarta)
✅ Pesan error berbahasa Indonesia

### 12.2 Yang belum ada

| Belum ada | Artinya |
|---|---|
| **Pembayaran online** | Belum ada transfer/QRIS otomatis. Pembayaran tetap manual, dikonfirmasi lewat WhatsApp |
| **E-tiket PDF** | Pelanggan tidak menerima file tiket. Kode booking + chat WA jadi bukti sementara |
| **Notifikasi otomatis** | Tidak ada WhatsApp/SMS otomatis ke pelanggan saat status berubah. Kamu harus hubungi manual |
| **Cek kursi otomatis** | Sistem **tidak** menghitung sisa kursi. Status armada (Tersedia/Penuh) diisi **manual** oleh kamu. Lihat §7.4 |
| **Hak akses per-menu** | Staff bisa mengubah harga seperti admin |
| **Laporan keuangan** | Tidak ada rekap harian/bulanan, tidak ada export Excel |
| **Multi-bahasa** | Hanya Bahasa Indonesia |
| **Blog / artikel SEO** | Belum ada |

### 12.3 Yang harus kamu jaga sendiri

**Password admin.** Sudah disebut di bagian 2 — segera ganti.

**Kode & akun hosting.** Website ini berjalan di dua layanan berbayar/gratis: Vercel (website) dan Railway (panel admin + database). Kalau langganannya berhenti, website mati. Simpan akses akunnya baik-baik.

**Backup data.** Saat ini **belum ada backup otomatis**. Kalau database rusak, data pesanan bisa hilang. Untuk volume pesanan kecil ini masih wajar, tapi kalau sudah ramai, minta tenaga teknis memasang backup harian.

---

## 13. Pertanyaan yang sering muncul

**T: Pelanggan bilang sudah pesan tapi tidak ada di Panel Admin?**
J: Minta kode bookingnya. Kalau tidak ada kode, berarti proses simpan gagal (biasanya karena koneksi internet putus). Minta pelanggan pesan ulang. Kalau berulang, catat nama & waktu kejadian, laporkan ke tenaga teknis.

**T: Kenapa tanggal tertentu tidak bisa dipilih?**
J: Tanggal yang sudah lewat otomatis dikunci. Kalau pelanggan ingin tanggal lampau (misal untuk laporan), tambahkan manual lewat **"+ Tambah Booking"** di panel admin.

**T: Bisa pesan untuk 1 tahun ke depan?**
J: Bisa, tidak ada batas atas.

**T: Kalau pelanggan pesan 50 orang?**
J: Tombol **+** di website berhenti di 40. Untuk rombongan besar, suruh hubungi WhatsApp Carter, atau input manual di panel admin (maksimal 99).

**T: Apakah harga di website otomatis berubah kalau saya ubah di panel?**
J: Ya. Refresh halaman website untuk melihat hasilnya.

**T: Website bisa diakses lewat domain sendiri (misal sm88trans.id)?**
J: Belum. Saat ini masih memakai alamat bawaan Vercel. Untuk domain sendiri perlu pembelian domain + pengaturan teknis.

**T: Kenapa foto armada tidak muncul padahal sudah upload?**
J: Pastikan setelah pilih file, kamu klik tombol **Update/Simpan**. Kalau masih tidak muncul, coba refresh dengan Ctrl+F5. Kalau tetap gagal, laporkan.

**T: Apakah data pelanggan aman?**
J: Data tersimpan di database dengan akses terbatas (harus login). Namun belum ada enkripsi khusus untuk nomor HP, dan belum ada backup otomatis. Jangan bagikan akses panel ke sembarang orang.

**T: Pelanggan tidak punya WhatsApp?**
J: Arahkan menelepon langsung ke 0812-2668-8882. Pesanan tetap bisa diinput admin.

**T: Ada tulisan "Penuh" di kartu armada, apakah otomatis?**
J: Tidak. Itu **tanda manual** dari kamu di Panel Admin → Armada. Sistem belum menghitung sisa kursi sendiri. Kalau lupa mengubahnya, status akan tetap "Penuh" sampai kamu ganti.

**T: Apa bedanya "Penuh" dengan "Tidak aktif"?**
J:
- **Penuh (status)** — unit masih tampil di website, hanya diberi label merah. Pelanggan tetap bisa menghubungi.
- **Tidak aktif** — unit **hilang sama sekali** dari website.

Pakai **Penuh** untuk kondisi sementara (kursi habis hari ini). Pakai **Tidak aktif** kalau unit benar-benar tidak ditawarkan lagi.

**T: Kenapa angka "Total Unit" di ringkasan berbeda dengan jumlah kartu di website?**
J: Ringkasan menghitung **semua** unit termasuk yang tidak aktif. Website hanya menampilkan yang aktif.

**T: Unit terduplikat setelah saya ganti nama?**
J: Bug lama, sudah diperbaiki. Kalau masih melihat duplikat dari data lama, hapus salah satunya di menu Armada → Hapus.

**T: Kalau website error / tidak bisa dibuka?**
J: Coba refresh. Kalau tetap, tunggu 1–2 menit (server bisa "tidur" saat tidak ada kunjungan, lalu bangun sendiri). Kalau lebih dari 10 menit tetap mati, hubungi tenaga teknis.

---

## 14. Ringkasan satu halaman (untuk dihafal)

**Untuk menawarkan ke pelanggan:**
> "Buka [alamat website]. Pilih rute, isi nama & nomor WhatsApp, pilih tanggal, lalu klik Pesan Sekarang. Anda langsung dapat kode booking, dan bisa lanjut chat WhatsApp untuk konfirmasi."

**Untuk kamu sebagai pengelola:**
1. **Login** ke panel admin
2. **Booking** → lihat & proses pesanan
3. **Rute** → atur harga
4. **Armada** → atur kendaraan & foto
5. **Testimoni** → tambah ulasan
6. **User** → atur akun

**Empat hal yang paling sering dipakai:**
- Ganti status pesanan → menu **Booking**, klik kotak status
- Ganti status armada → menu **Armada**, klik kotak Status
- Ubah harga → menu **Rute**, klik baris, ubah angka, Update
- Lihat pesanan baru → **Dashboard**, kotak **Pending**

---

## 15. Checklist hari pertama

- [ ] Buka website, lihat dari HP — pastikan tampilannya enak
- [ ] Login panel admin, **ganti password**
- [ ] Cek menu **Rute** — pastikan harga & durasi sudah benar
- [ ] Cek menu **Armada** — pastikan nama, kapasitas, dan foto sudah benar
- [ ] Cek status tiap unit (Tersedia/Penuh/Perawatan) — pastikan sesuai kondisi hari ini
- [ ] Hapus testimoni contoh (Budi/Siti/Hendra) dan ganti dengan testimoni asli
- [ ] Coba pesan 1 tiket sendiri dari website
- [ ] Cek apakah pesanan itu muncul di menu **Booking**
- [ ] Ubah statusnya jadi **cancelled** setelah selesai uji
- [ ] Simpan alamat website & alamat panel admin di catatan HP

---

*Dokumen ini dibuat berdasarkan kondisi sistem per 10 November 2026. Kalau ada fitur baru ditambahkan, bagian 12.2 perlu diperbarui.*
