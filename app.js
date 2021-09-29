const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home', { title : 'Home' });
})
app.get('/about', (req, res) => {
    res.render('about', { title : 'About' });
})
app.get('/about-me', (req, res) => {
    res.status(301).redirect('/about');
})
app.get('/create', (req, res) => {
    res.render('create', { title : 'Create' });
})
app.use((req, res) => {
    res.status(404).render('404', { title : '404' });
})

app.listen(3000, () => {
    console.log('app running successfully')
})