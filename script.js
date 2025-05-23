const images = [
    'IMG/camaras.jpg',
    'IMG/contenedores.webp',
    'IMG/focos.webp'
];

let currentIndex = 0;

const carouselImage = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
    carouselImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

// Set the initial image
showImage(currentIndex);