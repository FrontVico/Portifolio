// Remova este trecho do arquivo ou comente-o
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});
});

//passar carrosel do lado
const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) % 3; // Cicla entre os 3 itens
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 3;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

