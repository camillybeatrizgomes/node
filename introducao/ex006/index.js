const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.sendFile(__dirname +"/index.html")
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname +"/index01.html")
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})