/*desenvolva um protótipo de site de
e-commerce usando o Bootstrap:
1. Crie navbar responsiva com contador do carrinho.
2. Renderize produtos em cards: 1 / 2 / 3 colunas conforme a largura.
3. Use botão “Adicionar” e atualize o badge com JavaScript.
4. Mostre um toast ou alert após a ação.
5. Teste em 375 px, 800 px e 1200 px.*/

let produtos = [
    {nome: 'smartphone', preco: 1299.90},
    {nome: 'fone de ouvido', preco: 89.90},
    {nome: 'teclado mecânico', preco: 249.99},
    {nome: 'mouse sem fio', preco: 79.90},
    {nome: 'monitor 24 polegadas', preco: 899.99}
];

function renderizarProdutos(lista) {
    const container = document.getElementById('listaProdutos');
    container.innerHTML = '';

    for (const [index, produto] of lista.entries()) { /*entries(): método que faz retornar n só cada item mas a sua posição (índice) na lista*/
        const coluna = document.createElement('div');/*cria uma div e atribui o objeto div à constante coluna*/
        coluna.className = 'col-12 col-md-6 col-lg-4';/*add uma classe à div*/

        /*acessa o espaço em branco dentro da div*/
        coluna.innerHTML = `
            <div class="card h-100">
                <div class="card-body"  >
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.preco.toFixed(2)}</p>
                    <button onClick="adicionar()" class="btn btn-primary" data-index="${index}">Adicionar</button>
                </div>
            </div>
        `;

        container.appendChild(coluna); /*Adiciona a div criada ao espaço em branco selecionaedo no html pelo id*/
    }
}

function adicionar() {
    const c_interface = document.getElementById('contador');
    let c = parseInt(c_interface.innerText);
    c++;
    
    c_interface.innerHTML = `${c}`;
}

renderizarProdutos(produtos);