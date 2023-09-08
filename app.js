const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Initially show the navigation links if the screen is wide enough
    if (window.innerWidth >= 768) {
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
    } else {
        nav.style.visibility = 'hidden';
        nav.style.opacity = '0';
    }

    // Event Listener for the burger menu
    burger.addEventListener('click', () => {
        // Toggle Nav visibility and opacity
        if (nav.style.visibility === 'hidden') {
            nav.style.visibility = 'visible';
            nav.style.opacity = '1';
        } else {
            nav.style.visibility = 'hidden';
            nav.style.opacity = '0';
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.65}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Update visibility when the window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            nav.style.visibility = 'visible';
            nav.style.opacity = '1';
        } else {
            nav.style.visibility = 'hidden';
            nav.style.opacity = '0';
        }
    });
}

navSlide();
