/*
Objetivo: Desenvolver as funções principais de um e-commerce para calcular o valor total de uma compra, aplicar cupons de desconto e listar os produtos no console

Checklist:
Coleção de Dados (Array de Objetos):
    Crie um array chamado carrinho contendo pelo menos 3 objetos.
    Cada objeto deve representar um produto com as propriedades: nome (string), preco (number) e quantidade (number).
Listagem de Itens com Loop (for...of ou métodos de array):
    Crie uma função chamada exibirItens que receba o carrinho como parâmetro.
    Utilize um loop for...of para percorrer os produtos e exibir no console o nome do produto, a quantidade e o subtotal daquele item (preco * quantidade).
Função com Arrow Function (Cálculo do Total):
    Crie uma arrow function chamada calcularTotal que receba o array carrinho como parâmetro, somando os subtotais de todos os itens e retornando o valor total bruto da compra.
Tomada de Decisão com switch (Aplicação de Cupom):
    Crie uma função chamada aplicarCupom que receba o valorTotal e uma string cupom.
    Use a estrutura switch para avaliar o cupom:
        "DESCONTO10": concede 10% de desconto.
        "MEGADESCONTO": concede 20% de desconto. não aplica desconto (retorna o valor original) e exibe um aviso de cupom inválido se uma string for informada.
        default: não aplica desconto (retorna o valor original) e exibe um aviso de cupom inválido se uma string for informada.
A função deve retornar o valor final atualizado.
Execução e Teste: 
    Invoque a função exibirItens; Calcule o total com calcularTotal; e Aplique um cupom válido e exiba no console o valor final a pagar.
*/

let carrinho = [
    {nome: 'smartphone', preco: 1299.90, quantidade: 2},
    {nome: 'fone de ouvido', preco: 89.90, quantidade: 12},
    {nome: 'teclado mecânico', preco: 249.99, quantidade: 15},
    {nome: 'mouse sem fio', preco: 79.90, quantidade: 10},
    {nome: 'monitor 24 polegadas', preco: 899.99, quantidade: 8}
];

function exibirItens(carrinho_p) {
    for (let item of carrinho_p) {
        item.subtotal = item.preco * item.quantidade;
        console.log(`${item.nome} | ${item.preco.toFixed(2)} | ${item.subtotal.toFixed(2)}`);
    }
}
/*Recebe total bruto = 0, e subtotal como entradas*/
const calcularTotal = carrinho => carrinho.reduce((totalBruto, item) => totalBruto + item.subtotal, 0 );

function aplicarCupom(vTotal, cupom) {
    switch(cupom) {
        case "DESCONTO10":
            return vTotal = (vTotal - (vTotal * 0.1)).toFixed(2);
        case "MEGADESCONTO":
            return vTotal = (vTotal - (vTotal * 0.2)).toFixed(2);
        default:
            console.log(cupom + " [cupom inválido]");
            return vTotal;
    } 
}

exibirItens(carrinho);
let total = calcularTotal(carrinho);
console.log(`\nTotal bruto: ${total}`);
let p = aplicarCupom(total, "MEGADESCONTO");
console.log(`A pagar: ${p}`);

let produtos = [
    {nome: 'smartphone', preco: 1299.90, quantidade: 2},
    {nome: 'fone de ouvido', preco: 89.90, quantidade: 12},
    {nome: 'teclado mecânico', preco: 249.99, quantidade: 15},
    {nome: 'mouse sem fio', preco: 79.90, quantidade: 10},
    {nome: 'monitor 24 polegadas', preco: 899.99, quantidade: 8}
];

function renderizarProdutos(lista) {
    const container = document.getElementById('listaProdutos');
    container.innerHTML = '';

    for (const [index, produto] of lista.entries()) { /*entries(): método que faz retornar n só cada item mas a sua posição (índice) na lista*/
        const coluna = document.createElement('div');
        coluna.className = 'col-12 col-md-6 col-lg-4';

        coluna.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.preco.toFixed(2)}</p>
                    <button class="btn btn-primary" data-index="${index}">Adicionar</button>
                </div>
            </div>
        `;

        container.appendChild(coluna);
    }
}
renderizarProdutos(carrinho);