// Aplica o efeito "fade-in" nas fotos em sequência

const fotos = document.querySelectorAll('.foto');

fotos.forEach((foto, index) => {
  setTimeout(() => {
    foto.classList.add('aparecer');
  }, index * 300); // um pequeno atraso entre as fotos
});
