// Konfigurasi Database Supabase CBT SMAN 1 Tebing Tinggi
const supabaseUrl = 'https://jlgssjqexsibktddwxot.supabase.co';
const supabaseKey = 'sb_publishable__MW5455QqWnKoycMMkLCcg_OqY47I9T';

// Inisialisasi klien database menggunakan 'db'
const db = window.supabase.createClient(supabaseUrl, supabaseKey);

console.log("Koneksi ke Supabase berhasil disiapkan dengan Publishable Key!");