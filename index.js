const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

// Налаштовуємо публічну папку для CSS
app.use(express.static('public'));

// Головна сторінка
app.get('/', (req, res) => {
    res.render('index', { title: 'Головна' });
});

// Сторінка "Про нас"
app.get('/about', (req, res) => {
    res.render('about', { title: 'Про нас' });
});


app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Контакти' });
});

app.listen(port, () => {
    console.log(`Сайт працює на http://localhost:${port}`);
});
console.log('Server Started at [PORT}')
