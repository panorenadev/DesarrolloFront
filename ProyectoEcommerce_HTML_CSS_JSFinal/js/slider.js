// Obtener todas las diapositivas
const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // Índice de la diapositiva actual

// Añadir eventos a los botones de siguiente y anterior
document.getElementById('nextBtn').addEventListener('click', () => {
  changeSlide(1); // Avanzar una diapositiva
});

document.getElementById('prevBtn').addEventListener('click', () => {
  changeSlide(-1); // Retroceder una diapositiva
});

function changeSlide(direction) {
  // Ocultar la diapositiva actual
  slides[currentSlide].classList.remove('active');

  // Calcular la nueva diapositiva teniendo en cuenta el límite del array
  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  // Mostrar la nueva diapositiva
  slides[currentSlide].classList.add('active');
}

// Configurar el slider automático cada 5 segundos
setInterval(() => {
  changeSlide(1); // Avanzar automáticamente una diapositiva
}, 9000);


