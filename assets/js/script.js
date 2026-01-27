document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Close mobile menu when a navigation link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // 2. Dynamic Copyright Year
    const yearSpan = document.createElement('span');
    yearSpan.id = 'current-year';
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.innerHTML = footerCopyright.innerHTML.replace(/2024|2025/g, currentYear);
    }

    // 3. Header Transformation on Scroll
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.card, .hero-content, section h2, .grid-3 > div');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('reveal-active');
            }
        });
    };

    // Initial check and scroll event
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 5. Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.ariaLabel = 'Kembali ke atas';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 6. Image Fallback Handling
    const handleImageError = (e) => {
        const img = e.target;
        // Prevent infinite loop if placeholder also fails
        img.onerror = null;
        img.src = 'https://placehold.co/600x400?text=Gambar+Tidak+Tersedia';
        img.classList.add('img-fallback');
    };

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', handleImageError);
    });

    // 7. Contact Form Handler (Kept for compatibility)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // This is a simple handler, form.js will handle advanced validation if included
        if (!window.location.pathname.includes('kontak')) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Terima kasih! Pesan Anda telah kami terima (Simulasi).');
                contactForm.reset();
            });
        }
    }
});
