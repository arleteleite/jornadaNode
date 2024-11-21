//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(name, price, quantity) {
    return {
      name,
      price,
      quantity,
      subtotal() {
        return this.price * this.quantity;
      },
    };
}

  
//exporta para que outros modulos possam usar a função.
  export default createItem;
    