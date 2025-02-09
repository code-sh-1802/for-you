// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Create falling hearts effect every 500ms
  setInterval(createHeart, 500);

  // Home Page: Surprise Button alert
  const surpriseButton = document.getElementById('surpriseButton');
  if (surpriseButton) {
    surpriseButton.addEventListener('click', function () {
      alert("Surprise! I love you more than words can say!");
    });
  }

  // Gifts Page: Toggle extra gift surprise
  const revealGiftButton = document.getElementById('revealGift');
  if (revealGiftButton) {
    revealGiftButton.addEventListener('click', function () {
      const extraGift = document.getElementById('extraGift');
      if (extraGift.classList.contains('hidden')) {
        extraGift.classList.remove('hidden');
        revealGiftButton.textContent = "Hide Surprise";
      } else {
        extraGift.classList.add('hidden');
        revealGiftButton.textContent = "Reveal More!";
      }
    });
  }

  // Fun Page: Toggle funny surprise content
  const funButton = document.getElementById('funButton');
  if (funButton) {
    funButton.addEventListener('click', function () {
      const funSurprise = document.getElementById('funSurprise');
      if (funSurprise.classList.contains('hidden')) {
        funSurprise.classList.remove('hidden');
        funButton.textContent = "Hide Fun";
      } else {
        funSurprise.classList.add('hidden');
        funButton.textContent = "Click for a Funny Surprise!";
      }
    });
  }
});

// Function to create and animate a heart element
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 24 + 16 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  heart.textContent = '❤';
  document.getElementById('hearts-container').appendChild(heart);

  // Remove the heart after its animation completes
  setTimeout(() => {
    heart.remove();
  }, parseFloat(heart.style.animationDuration) * 1000);
}
