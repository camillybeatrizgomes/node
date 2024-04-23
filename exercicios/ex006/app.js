// Importar o express
var express = require('express')

// Importar o BodyParser
var bodyParser = require('body-parser')

// App
var app = express()

// Configurar o BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html')
})

app.post('/receber', function(req, res){
    res.write('Nome informado: '+ req.body.nome)
    res.end()
})

// Criando o servidor
app.listen(8080)