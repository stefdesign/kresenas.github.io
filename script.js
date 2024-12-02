const video = document.getElementById('hero-video');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const volumeButton = document.getElementById('volume-button');
const volumeSlider = document.getElementById('volume-slider');
const volumeControl = document.getElementById('volume-control');
const flechaIzquierda = document.querySelector('.flecha-izquierda'); /*desde aquí movimiento de flechas*/
const flechaDerecha = document.querySelector('.flecha-derecha');
const contenedorCarrusel = document.querySelector('.contenedor-carrusel');

// Reproducir el video
playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'flex';
});

// Pausar el video
pauseButton.addEventListener('click', () => {
    video.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'flex';
});

// Mostrar control de volumen al hacer clic en el botón de volumen
volumeButton.addEventListener('click', () => {
    volumeSlider.style.display = volumeSlider.style.display === 'block' ? 'none' : 'block';
});

// Cambiar el volumen según el slider
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Configurar el desplazamiento del carrusel
const scrollAmount = 300; // Ajusta el número de píxeles para desplazarse

// Evento para mover hacia la izquierda
flechaIzquierda.addEventListener('click', () => {
    contenedorCarrusel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' // Desplazamiento suave
    });
});

flechaIzquierda.addEventListener('click', () => {
    contenedorPrincipal.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Evento para mover hacia la derecha
flechaDerecha.addEventListener('click', () => {
    contenedorCarrusel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Desplazamiento suave
    });
});

flechaDerecha.addEventListener('click', () => {
    contenedorPrincipal.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Desplazamiento suave
    });
});