// Selecionando o botão
var botao = document.querySelector(".btn-item");

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
var botoes = document.querySelectorAll(".botoes-home");

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

// Realizando Passo a Passo