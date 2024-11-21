async function conectaDatabase(nomeDatabase) {
    //lógica da conexão
    console.log(`Conexão estabelecida ao ${nomeDatabase}`)
}

async function desconectaDatabase() {
    //lógica da desconexão
    console.log("Desconexão concluída")
}

//exportando a função por padrão
export default conectaDatabase //exportando apenas uma função

//exportando mais de uma função
export {
    conectaDatabase,
    desconectaDatabase
}