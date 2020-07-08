// Importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose() // me entrega informações

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    // Com comandos sql:
    
    // 1. criar uma tabela
    db.run(`
            CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                name TEXT,
                address TEXT,
                address2 TEXT,
                state TEXT,
                city TEXT,
                items TEXT
            );
    `)
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
            "https://images.unsplash.com/photo-1551219059-b5f8e7acee56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "Colectoria",
            "Guilherme Gemballa, Jardim América",
            "Número 260",
            "Santa Catarina",
            "Rio do Sul",
            "Resíduos Eletrônicos, Lâmpadas"
    ]
    
    function afterInsertData(error){
        if(error)
            return console.log(error)
        
        console.log("Cadastrado com sucesso")
        console.log(this)
    }
    
    // db.run(query, values, afterInsertData)

    
    // 3. deletar um dado da tabela
    function afterDeleteData(error){
        if(error)
            return console.log(error)

        console.log("Registro deletado com sucesso")
    }
    
    db.run(`DELETE FROM places WHERE ID = ?`, [1], afterDeleteData)

    // 4. consultar os dados da tabela

    function getData(error, rows){
        if(error)
            return console.log(error)

        console.log("Aqui estão seus registros")
        console.log(rows)
    }

    db.all(`SELECT * FROM places`, getData)
})
