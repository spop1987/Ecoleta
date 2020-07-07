const express = require("express")

const server = express()
// configurar pasta publica
server.use(express.static("public"))


// configurar caminhos da minha aplicacao
// pagina inicial
// req: requisiçaõ/ require
// res: resposta/ response
server.get("/", function(req, res){
    // res.send("Hello World, How you doing?")
    res.sendFile(__dirname + "/views/index.html")
})
server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

// ligar o servidor
server.listen(3000)