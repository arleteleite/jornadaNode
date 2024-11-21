//importando funções
//import conectaDatabase, { desconectaDatabase } from "./utils/database.js" //desestruturando a importação.
import * as database from "./utils/database.js"


console.log("Tudo certo por aqui!")
database.conectaDatabase("MariaBonita")
database.desconectaDatabase()