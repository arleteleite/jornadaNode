//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
    //adiciona o item ao array do carrinho
    userCart.push(item);
}
  
  // ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");
  
    //usa o método reduce para somar os subtotais de todos os itens no carrinho
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    //exibe no console o total
    console.log(`🎁Total: ${result}`);
}
  
  // -> deletar item do carrinho
async function deleteItem(userCart, name) {
    //encontra o índice do item cujo nome corresponde ao parametro name
    const index = userCart.findIndex((item) => item.name === name);
  
    // Se o item for encontrado (índice diferente de -1), ele é removido do array usando `splice`.
    if (index !== -1) {
      userCart.splice(index, 1);
    }
}
  
  // -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
    //1. encontrar o indice do item
    //localiza o indice do item no array do carrinho com base no nome.
    const indexFound = userCart.findIndex((p) => p.name === item.name);
  
    //2. Caso não encontre o item
    if (indexFound == -1) {
      console.log("item não encontrado");
      return;//é importante usar o return para o if parar e não entrar na próxima condicional
    }
  
    //3. item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity -= 1;
      return; //é importante usar o return para o if parar e não entrar na próxima condicional
    }
  
    //4. caso item = 1 deletar o item
    if (userCart[indexFound].quantity == 1) {
      userCart.splice(indexFound, 1);
      return;
    }
}
  
  // ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
    console.log("\nShopee cart list:");

    //itera sobre os itens no carrinho e exibe o seu índice, nome, preço, quatidade e subtotal.
    userCart.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.name} - R$ ${item.price} | ${
          item.quantity
        }x | Subtotal = ${item.subtotal()}`
      );
    });
}
  
  //exporta todas as funções definida no escopo do carrinho para serem usadas em outros modulos.
  export { addItem, calculateTotal, deleteItem, removeItem, displaycart };