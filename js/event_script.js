
const triggerDiv = document.getElementById('triggerDiv');
const popupOverlay = document.getElementById('popupOverlay');
const popupContent = document.getElementById('popupContent');
const closePopup = document.getElementById('closePopup');
const carouselSlides = document.getElementById('carouselSlides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = Array.from(carouselSlides.children);

let currentIndex = 0; // Start index
let autoSlideInterval;

// Open Popup
triggerDiv.addEventListener('click', () => {
  popupOverlay.classList.remove('hidden');
  popupOverlay.classList.add('flex', 'opacity-100');
  setTimeout(() => popupContent.classList.add('scale-100', 'opacity-100'));
});

// Close Popup
closePopup.addEventListener('click', () => {
  popupContent.classList.remove('scale-100', 'opacity-100');
  setTimeout(() => {
    popupOverlay.classList.remove('opacity-100');
    setTimeout(() => popupOverlay.classList.add('hidden'), 300);
  }, 300);
});

// Update Carousel
function updateCarousel() {
    const width = carouselSlides.clientWidth;
    carouselSlides.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Auto-slide
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 3000);
};

// Manual Navigation
prevBtn.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
  startAutoSlide();
});

// Initialize Carousel
window.addEventListener('resize', updateCarousel);
updateCarousel();
startAutoSlide();
