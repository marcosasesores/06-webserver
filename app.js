const express = require('express')
var hbs = require('hbs');

const app = express();
const port = 8080;


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando herrera',
        titulo: 'curso node'
    });
});
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', ( req,res) => {
    res.sendFile(__dirname + '/public/404.html'); // necesitamos poner la ruta absoluita pq sino da err
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.listen(8080)
