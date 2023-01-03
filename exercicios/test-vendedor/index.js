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
        nome: req.body.nome,
        data: req.body.data,
        nome_da_loja: req.body.nome_da_loja,
        cnpj: req.body.cnpj,
        email: req.body.email,
        senha: req.body.senha,
        confirSenha: req.body.confirSenha
    }).then(function(){
        res.send("Formulário enviado!!!")
    }).catch(function(erro){
        res.send("Houve um erro: "+erro)
    })
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})