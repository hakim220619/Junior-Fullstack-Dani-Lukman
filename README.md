
# UMKM Karya Nusantara - API Documentation

## Deskripsi
Proyek ini adalah aplikasi web sederhana menggunakan Node.js dan Express untuk memperkenalkan UMKM Karya Nusantara. Aplikasi ini menyajikan informasi mengenai buah-buahan yang dijual Andi, termasuk beberapa komentar dan fungsionalitas terkait.

## Struktur Proyek
```
/project-root
│
├── /public              # Folder untuk file statis (HTML, CSS, Gambar)
│   └── index.html      # Halaman utama
├── app.js               # File utama aplikasi Express
├── package.json         # File konfigurasi npm
└── README.md            # Dokumentasi proyek
```

## Instalasi
1. **Clone repositori ini:**
   ```bash
   git clone <repository-url>
   ```
   
2. **Masuk ke direktori proyek:**
   ```bash
   cd <project-folder>
   ```

3. **Install dependensi:**
   ```bash
   npm install
   ```

4. **Jalankan server:**
   ```bash
   npm start
   ```

5. **Akses aplikasi:**
   Buka browser dan kunjungi `http://localhost:3000`.

## Endpoint API
### 1. Daftar Buah
- **GET** `/fruits/Andi`
  - Deskripsi: Mengambil daftar nama buah yang dimiliki Andi.
  - Respons:
    ```json
    [
      "Apel",
      "Kurma",
      "apel",
      "Manggis",
      "Jeruk Bali",
      "KURMA",
      "Salak"
    ]
    ```

### 2. Wadah Buah
- **GET** `/fruits/containers`
  - Deskripsi: Mengambil jumlah wadah yang dibutuhkan dan buah yang terdapat di masing-masing wadah.
  - Respons:
    ```json
    {
      "numberOfContainers": 2,
      "containers": {
        "IMPORT": ["Apel", "Kurma", "apel", "KURMA"],
        "LOCAL": ["Manggis", "Jeruk Bali", "Salak"]
      }
    }
    ```

### 3. Total Stok Buah
- **GET** `/fruits/total-stock`
  - Deskripsi: Mengambil total stok buah yang ada di masing-masing wadah.
  - Respons:
    ```json
    {
      "IMPORT": 80,
      "LOCAL": 260
    }
    ```

### 4. Komentar Terkait Kasus
- **GET** `/fruits/comments`
  - Deskripsi: Mengambil komentar terkait data buah.
  - Respons:
    ```json
    {
      "note1": "Terdapat buah dengan nama yang sama namun penulisan berbeda (Apel, apel, KURMA, Kurma). Sebaiknya dilakukan konsistensi dalam penulisan.",
      "note2": "Ada buah yang memiliki ID yang sama (fruitId 5) seharusnya setiap buah memiliki ID unik.",
      "note3": "Memastikan struktur data terorganisir dan penamaan yang konsisten dapat memudahkan pengelolaan di masa mendatang."
    }
    ```

### 5. Total Komentar
- **GET** `/comments/total`
  - Deskripsi: Menghitung total komentar termasuk balasan komentar.
  - Respons:
    ```json
    {
      "totalComments": 7
    }
    ```

## Teknologi yang Digunakan
- **Node.js**: Runtime untuk menjalankan JavaScript di server.
- **Express**: Framework web untuk membangun aplikasi web dan API.
- **JavaScript**: Bahasa pemrograman yang digunakan.

## Kontribusi
Jika Anda ingin berkontribusi, silakan buka issue atau buat pull request.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).
