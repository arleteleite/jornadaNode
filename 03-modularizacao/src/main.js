
const produto = require("./services/produtos")
const config = require("./services/config")
const database = require("./services/database")

//função principal
async function main() {
    console.log("Carrinho de compras:") 
    produto.getFullName("8909", "Ração")
    console.log(config.producao)
    console.log(database.conectandoDatabase("MariaDB"))

}

main()