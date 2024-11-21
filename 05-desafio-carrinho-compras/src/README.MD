DESAFIO DIO - PROF FELIPE AGUIAR
Carrinho de Compras - Projeto Node.js
Este projeto é uma implementação simples de um carrinho de compras utilizando Node.js. O sistema permite adicionar, remover e calcular itens no carrinho, além de calcular totais e exibir os detalhes dos itens. Durante o desenvolvimento, foram realizadas melhorias para corrigir problemas e otimizar o código.

Descrição das Funcionalidades
Adicionar itens ao carrinho.
Remover itens do carrinho: diminuir quantidade ou excluir totalmente.
Exibir todos os itens do carrinho.
Calcular o total do carrinho.
Atualizar a quantidade de itens dinamicamente.
Passo a Passo da Implementação
1. Estruturação inicial
Criados dois módulos principais:
item.js: Define a estrutura de um item do carrinho.
carrinho.js: Contém as operações disponíveis no carrinho (adicionar, remover, exibir, calcular total).
2. Definição do método subtotal
A função createItem inicialmente possuía a seguinte implementação:
javascript
Copiar código
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity, // Calcula com valores fixados no momento da criação
    };
}
Problema: Alterações na quantidade (quantity) ou preço (price) após a criação do item não refletiam no subtotal.
3. Correção do método subtotal
O método foi ajustado para usar this, garantindo que ele calcule o subtotal com base nos valores atuais:
javascript
Copiar código
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal() {
            return this.price * this.quantity; // Usa os valores atuais da instância
        },
    };
}

4. Verificação da consistência do cálculo
Após corrigir o método subtotal, testamos o fluxo:
Adicionar itens.
Alterar a quantidade de itens.
Verificar o subtotal e o total do carrinho.
Todos os cálculos passaram a funcionar corretamente.
