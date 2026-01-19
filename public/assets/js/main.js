/**
 * Main JavaScript - MI Nurul Falah
 * General UX enhancements and utilities
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scroll behavior
    function initSmoothScroll() {
        // Enhanced smooth scroll with better offset calculation
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const offset = 20; // Extra spacing
                    const targetPosition = targetElement.offsetTop - headerHeight - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Simple hero slider functionality
    function initHeroSlider() {
        const heroSections = document.querySelectorAll('.hero');
        
        heroSections.forEach(hero => {
            // Check if hero has multiple slides
            const slides = hero.querySelectorAll('.slide');
            if (slides.length <= 1) return;

            let currentSlide = 0;
            const slideInterval = 5000; // 5 seconds
            
            // Create navigation dots if they don't exist
            let dotsContainer = hero.querySelector('.slider-dots');
            if (!dotsContainer) {
                dotsContainer = document.createElement('div');
                dotsContainer.className = 'slider-dots';
                hero.appendChild(dotsContainer);
            }

            // Create dots
            slides.forEach((slide, index) => {
                const dot = document.createElement('button');
                dot.className = 'dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });

            const dots = dotsContainer.querySelectorAll('.dot');

            function showSlide(index) {
                slides.forEach(slide => slide.style.display = 'none');
                dots.forEach(dot => dot.classList.remove('active'));
                
                slides[index].style.display = 'block';
                dots[index].classList.add('active');
            }

            function goToSlide(index) {
                currentSlide = index;
                showSlide(currentSlide);
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            // Auto-play
            const slideTimer = setInterval(nextSlide, slideInterval);

            // Pause on hover
            hero.addEventListener('mouseenter', () => clearInterval(slideTimer));
            hero.addEventListener('mouseleave', () => {
                slideTimer = setInterval(nextSlide, slideInterval);
            });

            // Initialize first slide
            showSlide(0);
        });
    }

    // Scroll animations for elements
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.card, .highlight-cards .card, .news-item, .gallery-item');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // Utility function for element visibility
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Back to top button functionality
    function initBackToTop() {
        // Create back to top button if it doesn't exist
        let backToTopBtn = document.querySelector('.back-to-top');
        
        if (!backToTopBtn) {
            backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.setAttribute('aria-label', 'Kembali ke atas');
            document.body.appendChild(backToTopBtn);
        }

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize all functions
    initSmoothScroll();
    initHeroSlider();
    initScrollAnimations();
    initBackToTop();
});

// Utility functions
const Utils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format date
    formatDate: function(date) {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Validate email
    isValidEmail: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
};