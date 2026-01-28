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
    backToTop.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="back-to-top-icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`;
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

        // Helper to find next visible image for filtered gallery
        const getNextVisibleIndex = (currentIndex, direction) => {
            let nextIndex = currentIndex;
            let loopCount = 0;
            const total = galleryImages.length;

            do {
                if (direction === 'next') {
                    nextIndex = (nextIndex + 1) % total;
                } else {
                    nextIndex = (nextIndex - 1 + total) % total;
                }

                const img = galleryImages[nextIndex];
                // Check if the image's container is visible
                const wrapper = img.closest('.gallery-item');
                if (wrapper && wrapper.style.display !== 'none') {
                    return nextIndex;
                }
                loopCount++;
            } while (loopCount < total);

            return currentIndex; // Fallback if all hidden (shouldn't happen)
        };

        // Navigation
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newIndex = getNextVisibleIndex(currentIndex, 'prev');
            showImage(newIndex);
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newIndex = getNextVisibleIndex(currentIndex, 'next');
            showImage(newIndex);
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') {
                const newIndex = getNextVisibleIndex(currentIndex, 'prev');
                showImage(newIndex);
            }
            if (e.key === 'ArrowRight') {
                const newIndex = getNextVisibleIndex(currentIndex, 'next');
                showImage(newIndex);
            }
        });
    }

    // 10. Teacher Carousel (Ethereal Theme)
    // 10. Ethereal Teachers Carousel (MI & RA)
    const teachersDataMI = [
        { name: "Ust. Fulan, S.Pd.I", role: "Kepala Sekolah", subject: "Manajemen", img: "https://via.placeholder.com/150/1B5E20/FFFFFF?text=Kepsek" },
        { name: "Ust. Ahmad", role: "Wali Kelas 1", subject: "Tematik", img: "https://via.placeholder.com/150/2E7D32/FFFFFF?text=Guru+1" },
        { name: "Ustzh. Siti", role: "Guru Quran", subject: "Tahfidz", img: "https://via.placeholder.com/150/388E3C/FFFFFF?text=Guru+2" },
        { name: "Ust. Budi", role: "Guru PJOK", subject: "Olahraga", img: "https://via.placeholder.com/150/43A047/FFFFFF?text=Guru+3" },
        { name: "Ustzh. Lina", role: "Guru Bahasa", subject: "B. Arab & Inggris", img: "https://via.placeholder.com/150/4CAF50/FFFFFF?text=Guru+4" },
        { name: "Ust. Dedi", role: "Guru PAI", subject: "Fiqih & Aqidah", img: "https://via.placeholder.com/150/66BB6A/FFFFFF?text=Guru+5" }
    ];

    const teachersDataRA = [
        { name: "Bunda Rina", role: "Kepala RA", subject: "Sentra Balok", img: "https://via.placeholder.com/150/F9A825/FFFFFF?text=KaRA" },
        { name: "Bunda Dewi", role: "Guru Kelompok A", subject: "Sentra Seni", img: "https://via.placeholder.com/150/FBC02D/FFFFFF?text=GuruA" },
        { name: "Bunda Nur", role: "Guru Kelompok B", subject: "Sentra Persiapan", img: "https://via.placeholder.com/150/FDD835/FFFFFF?text=GuruB" },
        { name: "Bunda Sari", role: "Guru Pendamping", subject: "Sentra Ibadah", img: "https://via.placeholder.com/150/FFEB3B/FFFFFF?text=GuruC" }
    ];

    // Helper to setup a carousel
    const setupCarousel = (trackId, data) => {
        const track = document.getElementById(trackId);
        if (!track) return;

        // Render
        track.innerHTML = data.map(t => `
            <div class="ethereal-card">
                <div class="ethereal-img-box">
                    <img src="${t.img}" alt="${t.name}">
                </div>
                <h3>${t.name}</h3>
                <p>${t.role}</p>
                <div class="ethereal-subject">${t.subject}</div>
            </div>
        `).join('');

        // Buttons (scoped to the parent wrapper of the track)
        const wrapper = track.closest('.ethereal-carousel-wrapper');
        const prevBtn = wrapper.querySelector('.prev');
        const nextBtn = wrapper.querySelector('.next');

        const scroll = (direction) => {
            const card = track.querySelector('.ethereal-card');
            if (card) {
                const scrollAmount = card.offsetWidth + 24;
                const sign = direction === 'next' ? 1 : -1;
                track.scrollBy({ left: scrollAmount * sign, behavior: 'smooth' });
            }
        };

        if (prevBtn) prevBtn.addEventListener('click', () => scroll('prev'));
        if (nextBtn) nextBtn.addEventListener('click', () => scroll('next'));

        // Observer for Center Highlight
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('active', entry.isIntersecting);
            });
        }, {
            root: track,
            threshold: 0.5,
            rootMargin: "0px -25% 0px -25%"
        });

        track.querySelectorAll('.ethereal-card').forEach(card => observer.observe(card));
    };

    // Initialize potential carousels
    setupCarousel('etherealTrack', teachersDataMI);   // For Profile MI
    setupCarousel('etherealTrackRA', teachersDataRA); // For Unit RA

    // 11. Gallery Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Active class
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === category) {
                        item.style.display = 'block';
                        // Use a timeout to allow display:block to apply before opacity transition if wanted
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    // 12. PPDB Level Switching (Fix for missing logic)
    const ppdbTabs = document.querySelectorAll('.level-tab');
    const ppdbContents = document.querySelectorAll('.ppdb-tab-content');

    if (ppdbTabs.length > 0) {
        ppdbTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                // Prevent default anchor behavior if any (though these are buttons)
                e.preventDefault();

                // 1. Update Active Tab UI
                ppdbTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // 2. Switch Content
                const target = tab.getAttribute('data-target'); // 'mi' or 'ra'

                ppdbContents.forEach(content => {
                    // Start fade out/hide
                    content.style.display = 'none';
                    content.classList.remove('active'); // If using CSS for animations
                });

                const targetContent = document.getElementById(`ppdb-${target}`);
                if (targetContent) {
                    targetContent.style.display = 'block';
                    // Optional: Trigger reflow for fade-in animation
                    setTimeout(() => {
                        targetContent.classList.add('active');
                    }, 10);
                }
            });
        });
    }
});
