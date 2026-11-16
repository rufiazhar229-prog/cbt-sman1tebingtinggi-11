# CBT SMAN 1 Tebing Tinggi — Tahap 1

## Sebelum mengunggah halaman HTML

1. Cadangkan database Supabase.
2. Buka **Supabase SQL Editor**.
3. Jalankan `supabase/migrations/001_exam_attempts_and_integrity.sql` satu kali.
4. Uji dengan satu sesi dan satu akun siswa sebelum digunakan pada ujian sebenarnya.

Migrasi tidak menghapus sesi, soal, jawaban, atau nilai. Ia menambah status percobaan ujian, arsip sesi, serta fungsi `mulai_atau_lanjutkan_ujian`.

Jika pernah menjalankan versi migrasi awal yang gagal pada indeks `jawaban_siswa_peserta_soal_unik`, gunakan file migrasi pada paket revisi ini dan jalankan kembali. File revisi tidak memaksa indeks tersebut sehingga riwayat jawaban lama tetap dipertahankan.

## Migrasi jadwal dan akses token

Setelah `001` berhasil, jalankan juga `supabase/migrations/002_akses_ruang_dan_durasi.sql`. Migrasi ini memperbaiki akses token serta memisahkan jadwal sesi dari durasi menjawab.

## Perubahan perilaku

- Siswa login dengan NISN dan password, lalu memasukkan token pada `lobi_ujian.html`.
- Token yang valid memulai satu percobaan ujian saja. Status `terkirim`, `waktu_habis`, atau `diblokir` tidak dapat masuk lagi.
- Admin dapat memakai tombol **Izinkan Lanjut** dari monitoring tanpa menghapus jawaban maupun pelanggaran.
- Esai dibaca dari `tipe_soal` terlebih dahulu dan textarea jawaban ditampilkan.
- Sesi diarsipkan, bukan dihapus.
- Guru diarahkan ke dashboard guru. Halaman admin utama menolak peran guru pada sisi tampilan.

## Catatan keamanan penting

Proyek asal masih memakai password tabel dan publishable key dari browser. Tahap berikutnya harus memindahkan akun admin/guru ke Supabase Auth serta menerapkan RLS. Penyaringan menu JavaScript tidak menggantikan RLS; aturan database wajib dipasang sebelum sistem dipakai untuk ujian berisiko tinggi.
