const express = require('express');
const hbs = require('hbs');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const opthbs = {
    name: 'Jesus Siordia',
    title:'Curso de Node'
};

//Utiliar handlebars para renderizar paginas
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

app.use( express.static('public') );

app.get('/', function( request, response ){ 
    response.render('home', opthbs );
});

app.get('/generic', function( request, response ){ 
    response.render('generic', opthbs );
});

app.get('/elements', function( request, response ){
    response.render('elements', opthbs );
});

app.get('*', function( request, response ){
    response.sendFile(__dirname+'/public/404.html');
});

app.listen(port, () => {
    console.log('Escuchando en puerto ', port);
});
