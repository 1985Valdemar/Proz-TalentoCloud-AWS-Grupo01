// Função para redimensionar as imagens
function resizeImages() {
    // Seleciona todas as imagens com a classe 'img-produto'
    let images = document.querySelectorAll('.img-produto');
    
    // Define a nova largura e altura para as imagens
    let newWidth = '200px';
    let newHeight = '200px';
    
    // Itera sobre todas as imagens e aplica a nova largura e altura
    images.forEach(image => {
        image.style.width = newWidth;
        image.style.height = newHeight;
    });
}

// Adiciona um evento para redimensionar as imagens quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', resizeImages);




