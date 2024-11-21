//funçõe exportadas por default

exports.conectandoDatabase = async(dataName) =>{
    return "Conexão estabelecida ao "+dataName
}

exports.desConectandoDatabase = async() =>{
    return "Desconectando do database."
}