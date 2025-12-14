// Menyapa pengguna
alert('Selamat datang di Website Profil UMKM Seblak Jeletot!');

// Menampilkan nama UMKM
const namaUMKM = 'Seblak Jeletot';
console.log('Nama UMKM:', namaUMKM);

// Variabel jumlah produk
let jumlahProduk = 3;
console.log('Jumlah produk awal:', jumlahProduk);

// Menambah produk baru
jumlahProduk += 2;
console.log('Setelah menambah produk baru:', jumlahProduk);

// Variabel lain: produk makanan & minuman (contoh kategori)
let produkMakanan = 5;
let totalProduk = produkMakanan;

console.log('Jumlah produk makanan:', produkMakanan);
console.log('Total semua produk:', totalProduk);

// Daftar produk UMKM Seblak Jeletot
const daftarProduk = [
    { nama: 'Seblak Ceker', harga: 12000 },
    { nama: 'Seblak Cuanki', harga: 10000 },
    { nama: 'Seblak Sosis', harga: 13000 },
    { nama: 'Seblak Campur', harga: 15000 },
    { nama: 'Seblak Original', harga: 8000 }
];

// Menampilkan daftar produk di console
console.log('Daftar produk UMKM Seblak Jeletot:');
daftarProduk.forEach((produk, index) => {
    console.log(`${index + 1}. ${produk.nama} - Rp${produk.harga.toLocaleString('id-ID')}`);
});

// Pesan penutup
alert(`Terimakasih telah mengunjungi ${namaUMKM}! Silakan cek daftar produk di console.`);
