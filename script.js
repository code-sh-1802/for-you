// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggling
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', function () {
    navLinks.classList.toggle('nav-active');
  });

  // Heart Animation Generation
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    // Set a random horizontal position across the viewport
    heart.style.left = Math.random() * 100 + 'vw';
    // Random animation duration between 3s and 7s
    const duration = Math.random() * 4 + 3;
    heart.style.animationDuration = duration + 's';
    // Random size between 10px and 30px
    const size = Math.random() * 20 + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    document.body.appendChild(heart);
    
    // Remove heart after its animation ends
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Create a new heart every 300 milliseconds
  setInterval(createHeart, 300);
});
