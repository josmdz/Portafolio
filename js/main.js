// Función para cambiar la visibilidad de los elementos al hacer clic
function toggleVisibility(element) {
    const icon = element.querySelector('img');
    const experienceText = element.querySelector('.experienceText');

    // Verifica si el texto está oculto y alterna la visibilidad
    if (experienceText.style.display === 'none' || experienceText.style.display === '') {
        icon.style.display = 'none';
        experienceText.style.display = 'block';
    } else {
        icon.style.display = 'block';
        experienceText.style.display = 'none';
    }
}

// Agrega un controlador de eventos de clic a cada tarjeta de habilidad
document.querySelectorAll('.skill-card').forEach(function (card) {
    card.addEventListener('click', function () {
        toggleVisibility(this);
    });

    // Agrega un controlador de eventos de clic al párrafo dentro de la tarjeta
    const experienceText = card.querySelector('.experienceText');
    if (experienceText) {
        experienceText.addEventListener('click', function (event) {
            event.stopPropagation();  // Evita que el clic en el párrafo propague al contenedor y active el clic en la tarjeta
            toggleVisibility(card);
        });
    }
});