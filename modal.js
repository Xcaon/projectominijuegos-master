// Obtener el botón y el modal
const boton = document.querySelector('.premiumAccion');
const modal = document.querySelector('.modal');
const contenidoModal = document.querySelector('.modal-contenido');
const botonCerrar = document.querySelector('.cerrar');
const hazmePremium = document.querySelector('.llamadaAccion');

// Cuando se haga clic en el botón, mostrar el modal
boton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Cuando se haga clic en la X, cerrar el modal
botonCerrar.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cuando se haga clic en la X, cerrar el modal
hazmePremium.addEventListener('click', function() {
    modal.style.display = 'none';
  });

// Cuando se haga clic fuera del modal, cerrar el modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Ajustar tamaño del contenido
contenidoModal.style.width = '60%';
contenidoModal.style.height = '60%';