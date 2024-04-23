// Importar o Express
var express = require('express')

// Acesso as funcionalidades do Express
var app = express()

// Especificar o local do CSS e da imagem
app.use(express.static(__dirname + '/publico'))

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html')
})

// Criando o servidor
app.listen(8080)