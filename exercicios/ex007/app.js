// Importando o Express e o Express-handlebars
var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

// EXTRA 
app.use(express.static('public'))

// Configurando arquivos handlebars
app.engine('handlebars', exphbs({defaultLayout : 'principal'}))
app.set('view engine', 'handlebars')

// Criando rotas
app.get('/', function (req, res){
    let pessoas = [
        {"nome": "Camilly", "idade": 20},
        {"nome": "Viviane", "idade": 42}
    ]
    res.render('inicio', {gostandoDeNode: true, dados: pessoas})
})

app.get('/sobre', function (req, res){
    res.render('sobre')
})

// Servidor
app.listen(8080)