const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Parsing JSON
app.use(express.json());

// Middleware untuk menyajikan file statis seperti CSS dan gambar
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama UMKM
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Data buah Andi
let fruits = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
  },
  {
    fruitId: 6,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 7,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
  }
];

// Data komentar
let comments = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
];

// 1. Buah apa saja yang dimiliki Andi? (fruitName)
app.get('/fruits/Andi', (req, res) => {
  const fruitNames = fruits.map(fruit => fruit.fruitName);
  res.json(fruitNames);
});

// 2. Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
app.get('/fruits/containers', (req, res) => {
  const containers = fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = [];
    }
    acc[fruit.fruitType].push(fruit.fruitName);
    return acc;
  }, {});

  res.json({
    numberOfContainers: Object.keys(containers).length,
    containers: containers
  });
});

// 3. Berapa total stock buah yang ada di masing-masing wadah?
app.get('/fruits/total-stock', (req, res) => {
  const totalStock = fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = 0;
    }
    acc[fruit.fruitType] += fruit.stock;
    return acc;
  }, {});

  res.json(totalStock);
});

// 4. Komentar terkait kasus di atas
app.get('/fruits/comments', (req, res) => {
  const comments = {
    note1: 'Terdapat buah dengan nama yang sama namun penulisan berbeda (Apel, apel, KURMA, Kurma). Sebaiknya dilakukan konsistensi dalam penulisan.',
    note2: 'Ada buah yang memiliki ID yang sama (fruitId 5) seharusnya setiap buah memiliki ID unik.',
    note3: 'Memastikan struktur data terorganisir dan penamaan yang konsisten dapat memudahkan pengelolaan di masa mendatang.'
  };

  res.json(comments);
});

// 5. Fungsi untuk menghitung total komentar termasuk balasan komentar
function countComments(comments) {
  let total = 0;

  function recursiveCount(commentsList) {
    commentsList.forEach(comment => {
      total++; // Hitung komentar utama
      if (comment.replies) {
        recursiveCount(comment.replies); // Hitung balasan komentar
      }
    });
  }

  recursiveCount(comments); // Panggil fungsi rekursif pertama kali
  return total;
}

// Endpoint untuk menghitung total komentar
app.get('/comments/total', (req, res) => {
  const totalComments = countComments(comments);
  res.json({ totalComments });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
