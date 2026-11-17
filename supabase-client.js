// Konfigurasi Database Supabase CBT SMAN 1 Tebing Tinggi
const supabaseUrl = 'https://zbdfhldbllsupvoztsnw.supabase.co';
const supabaseKey = 'sb_publishable_HrrZ9o1tt3gx4zliaUcl2w_PO_4X9yz';

// Inisialisasi klien database menggunakan 'db'
const db = window.supabase.createClient(supabaseUrl, supabaseKey);

console.log("Koneksi ke Supabase berhasil disiapkan dengan Publishable Key!");