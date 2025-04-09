// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Slider
let currentSlide = 0;
const slides = [
  'url(https://source.unsplash.com/800x400/?beach)',
  'url(https://source.unsplash.com/800x400/?mountains)',
  'url(https://source.unsplash.com/800x400/?travel)'
];

function changeSlide() {
  const slider = document.querySelector('.hero');
  if (!slider) return;
  slider.style.backgroundImage = slides[currentSlide];
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(changeSlide, 3000);

// Animate Booking Form
document.addEventListener('DOMContentLoaded', () => {
  const bookBtn = document.getElementById('book-btn');
  const form = document.getElementById('booking-form');
  if (bookBtn && form) {
    bookBtn.addEventListener('click', () => {
      form.classList.toggle('show');
    });
  }
});