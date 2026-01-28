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

    // 8. Hero Parallax Effect
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            if (scrollValue < 600) {
                // Move background slower than scroll
                heroSection.style.backgroundPosition = `center ${scrollValue * 0.5}px`;
            }
        });
    }

    // 9. Lightbox Gallery Feature
    const galleryImages = document.querySelectorAll('.gallery-item img');
    if (galleryImages.length > 0) {
        // Create Lightbox DOM
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-btn lightbox-close" aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <button class="lightbox-btn lightbox-prev" aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="lightbox-btn lightbox-next" aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <div class="lightbox-content">
                <div class="lightbox-loader"></div>
                <img src="" alt="Gallery Preview" class="lightbox-img" style="display: none;">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);

        // Elements
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const loader = lightbox.querySelector('.lightbox-loader');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        let currentIndex = 0;

        // Functions
        const showImage = (index) => {
            if (index < 0) index = galleryImages.length - 1;
            if (index >= galleryImages.length) index = 0;
            currentIndex = index;

            const targetImg = galleryImages[currentIndex];
            const src = targetImg.getAttribute('src');
            const alt = targetImg.getAttribute('alt');

            // 1. Fade out current image
            lightboxImg.classList.add('fade-out');

            // 2. Wait for fade out, then swap source
            setTimeout(() => {
                lightboxImg.style.display = 'none';
                loader.style.display = 'block';

                lightboxImg.src = src;
                lightboxCaption.textContent = alt;

                // 3. When new image loads
                lightboxImg.onload = () => {
                    loader.style.display = 'none';
                    lightboxImg.style.display = 'block';

                    // Trigger reflow to restart transition
                    void lightboxImg.offsetWidth;

                    lightboxImg.classList.remove('fade-out');
                };
            }, 200); // Matches CSS transition duration
        };

        const openLightbox = (index) => {
            lightbox.classList.add('active');
            showImage(index);
            document.body.style.overflow = 'hidden'; // Prevent scroll
        };

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Event Listeners
        galleryImages.forEach((img, index) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => openLightbox(index));
        });

        closeBtn.addEventListener('click', closeLightbox);

        // Close on backdrop click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Navigation
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex - 1);
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex + 1);
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        });
    }


});
