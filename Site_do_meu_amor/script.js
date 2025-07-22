function mostrarSurpresa() {
  const div = document.getElementById("surpresa");
  div.style.display = "block";
}

// Lógica do Slideshow
let slideIndex = 0;
showSlides(); // Chama a função pela primeira vez para iniciar o slideshow

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Esconde todas as imagens
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Avança para a próxima imagem
  slideIndex++;
  // Se for a última imagem, volta para a primeira
  if (slideIndex > slides.length) {slideIndex = 1}

  // Exibe a imagem atual
  slides[slideIndex-1].style.display = "block";

  // Chama a função novamente após 4 segundos (4000 milissegundos)
  setTimeout(showSlides, 4000);
}