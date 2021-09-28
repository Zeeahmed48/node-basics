const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})
app.get('/create', (req, res) => {
    res.render('create');
})
app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(3000, () => {
    console.log('app running successfully')
})