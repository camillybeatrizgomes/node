const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const sequelize = new Sequelize('teste', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql"
})

app.get('/cadastro', function(req,res){
    res.render('form')    
})

app.post('/add', function(req,res){
    res.send("Fomulário Recebido!")
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})