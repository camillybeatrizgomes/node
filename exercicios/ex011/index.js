const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParse = require('body-parser')
const Sequelize = require('sequelize')
const Post = require('./modules/Post')

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

app.get('/', function(req,res){
    Post.findAll({order: [['id','DESC']]}).then(function (posts){
        res.render('home',{posts: posts})
    })
})

app.get('/cadastro', function(req,res){
    res.render('form')    
})

app.post('/add', function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(){
        res.send("Houve um erro: "+erro)
    })

    //res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
})

// deletar posts

app.get('/deletar/:id', function (req,res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem deletada com sucesso!")
    }).catch(function(erro){
        res.send("Está postagem não existe!")
    })

})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})
