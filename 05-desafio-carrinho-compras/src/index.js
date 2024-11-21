//importa todas as funções do carrinho.js
import * as cartService from "./service/carrinho.js";
//importa apenas a função createItem do modulo item.js
import createItem from "./service/item.js";

// Declara um array vazio para representar o carrinho de compras.
const myCart = [];

//// Declara um array vazio para representar a lista de desejos.
const myWhishList = [];

console.log("Bem-vindos ao seu carrinho!");

//criando dois itens
// `await` garante que a criação seja concluída antes de prosseguir
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

item2.quantity=2;
await cartService.addItem(myCart, item2);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

//Calcula e exibe o total do carrinho no console usando a função `calculateTotal` do serviço `cartService`.
await cartService.calculateTotal(myCart);