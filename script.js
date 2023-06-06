// Obtenha os elementos DOM para o carrossel de imagens

const wrapper = document.querySelector(".wrapper"),
    carrossel = document.querySelector(".carrossel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 1,
    intervalId;

    // Definir uma função que inicia automaticamente a imagem do slider
const autoSlide = () => {
    // Inicie a apresentação de slides chamando slideImage() a cada 2 segundos
    intervalId = setInterval(() => slideImage(++imageIndex), 5000)
};
// Chamar a função autoSlide no carregamento da página
autoSlide();
// Uma função que atualiza a exibição do carrossel para mostrar a imagem especificada

const slideImage = () => {
    // Calcular o índice de imagem de atualização
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;

    // Atualizar o carrossel e mostrar imagem específica
    carrossel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Uma função que atualiza a exibição do carrossel para mostrar a imagem seguinte ou anterior
const updateClick = (e) => {
    // Parar o slideshow automatico
    clearInterval(intervalId);
    // Calcule o índice de imagem atualizado com base no botão clicado
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex)
    // Restaurar o slide automatico
    autoSlide()
    console.log(imageIndex)
    
}

// Adicionar ouvinte de eventos nos botões de navegação
buttons.forEach((button) => button.addEventListener("click", updateClick));
// Adicione o ouvinte de evento de mouseover ao elemento wrapper para parar o deslizamento automático
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Adicione o ouvinte de evento de mouseleave ao elemento wrapper para parar o deslizamento automático de novo
wrapper.addEventListener("mouseleave", autoSlide);