/* ============================================================
   TYPED HERO ANIMATION
   Creates typing effect for hero section
   ============================================================ */

const words = ['matters.', 'scales.', 'lasts.', 'works.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedElement = document.getElementById('typed-text');

function typeHero() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Typing
    typedElement.textContent = currentWord.slice(0, ++charIndex);

    if (charIndex === currentWord.length) {
      // Finished typing, start deleting
      isDeleting = true;
      setTimeout(typeHero, 2000);
      return;
    }
  } else {
    // Deleting
    typedElement.textContent = currentWord.slice(0, --charIndex);

    if (charIndex === 0) {
      // Finished deleting, move to next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeHero, isDeleting ? 60 : 100);
}

// Start animation after delay
setTimeout(typeHero, 1500);
