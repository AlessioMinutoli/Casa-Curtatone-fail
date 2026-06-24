document.addEventListener('DOMContentLoaded', () => {
    // Funzione che inizializza un carosello in base al suo ID
    function initCarousel(carouselId) {
        const wrapper = document.getElementById(carouselId);
        if (!wrapper) return;

        const track = wrapper.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const dotsNav = wrapper.querySelector('.carousel-dots');
        let currentIndex = 0;
        let slideInterval;

        // Crea i puntini in base al numero di slide
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => moveToSlide(index));
            dotsNav.appendChild(dot);
        });

        const dots = Array.from(dotsNav.children);

        function moveToSlide(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots[currentIndex].classList.remove('active');
            dots[index].classList.add('active');
            currentIndex = index;
            resetInterval();
        }

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % slides.length;
            moveToSlide(nextIndex);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 4000); // Scorre ogni 4 secondi
        }

        resetInterval(); // Avvia l'autoplay
    }

    // Inizializza tutti i caroselli presenti nella pagina
    initCarousel('main-carousel');
    initCarousel('contest-carousel-9');
    initCarousel('contest-carousel-7');
});