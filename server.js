const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// Роздача статичних файлів з папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Роздача файлів зі стилями, скриптами та HTML з 'partials'
app.use('/html', express.static(path.join(__dirname, '/src/partials/reviews.html')));
app.use('/js', express.static(path.join(__dirname, '/src/js/reviews.js')));
app.use('/css', express.static(path.join(__dirname, '/src/css/reviews.css'))); // Додаємо обслуговування CSS

// Маршрут для головної сторінки (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут для сторінки відгуків (reviews.html)
app.get('/reviews', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/partials/reviews.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Running ${PORT}`);
});