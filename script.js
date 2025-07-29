function mostrarSurpresa() {
  const div = document.getElementById("surpresa");
  div.style.display = "block";
}

// Slideshow automático
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
showSlides();

// Navegação manual por setas
function mudarSlide(n) {
  showSlide(slideIndex + n);
}

// Mostrar slide específico
function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Slideshow automático
function showSlides() {
  showSlide(slideIndex);
  slideIndex++;
  setTimeout(showSlides, 4000); // Troca a cada 4 segundos
}

let startX = 0;

const slideshowContainer = document.getElementById("slideshow");

slideshowContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slideshowContainer.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    mudarSlide(1); // Swipe para esquerda → próximo
  } else if (endX - startX > 50) {
    mudarSlide(-1); // Swipe para direita → anterior
  }
});

function atualizarContador() {
  const inicio = new Date("2025-06-21T20:30:00"); // <-- Data de início do namoro
  const agora = new Date();

  const diff = agora - inicio;

  const segundosTotais = Math.floor(diff / 1000);
  const minutos = Math.floor(segundosTotais / 60) % 60;
  const horas = Math.floor(segundosTotais / 3600) % 24;
  const dias = Math.floor(segundosTotais / (3600 * 24)) % 30;
  const meses = Math.floor(segundosTotais / (3600 * 24 * 30));

  const contador = document.getElementById("contador");
  contador.textContent =
    `Estamos juntos há ${meses} mês(es), ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s) e ${segundosTotais % 60} segundo(s).`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
