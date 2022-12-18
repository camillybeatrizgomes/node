const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.send("Seja bem vindo ao meu App!")
})

app.get("/oi/:nome/:idade", function(req,res){
    res.send("<h1> Oi "+req.params.nome+"</h1>"+"<h2> Tem "+req.params.idade+" Anos </h2>")
})
// URL de acesso = http://localhost:8081/oi/camilly/19

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})
