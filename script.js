const carousel = {
    currentSlide: 0,
    slides: null,
    container: null,
    autoPlayInterval: null,

    init() {
        this.slides = document.querySelectorAll('.slides img');
        this.container = document.querySelector('.slides');
        if (this.slides.length === 0 || !this.container) {
            console.error('Carousel initialization failed: No slides or container found.');
            return;
        }
        this.setupSlides();
        this.createNavDots();
        this.addEventListeners();
        this.startAutoPlay();
    },

    setupSlides() {
        // Set initial positions
        this.slides.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        });
    },

    createNavDots() {
        const nav = document.createElement('div');
        nav.className = 'carousel-nav';
        
        this.slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = `nav-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(i));
            nav.appendChild(dot);
        });
        
        document.querySelector('.carousel').appendChild(nav);
    },

    addEventListeners() {
        let startX = 0;
        let isDragging = false;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.pauseAutoPlay();
        });

        this.container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) this.nextSlide();
                else this.prevSlide();
                isDragging = false;
            }
        });

        this.container.addEventListener('touchend', () => {
            this.startAutoPlay();
        });

        document.querySelector('.carousel-prev').addEventListener('click', () => {
            this.prevSlide();
            this.pauseAutoPlay();
        });
        
        document.querySelector('.carousel-next').addEventListener('click', () => {
            this.nextSlide();
            this.pauseAutoPlay();
        });
    },

    updateCarousel() {
        this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        this.updateNavDots();
        this.updateSlideVisibility();
    },

    updateNavDots() {
        const dots = document.querySelectorAll('.nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    },

    updateSlideVisibility() {
        this.slides.forEach((slide, index) => {
            const distance = Math.abs(index - this.currentSlide);
            slide.style.opacity = distance === 0 ? '1' : '0.5';
            slide.style.transform = `scale(${distance === 0 ? 1 : 0.8})`;
        });
    },

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateCarousel();
    },

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
    },

    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    },

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    },

    pauseAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
};

document.addEventListener('DOMContentLoaded', () => carousel.init());