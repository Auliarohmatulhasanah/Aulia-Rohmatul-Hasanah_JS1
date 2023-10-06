// Program If dan Else

var nilai = 82;

if (nilai >= 95) {
    console.log("Lulus Nilai Sempurna");
} else if (nilai >= 83) {
    console.log("Lulus Nilai Bagus");
} else if (nilai >= 72) {
    console.log("Lulus Nilai Cukup");
} else if (nilai >= 60) {
    console.log("Lulus Nilai Kurang");
} else {
    console.log("Tidak Lulus");
}


// Program Nested If
var umur = 17;
var memilikiSIM = true;

if (umur >= 18) {
    if (memilikiSIM) {
        console.log("Dapat Izin Mengemudi");
    } else {
        console.log("Harus Membuat SIM Dahulu Dek");
    }
} else {
    console.log("Tidak Cukup Umur Kau Dek");
}


// Program Switch Case

var hari = 6;
var namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Bukan Nama Hari";
        break;
}

console.log("Hari ini adalah " + namaHari);


// Program For Statement

for (var i = 0; i <= 8; i++) {
    console.log(i);
}


// Program While
var i = 0;

while (i <= 6) {
    console.log(i);
    i++;
}


// Program Do While
var angka;

do {
    angka = prompt("Masukkan angka antara 2 dan 8: ");
} while (angka < 2 || angka > 8);

console.log("Anda memasukkan angka yang valid: " + angka);


// Program Function

// Fungsi untuk menghitung Penjumlahan
function jumlah(angka1, angka2) {
    return angka1 + angka2;
}

// Memanggil fungsi jumlah
var hasiljumlah = jumlah(487, 169);
console.log("Hasil penjumlahan: " + hasiljumlah);


// Fungsi untuk menghitung Perkalian
function kali(angka1, angka2) {
    return angka1 * angka2;
}

// Memanggil fungsi kali
var hasilKali = kali(87, 35);
console.log("Hasil perkalian: " + hasilKali);

// Fungsi untuk menampilkan pesan Hallo
function Hallo(nama) {
    console.log("Hallo, " + nama + "!");
}

// Memanggil fungsi Hallo
Hallo("Deck");
