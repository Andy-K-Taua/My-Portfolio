const projectData = [
    { title: "Survey Form", img: "images/Survey Form.png", tech: "HTML", desc: "Basic HTML form", link: "https://andy-k-taua.github.io/Survey-Form/" },
    { title: "City Skyline", img: "images/City Skyline.png", tech: "CSS", desc: "Configuring CSS Variables for reuse", link: "https://andy-k-taua.github.io/City-Skyline/" },
    { title: "Calculator", img: "images/Calculator.png", tech: "JavaScript", desc: "Fully functional calculator application", link: "https://andy-k-taua.github.io/Calculator/" },
    { title: "Chat App", img: "images/Chat Application.png", tech: "MERN", desc: "Real-time messaging platform enabling user text conversations.", link: "https://chat-app-92tl.onrender.com/login" },
    { title: "Photo Editor", img: "images/Photo Editting Application.png", tech: "MERN PWA", desc: "Photo editing application to edit and enhance digital photos.", link: "https://photo-editor-l4i7.onrender.com" },
    { title: "Platform Game", img: "images/Mario Bros.png", tech: "MERN", desc: "Login, subscription-based SegaMD Emulator.", link: "https://gamer-trello.onrender.com" },
    { title: "Authentication", img: "images/Authentication App.png", tech: "MERN", desc: "Authentication App with SMS, 2FA, and JWT implementation.", link: "https://authentication-app-pisd.onrender.com" },
    { title: "Geolocation", img: "images/Geolocation Image.png", tech: "MERN", desc: "Geolocation App calculating fastest route between two points.", link: "https://geolocation-project.onrender.com" },
    { title: "Expense Tracker", img: "images/Expense Tracker.png", tech: "Python", desc: "Allows users to view, store, delete, and update expenses.", link: "https://expense-tracker-xfgq.onrender.com" },
    { title: "Raspberry Pi", img: "images/placeholder.png", tech: "C++", desc: "Bluetooth device using C++ / Meta integration.", link: "#" },
    { title: "Stock List", img: "images/placeholder.png", tech: "Python", desc: "Program allowing you to update, delete, and view stock inventory.", link: "#" },
    { title: "Clothes App", img: "images/placeholder.png", tech: "Native/AI", desc: "Take pictures of existing clothes to aggregate metadata.", link: "#" }
];

document.addEventListener('DOMContentLoaded', () => {


    const renderProjects = () => {
        const grid = document.querySelector('.projects-grid');
        if (!grid) return;

        grid.innerHTML = projectData.map(project => `
        <div class="container">
            <div class="card">
                <div class="front">
                    <img src="${project.img}" alt="${project.title}">
                    <div class="card-text"><h3>${project.title}</h3></div>
                </div>
                <div class="back">
                    <a href="${project.link}" target="_blank" ${project.link === '#' ? 'class="disabled-link"' : ''}>
                        <h2>${project.tech}</h2>
                        <p>${project.desc}</p>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    };

    // Call the function to render the cards
    renderProjects();

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
    const navLinks = [
        { selector: '.nav-list li a[href="#about-me-nav"]', target: '#about-me-nav' },
        { selector: '#projects-nav-link', target: '#projects-nav' },
        { selector: '#certs-nav-link', target: '#certifications-nav' },
        { selector: '.nav-list li a[href="#contact-nav"]', target: '#contact-nav' }
    ];

    navLinks.forEach(link => {
        const element = document.querySelector(link.selector);
        scrollToSlide(element, link.target);
    });


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