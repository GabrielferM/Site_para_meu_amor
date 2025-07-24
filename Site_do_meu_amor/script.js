function mostrarSurpresa() {
  const div = document.getElementById("surpresa");
  div.style.display = "block";
}

// Slideshow automático
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

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
