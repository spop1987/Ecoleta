const express = require("express")

const server = express()

// pegar o banco de dados
const db = require("./database/db.js")

// configurar pasta publica
server.use(express.static("public"))

// utilizando template engine: sem cache em quanto estou desenvolvendo
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicacao
// pagina inicial
// req: requisiçaõ/ require
// res: resposta/ response
server.get("/", function(req, res){
    // res.send("Hello World, How you doing?")
    // res.sendFile(__dirname + "/views/index.html")
    // Após instalar nunjucks, agora vou utilizar o render
    return res.render("index.html")
})
server.get("/create-point", (req, res) => {
    //  res.sendFile(__dirname + "/views/create-point.html")
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// ligar o servidor
server.listen(3000)