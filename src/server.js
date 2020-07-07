const express = require("express")

const server = express()

// configurar caminhos da minha aplicacao
// pagina inicial
// req: requisiçaõ/ require
// res: resposta/ response
server.get("/", function(req, res){
    res.send("Hello World")
})


// ligar o servidor
server.listen(3000)