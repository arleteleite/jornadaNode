//criando objetos com dois jogadores
 const jogador1 ={
    NOME:"Mario",
    VELOCIDADE: 4,
    PODER: 3,
    MANOBRABILIDADE: 4,
    PONTOS: 0,
 };

 const jogador2 ={
    NOME:"Luigi",
    VELOCIDADE: 3,
    PODER: 4,
    MANOBRABILIDADE: 4,
    PONTOS: 0,
 }; 

 //função para rolar o dado
 async function rolarDado() {//função assincrona, ou seja, não funcionará simultaneo com outras.
    return Math.floor(Math.random()*6)+1;
    /*
    retorna um valor de 1 a 6. Random faz o sorteio de forma aleatoria de 0 a 1.
    Multiplica por 6 para chegar até o valor 5 e soma-se 1 ao final para poder ter o valor 6
    o floor é necessario para se ter apenas numeros inteiros.
    */
 }

 //função para sortear o bloco da pista (reta, curva ou confronto)
 async function getRandonBlock() {
    let random = Math.random();
    let resultado;

    switch(true){
        case random <0.33:
            resultado = "CURVA"
            break;
        case random < 0.66:
            resultado = "RETA"
            break;
        default:
            resultado = "CONFRONTO"
    }
    return resultado;
 }

 //função para o resultado do jogo de dado
 async function logRollResult(jogadorName, block, dadoResultado, atributo) {
  console.log(
    `${jogadorName} 🎲 rolou um dado de ${block} ${dadoResultado} + ${atributo} = ${dadoResultado + atributo}`
  );
}


 //função de inicio da corrida
 async function playRaceEngine(piloto1, piloto2) {
    /*
    os parametros personagem1 e personagem2 são os jogadores que 
    disputarão a corrida que se inicia.
    */
   for(let round=1; round<=5; round++){
    console.log(`🏁 Rodada ${round}.`)

    //sortear bloco da pista
    let block = await getRandonBlock();
    console.log(`O bloco sorteado é ${block}.`)

    //rolar o dado
    let dadoResultado1 = await rolarDado();
    let dadoResultado2 = await rolarDado();
    
    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    //comparando o resultado do sorteio do bloco da pista
    if(block === "CURVA"){
        totalTestSkill1 = dadoResultado1 + piloto1.MANOBRABILIDADE;
        totalTestSkill2 = dadoResultado2 + piloto2.MANOBRABILIDADE;

        //chamando função que mostra o resultado dos dados
        await logRollResult(
          piloto1.NOME, 
          "Manobrabilidade", 
          dadoResultado1, 
          piloto1.MANOBRABILIDADE
        );

        await logRollResult(
          piloto2.NOME, 
          "Manobrabilidade", 
          dadoResultado2, 
          piloto2.MANOBRABILIDADE
        );

    }
    if(block === "RETA"){
        totalTestSkill1 = dadoResultado1 + piloto1.VELOCIDADE;
        totalTestSkill2 = dadoResultado2 + piloto2.VELOCIDADE;

        await logRollResult(
          piloto1.NOME, 
          "Velocidade", 
          dadoResultado1, 
          piloto1.VELOCIDADE
        );

        await logRollResult(
          piloto2.NOME, 
          "Velocidade", 
          dadoResultado2, 
          piloto2.VELOCIDADE
        );
   
    }
    if(block === "CONFRONTO"){
      let poderResultado1 = dadoResultado1 + piloto1.PODER;
      let poderResultado2 = dadoResultado2 + piloto2.PODER;

      console.log(`${piloto1.NOME} confrontou com ${piloto2.NOME}! 🥊`);

      // Sorteio da penalidade
      const penalidade = Math.random() < 0.5 ? 1 : 2; // 1: Casco (-1 ponto), 2: Bomba (-2 pontos)


        await logRollResult(
          piloto1.NOME, 
          "Poder", 
          dadoResultado1, 
          piloto1.PODER
        );

        await logRollResult(
          piloto2.NOME, 
          "Poder", 
          dadoResultado2, 
          piloto2.PODER
        );

        if (poderResultado1 > poderResultado2) {
          console.log(
            `${piloto1.NOME} venceu o confronto! ${piloto2.NOME} recebeu um ${
              penalidade === 1 ? "casco" : "bomba"
            } 🐢.`
          );
          piloto2.PONTOS = Math.max(0, piloto2.PONTOS - penalidade); // Aplica a penalidade
          if (Math.random() < 0.5) {
            console.log(`${piloto1.NOME} ganhou um turbo! 🚀`);
            piloto1.PONTOS++; // Turbo aleatório
          }
        } else if (poderResultado2 > poderResultado1) {
          console.log(
            `${piloto2.NOME} venceu o confronto! ${piloto1.NOME} recebeu um ${
              penalidade === 1 ? "casco" : "bomba"
            } 🐢.`
          );
          piloto1.PONTOS = Math.max(0, piloto1.PONTOS - penalidade); // Aplica a penalidade
          if (Math.random() < 0.5) {
            console.log(`${piloto2.NOME} ganhou um turbo! 🚀`);
            piloto2.PONTOS++; // Turbo aleatório
          }
        } else {
          console.log("Confronto empatado! Nenhum ponto foi perdido.");
        }

    }

    //verificando o vencedor
    if(totalTestSkill1>totalTestSkill2){
      console.log(`${piloto1.NOME} marcou um ponto!`);
      piloto1.PONTOS++;
    }else if (totalTestSkill2>totalTestSkill1){
      console.log(`${piloto2.NOME} marcou um ponto.`);
      piloto2.PONTOS++;
    }

    console.log("-----------------------------------")
  
   }
    
 }

 async function declareVencedor(piloto1, piloto2) {
  console.log("Resultado final:");
  console.log(`${piloto1.NOME}: ${piloto1.PONTOS} ponto(s)`);
  console.log(`${piloto2.NOME}: ${piloto2.PONTOS} ponto(s)`);

  if (piloto1.PONTOS > piloto2.PONTOS)
    console.log(`\n${piloto1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (piloto2.PONTOS > piloto1.PONTOS)
    console.log(`\n${piloto2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
 }

 (async function main() {
    console.log(`🏁 🚨 A corrida entre ${jogador1.NOME} e ${jogador2.NOME} está começando...\n Começou!`)

    //chamando a função para iniciar a corrida
    await playRaceEngine(jogador1, jogador2); //await faz com q a função espere a finalização da execução antes de iniciar outra 
    await declareVencedor(jogador1, jogador2);
 })();