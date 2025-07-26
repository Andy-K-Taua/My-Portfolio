// Personal-Portfolio/script.js

  document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('animate-from-left-text').classList.add('animate-from-left');
  document.getElementById('hey-im-anty').classList.add('animate-from-right');

  document.getElementById('projects-nav-link').addEventListener('click', () => {
    const headerRect = document.querySelector('.projects-section-header').getBoundingClientRect();
    window.scrollTo({ top: headerRect.top + headerRect.height + window.scrollY, behavior: 'smooth' });
  });

  document.querySelector('.btn-show-up').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    animate();
  });

  function animate() {
    const elements = [
      { selector: '#hey-im-anty', classes: ['animate-from-right'] },
      { selector: '#animate-from-left-text', classes: ['animate-from-left'] }
    ];

    elements.forEach((element) => {
      document.querySelector(element.selector).classList.remove(...element.classes);
      setTimeout(() => document.querySelector(element.selector).classList.add(...element.classes), 100);
    });
  }

  // Particle animation
  const container = document.querySelector('#container-box');

  function addAnimation() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    container.appendChild(particle);
  
    const screenWidth = window.innerWidth * 0.9;
    const screenHeight = window.innerHeight * 0.9;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
  
    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;
  
    anime({
      targets: particle,
      translateX: randomX - centerX,
      translateY: randomY - centerY,
      scale: [
        { value: 0, duration: 2000 }, // Increased duration
        { value: 0, duration: 1200, delay: 800 } // Increased duration and delay
      ],
      easing: 'easeOutSine',
      loop: true,
      delay: anime.random(0, 4000) // Increased delay range
    });
  }
  
  for (let i = 0; i < 450; i++) addAnimation(); // Increase the amount of particles

  if (container) {
    container.appendChild(particle);
  } else {
    console.error("Container element not found");
  }

});