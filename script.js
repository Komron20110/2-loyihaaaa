// === HAMBURGER MENU ===
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Hamburger animatsiyasi
  menuIcon.classList.toggle('open');
});

// Hamburger animatsiyasi uchun CSS o‘zgartirish
const style = document.createElement('style');
style.innerHTML = `
.menu-icon.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-icon.open span:nth-child(2) {
  opacity: 0;
}
.menu-icon.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}`;
document.head.appendChild(style);


// === SLIDER (AUTO FADE) ===
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Har 4 sekundda slayd almashadi
setInterval(nextSlide, 4000);


// === NAVBAR SCROLL ANIMATSIYASI ===
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(255,215,0,0.4)';
    navbar.style.transform = 'translateY(0)';
  } else {
    navbar.style.boxShadow = '0 2px 15px rgba(255,215,0,0.3)';
  }
});


// === SCROLLDA ELEMENTLAR CHIQISHI (FadeInUp) ===
const revealElements = document.querySelectorAll('.main-content, .product-container img, .form-container');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = 'all 0.8s ease';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


// === KAMRONBEK1 VA K ELEMENTLARI ANIMATSIYASI ===
const kamronbek1 = document.querySelector('.KAMRONBEK1');
const k = document.querySelector('.K');

if (kamronbek1 && k) {
  kamronbek1.style.opacity = '0';
  k.style.opacity = '0';

  setTimeout(() => {
    kamronbek1.animate(
      [
        { transform: 'translateX(-200px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
      ],
      {
        duration: 1500,
        fill: 'forwards',
        easing: 'ease-out'
      }
    );
  }, 1500);

  setTimeout(() => {
    k.animate(
      [
        { transform: 'translateX(200px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
      ],
      {
        duration: 1500,
        fill: 'forwards',
        easing: 'ease-out'
      }
    );
  }, 2500);
}
