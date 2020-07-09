const express = require("express")

const server = express()
// pegar o banco de dados
const db = require("./database/db.js")
// configurar pasta publica
server.use(express.static("public"))
// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))
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

    // req.query: Query Strings da nossa url
    // console.log(req.query)

    // inserir dados no banco de dados 

    // 2. inserir dados na tabela
    const query = `
           INSERT INTO places (
                image, 
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES ( ?, ?, ?, ?, ?, ?, ? );
    `
    const values = [ 
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items
    ]
    
    function afterInsertData(error){
        if(error)
            return console.log(error)
        
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.send("ok")
    }
    
    db.run(query, values, afterInsertData)

    //  res.sendFile(__dirname + "/views/create-point.html")
    // return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    
    // req.body: O corpo do nosso formulario
    console.log(req.body)
    
    return res.send("ok")
})


server.get("/search", (req, res) => {

    // pegar od dados do banco de dados
    function getData(error, rows){
        if(error)
            return console.log(error)

        // mostrar a pagina html com os dados do banco de dados
        const total = rows.length
        return res.render("search-results.html", { places: rows, total: total })
    }

    db.all(`SELECT * FROM places`, getData)
})

// ligar o servidor
server.listen(3000)