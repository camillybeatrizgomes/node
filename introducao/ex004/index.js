var http = require('http')

http.createServer(function (req, res){
    res.end("Funcionouuuu!!")
}).listen(8081)

// endereço para acessar na web: http://localhost:8081/
console.log("Servidor funcionando!!!")