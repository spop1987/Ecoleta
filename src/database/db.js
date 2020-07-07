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
                
            );
    `)
    // 2. inserir dados na tabela

    // 3. consultar os dados da tabela

    // 4. deletar um dado da tabela
})
