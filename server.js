const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'src')));

const comments = [
  {
    id: 1,
    userName: 'Natalia Shevchenko',
    userPhoto: '/src/img/reviews-img/photo1.png',
    text: 'Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations.',
  },
  {
    id: 2,
    userName: 'Dmytro Nazarenko',
    userPhoto: '/src/img/reviews-img/photo2.png',
    text: 'I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.',
  },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to serve reviews.html
app.get('/reviews.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'partials', 'reviews.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
