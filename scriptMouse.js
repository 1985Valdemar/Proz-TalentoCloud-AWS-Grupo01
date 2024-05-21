// Função para formatar o número no formato monetário
function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }
  
  // Função para adicionar o preço de um produto ao total da compra
  function adicionarAoCarrinho(precoProduto) {
    var totalElement = document.getElementById('total-compra');
    var quantidadeElement = document.getElementById('quantidade-itens');
    var totalCompra = parseFloat(totalElement.innerText.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
    var quantidadeItens = parseInt(quantidadeElement.innerText);
  
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
    
    adicionarItemAListaCarrinho(nomeProduto, precoProduto);
  }
  
  // Função para adicionar um item à lista de itens do carrinho
  function adicionarItemAListaCarrinho(nome, preco) {
    var listaCarrinho = document.getElementById('itens-carrinho');
    var novoItem = document.createElement('li');
    novoItem.textContent = nome + ' - R$ ' + formatarNumero(preco);
    listaCarrinho.appendChild(novoItem);
  }
  
  // Função para remover todos os itens do carrinho
  function limparCarrinho() {
    var totalElement = document.getElementById('total-compra');
    var quantidadeElement = document.getElementById('quantidade-itens');
    var listaCarrinho = document.getElementById('itens-carrinho');
  
    totalElement.innerText = 'R$ 0,00';
    quantidadeElement.innerText = '0 itens';
    listaCarrinho.innerHTML = ''; // Limpa a lista de itens
  
    atualizarSubtotal();
  }
  
  // Função para atualizar o subtotal
  function atualizarSubtotal() {
    var totalElement = document.getElementById('total-compra');
    var quantidadeElement = document.getElementById('quantidade-itens');
  
    var totalCompra = parseFloat(totalElement.innerText.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
    var quantidadeItens = parseInt(quantidadeElement.innerText);
  
    document.getElementById('subtotal').innerText = 'Subtotal (' + quantidadeItens + ' itens): R$ ' + formatarNumero(totalCompra);
  }
  
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
  var botoes = document.querySelectorAll(".botoes-home, .btn-adicionar, .remover-carrinho1");
  
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
