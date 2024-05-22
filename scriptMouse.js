// Função para formatar o número no formato monetário
function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

// Função para adicionar o preço de um produto ao total da compra
function adicionarAoCarrinho(precoProduto) {
    const totalElement = document.getElementById('total-compra');
    const quantidadeElement = document.getElementById('quantidade-itens');
    let totalCompra = parseFloat(totalElement.innerText.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
    let quantidadeItens = parseInt(quantidadeElement.innerText);

    totalCompra += precoProduto;
    quantidadeItens += 1;

    totalElement.innerText = 'R$ ' + formatarNumero(totalCompra);
    quantidadeElement.innerText = quantidadeItens + ' itens';

    atualizarSubtotal();
}

// Função para adicionar um item ao carrinho
function adicionarItemAoCarrinho(nomeProduto, precoProduto) {
    adicionarAoCarrinho(precoProduto);
    alert('Produto adicionado ao carrinho: ' + nomeProduto);
    
    // Adiciona o item à lista de itens do carrinho
    adicionarItemAListaCarrinho(nomeProduto, precoProduto);
}

// Função para adicionar um item à lista de itens do carrinho
function adicionarItemAListaCarrinho(nome, preco) {
    const listaCarrinho = document.getElementById('itens-carrinho');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome + ' - R$ ' + formatarNumero(preco);
    listaCarrinho.appendChild(novoItem);
}

// Função para remover todos os itens do carrinho
function limparCarrinho() {
    const totalElement = document.getElementById('total-compra');
    const quantidadeElement = document.getElementById('quantidade-itens');
    const listaCarrinho = document.getElementById('itens-carrinho');

    totalElement.innerText = 'R$ 0,00';
    quantidadeElement.innerText = '0 itens';
    listaCarrinho.innerHTML = ''; // Limpa a lista de itens

    atualizarSubtotal();
}

// Função para atualizar o subtotal
function atualizarSubtotal() {
    const totalElement = document.getElementById('total-compra');
    const quantidadeElement = document.getElementById('quantidade-itens');

    const totalCompra = parseFloat(totalElement.innerText.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
    const quantidadeItens = parseInt(quantidadeElement.innerText);

    document.getElementById('subtotal').innerText = 'Subtotal (' + quantidadeItens + ' itens): R$ ' + formatarNumero(totalCompra);
}

// Selecionando o botão
const botao = document.querySelector(".btn-item");

// Adicionando um ouvinte de evento para o evento de passagem do cursor (mouseover)
botao.addEventListener("mouseover", function() {
    // Muda a cor de fundo do botão quando o cursor passa por cima
    botao.style.backgroundColor = "#00FFFF";
});

// Adicionando um ouvinte de evento para o evento de retirada do cursor (mouseout) do botão
botao.addEventListener("mouseout", function() {
    // Restaura a cor original do botão
    botao.style.backgroundColor = "";
});

// Selecionando todos os botões da página
const botoes = document.querySelectorAll(".botoes-home");

// Iterando sobre cada botão
botoes.forEach(function(botao) {
    // Adicionando um ouvinte de evento para o evento de passagem do cursor (mouseover)
    botao.addEventListener("mouseover", function() {
        // Muda a cor de fundo do botão quando o cursor passa por cima
        botao.style.backgroundColor = "#00FFFF";
    });

    // Adicionando um ouvinte de evento para o evento de retirada do cursor (mouseout) do botão
    botao.addEventListener("mouseout", function() {
        // Restaura a cor original do botão
        botao.style.backgroundColor = "";
    });
});

// Selecionando todos os botões da página
const todosBotoes = document.querySelectorAll(".botoes-home, .btn-adicionar, .remover-carrinho1, .btn-item");

// Iterando sobre cada botão
todosBotoes.forEach(function(botao) {
    // Adicionando um ouvinte de evento para o evento de passagem do cursor (mouseover)
    botao.addEventListener("mouseover", function() {
        // Muda a cor de fundo do botão quando o cursor passa por cima
        botao.style.backgroundColor = "#fdb19a";
    });

    // Adicionando um ouvinte de evento para o evento de retirada do cursor (mouseout) do botão
    botao.addEventListener("mouseout", function() {
        // Restaura a cor original do botão
        botao.style.backgroundColor = "";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Selecionando todos os elementos com a classe "botao-texto"
    const botaoTextos = document.querySelectorAll(".botao-texto a, .botoes-home a, .btn-adicionar a, .remover-carrinho1 a, .btn-item a");

    // Iterando sobre cada elemento com a classe "botao-texto"
    botaoTextos.forEach(function(botaoTexto) {
        // Removendo o sublinhado e definindo a cor da letra para vermelho
        botaoTexto.style.textDecoration = "none"; // Remove o sublinhado
        botaoTexto.style.color = "white"; // Define a cor da letra para vermelho
    });

    // Selecionando todos os botões da página
    const todosBotoes = document.querySelectorAll(".botoes-home, .btn-adicionar, .remover-carrinho1, .btn-item");

    // Iterando sobre cada botão
    todosBotoes.forEach(function(botao) {
        // Adicionando um ouvinte de evento para o evento de passagem do cursor (mouseover)
        botao.addEventListener("mouseover", function() {
            // Muda a cor de fundo do botão quando o cursor passa por cima
            botao.style.backgroundColor = "#fdb19a";
        });

        // Adicionando um ouvinte de evento para o evento de retirada do cursor (mouseout) do botão
        botao.addEventListener("mouseout", function() {
            // Restaura a cor original do botão
            botao.style.backgroundColor = "";
        });
    });
});

// Seleciona o botão e o parágrafo acima dele
const botaoConheca = document.getElementById('botao-conheca');
const paragrafo = botaoConheca.previousElementSibling;

// Adiciona espaço inferior ao botão
botaoConheca.style.marginBottom = '25px';

// Centraliza o texto acima do botão
//paragrafo.style.textAlign = 'center';
// Alinha o texto de forma justificada acima do botão
paragrafo.style.textAlign = 'justify';
// Adiciona margem superior ao parágrafo
paragrafo.style.marginTop = '25px';


// Ajusta o padding do botão para alinhar o texto no meio com espaço igual de cada lado
botaoConheca.style.paddingLeft = '10px';
botaoConheca.style.paddingRight = '10px';

// Seleciona a seção que deseja aumentar a altura
const secaoBanner = document.querySelector('.banner-para-empresa');

// Define a altura desejada em pixels
const novaAltura = 100; // Por exemplo, 400 pixels

// Atribui a nova altura à seção
secaoBanner.style.height = `${novaAltura}px`;

// Altera a ordem visual dos elementos para colocar o parágrafo acima do botão
paragrafo.style.order = '-1';

