/*
Objetivo: Simular a lógica de um sistema que 
cadastra um cliente de cinema e 
calcula se ele tem direito a uma promoção especial de meia-entrada 
para estudantes jovens (menores de 26 anos) ou para idosos (acima de 60 anos).

Checklist:
*Declaração de variáveis: use const e let para as variáveis necessárias
Use o operador *typeof: use comandos para exibir no console o tipo de todas as variáveis criadas
*Operadores de Comparação e Lógicos: use comparadores para verificar o uso da promoção de meia-entrada
*Operador Aritmético: calcule quantos anos faltam para o cliente completar 60 anos de idade e armazene em uma variável
Exibição do resultado (saída): Use o console para exibir uma mensagem final amigável utilizando Template Literals (crases), mostrando o nome do cliente, a idade, e se ele tem direito à promoção */

function enviar() {
    let hoje = new Date();
    let desconto = "";

    let nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const carteirinha = document.getElementById("estudante").checked;
    
    const nascimento = document.getElementById("nascimento").value;
    const [ano, mes, dia] = nascimento.split("-").map(Number); //map(NUmber): aplica a função Number (conversor nativo do JS) a cada elemento do array, convertendo cada string pra número

    const idade = hoje.getFullYear() - ano
    const dif60anos = 60 - idade;
    
    function aniversarioPendente() {
        if (hoje.getMonth() < mes) {
            return true;
        }
        else if (hoje.getMonth() === mes && hoje.getDay() < dia) {
            return true;
        } 
    }

    if (aniversarioPendente()) {
        idade--;
    }

    if (idade < 26 && carteirinha) {
        desconto = "Desconto estudante habilitado (50%)";
    }
    else if (idade > 60) {
        desconto = "Desconto habilitado (50%)";
    }
    else {
        desconto = "Sem desconto";
    }

    console.log(`--> CGI Cinemas\n-> Cliente ${nome} | ${idade}\nDescontos: ${desconto}`);
    console.log(dif60anos);
    console.log(`Tipos: nome -> ${typeof nome}, cpf -> ${typeof cpf}, data nasc -> ${typeof nascimento}`);

}

