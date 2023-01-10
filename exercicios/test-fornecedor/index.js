const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParse = require('body-parser')
const Loja = require('./modules/Loja')

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

app.get('/', function(req,res){
    res.render('form')    
})

app.post('/add', function(req,res){
    Loja.create({
        nome: req.body.nome
    }).then(function(){
        res.send("Formulário enviado!!!")
    }).catch(function(erro){
        res.send("Houve um erro: "+erro)
    })
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})

/*
 insert into fornecedors(id,nome) values (1,"Nike");
*/