document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll handler to snap perfectly to section slides
    const scrollToSlide = (linkElement, sectionSelector) => {
        if (linkElement) {
            linkElement.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = document.querySelector(sectionSelector);
                
                if (targetSection) {
                    const navHeight = document.getElementById('navbar').offsetHeight || 48;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    
                    // Aligns the top boundary of the slide element perfectly below the fixed header bar
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    };

    // Navigation Menu Link Alignments
    const aboutNavLink = document.querySelector('.nav-list li a[href="#about-me-nav"]');
    scrollToSlide(aboutNavLink, '#about-me-nav');

    const projectsNavLink = document.getElementById('projects-nav-link');
    scrollToSlide(projectsNavLink, '#projects-nav');

    const certsNavLink = document.getElementById('certs-nav-link');
    scrollToSlide(certsNavLink, '#certifications-nav');

    const contactNavLink = document.querySelector('.nav-list li a[href="#contact-nav"]');
    scrollToSlide(contactNavLink, '#contact-nav');


    // Back to Top Interactive Control
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Interactive Particle Layer Generator (Anime.js Matrix)
    const containerBox = document.getElementById('container-box');
    if (containerBox) {
        const particleCount = 40;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            containerBox.appendChild(particle);
        }

        anime({
            targets: '.particle',
            translateX: () => anime.random(-window.innerWidth / 2, window.innerWidth / 2),
            translateY: () => anime.random(-window.innerHeight / 2, window.innerHeight / 2),
            scale: () => anime.random(1, 4),
            opacity: {
                value: [0, 0.8, 0],
                duration: () => anime.random(2000, 5000),
                easing: 'linear'
            },
            duration: () => anime.random(3000, 6000),
            delay: () => anime.random(0, 2000),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });
    }
});