let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 0 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';

  // Oculta todas as imagens
  for (let i = 0; i < totalSlides; i++) {
    slides.children[i].style.display = 'none';
  }

  // Exibe apenas a imagem atual
  slides.children[currentIndex].style.display = 'block';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Pode adicionar funcionalidades adicionais, como autoplay, se desejar
Exemplo: setInterval(nextSlide, 3000); // Muda para a próxima imagem a cada 3 segundos
