const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParse = require('body-parser')
const Sequelize = require('sequelize')
const post = require('./index2')

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

const sequelize = new Sequelize('postapp', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql",
    query: {raw:true}
})

app.get('/', function(req,res){
    post.findAll().then(function (posts){
        res.render('home',{posts: post})
    })
    res.render('home')
})

app.get('/cadastro', function(req,res){
    res.render('form')    
})

app.post('/add', function(req,res){
    post.create({
        titulos: req.body.titulos,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(){
        res.send("Houve um erro: "+erro)
    })

    //res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})
