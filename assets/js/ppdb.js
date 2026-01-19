/**
 * PPDB JavaScript - MI Nurul Falah
 * Handles PPDB page specific interactions: accordion, CTA highlighting, smooth scroll
 */

document.addEventListener('DOMContentLoaded', function() {
    // Only run if we're on the PPDB page
    if (window.location.pathname.includes('ppdb.html') || window.location.pathname.includes('ppdb')) {
        initPPDBInteractions();
    }
});

function initPPDBInteractions() {
    // Initialize accordion for requirements section
    initRequirementsAccordion();
    
    // Initialize CTA button highlighting
    initCTAHighlighting();
    
    // Initialize smooth scroll between sections
    initPPDBSmoothScroll();
    
    // Initialize contact button interactions
    initContactButtons();
}

/**
 * Initialize accordion functionality for requirements section
 */
function initRequirementsAccordion() {
    const requirementItems = document.querySelectorAll('.requirement-item');
    
    requirementItems.forEach((item, index) => {
        const header = item.querySelector('h3');
        const content = item.querySelector('ul') || item.querySelector('p');
        
        if (header && content) {
            // Make header clickable
            header.style.cursor = 'pointer';
            header.style.position = 'relative';
            
            // Add expand/collapse icon
            let icon = header.querySelector('.accordion-icon');
            if (!icon) {
                icon = document.createElement('span');
                icon.className = 'accordion-icon';
                icon.textContent = '+';
                icon.style.cssText = `
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: transform 0.3s ease;
                    font-size: 1.2em;
                    font-weight: bold;
                `;
                header.appendChild(icon);
            }
            
            // Set initial state (first item expanded, others collapsed)
            const isExpanded = index === 0;
            toggleAccordionItem(item, header, content, icon, isExpanded);
            
            // Add click event
            header.addEventListener('click', function() {
                const isCurrentlyExpanded = content.style.display !== 'none';
                toggleAccordionItem(item, header, content, icon, !isCurrentlyExpanded);
            });
        }
    });
}

function toggleAccordionItem(item, header, content, icon, isExpanded) {
    if (isExpanded) {
        content.style.display = 'block';
        item.style.backgroundColor = 'var(--color-white)';
        icon.style.transform = 'translateY(-50%) rotate(45deg)';
    } else {
        content.style.display = 'none';
        item.style.backgroundColor = 'var(--color-gray-light)';
        icon.style.transform = 'translateY(-50%) rotate(0deg)';
    }
}

/**
 * Initialize CTA button highlighting effects
 */
function initCTAHighlighting() {
    const ctaButtons = document.querySelectorAll('.cta-button.primary, .cta-buttons .cta-button');
    
    ctaButtons.forEach(button => {
        // Add pulse animation on page load
        setTimeout(() => {
            button.classList.add('cta-highlight');
        }, 1000);
        
        // Remove highlight on hover (user noticed it)
        button.addEventListener('mouseenter', function() {
            this.classList.remove('cta-highlight');
        });
        
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .cta-highlight {
            animation: pulse 2s infinite;
            box-shadow: 0 0 0 0 rgba(244, 224, 77, 0.7);
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(244, 224, 77, 0.7);
            }
            70% {
                box-shadow: 0 0 0 15px rgba(244, 224, 77, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(244, 224, 77, 0);
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Initialize smooth scrolling between PPDB sections
 */
function initPPDBSmoothScroll() {
    // Find all internal links that point to sections on the page
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate offset (account for sticky header)
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const offset = 20; // Extra spacing
                const targetPosition = targetElement.offsetTop - headerHeight - offset;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // Handle scrollspy - highlight current section in navigation
    initScrollSpy();
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollOffset = 100; // Offset before section becomes "active"
    
    function updateActiveSection() {
        const scrollPosition = window.pageYOffset + scrollOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Update active state in navigation if needed
                const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    // Remove active class from all links
                    document.querySelectorAll('a[href^="#"]').forEach(link => {
                        link.classList.remove('active-section');
                    });
                    correspondingLink.classList.add('active-section');
                }
            }
        });
    }
    
    // Throttle scroll events for performance
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                updateActiveSection();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
}

/**
 * Initialize contact button interactions (WhatsApp, Google Form)
 */
function initContactButtons() {
    const whatsappButton = document.querySelector('a[href*="wa.me"]');
    const googleFormButton = document.querySelector('a[href*="docs.google.com"]') || 
                            document.querySelector('a[href*="forms.gle"]');
    
    // WhatsApp button confirmation
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            // Add confirmation for better UX
            const confirmWhatsApp = confirm('Anda akan diarahkan ke WhatsApp untuk pendaftaran. Lanjutkan?');
            if (!confirmWhatsApp) {
                e.preventDefault();
            }
        });
    }
    
    // Google Form button confirmation
    if (googleFormButton) {
        googleFormButton.addEventListener('click', function(e) {
            const confirmForm = confirm('Anda akan diarahkan ke Google Form untuk pendaftaran. Lanjutkan?');
            if (!confirmForm) {
                e.preventDefault();
            }
        });
    }
    
    // Add analytics tracking (if needed)
    addCTATracking();
}

function addCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track CTA clicks (you can integrate with Google Analytics here)
            const buttonText = this.textContent.trim();
            const pageName = 'PPDB';
            
            console.log(`CTA Clicked: ${buttonText} on ${pageName} page`);
            
            // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText });
        });
    });
}

/**
 * Utility functions for PPDB interactions
 */
const PPDBUtils = {
    // Get current registration phase based on date
    getCurrentPhase: function() {
        const now = new Date();
        const phases = [
            { name: 'Gelombang 1', start: '2024-01-15', end: '2024-02-15' },
            { name: 'Gelombang 2', start: '2024-02-16', end: '2024-03-15' },
            { name: 'Gelombang 3', start: '2024-03-16', end: '2024-04-15' }
        ];
        
        for (let phase of phases) {
            const startDate = new Date(phase.start);
            const endDate = new Date(phase.end);
            if (now >= startDate && now <= endDate) {
                return phase.name;
            }
        }
        
        return 'Belum dibuka';
    },
    
    // Format deadline countdown
    formatDeadline: function(deadline) {
        const now = new Date();
        const deadlineDate = new Date(deadline);
        const diff = deadlineDate - now;
        
        if (diff <= 0) return 'Telah berakhir';
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (days > 0) return `${days} hari lagi`;
        if (hours > 0) return `${hours} jam lagi`;
        return 'Beberapa jam lagi';
    }
};