// ==================== DOM Elements ====================
const loaderWrapper = document.querySelector('.loader-wrapper');
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const backToTop = document.getElementById('backToTop');
const statNumbers = document.querySelectorAll('.stat-number[data-count]');

// ==================== Loading Screen ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        loaderWrapper.classList.add('hidden');
    }, 1000);
});

// ==================== Header Scroll Effect ====================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
    
    // Back to top button
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Scroll animations
    handleScrollAnimations();
    
    // Active nav link
    updateActiveNavLink();
});

// ==================== Mobile Menu Toggle ====================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Back to Top ====================
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== Counter Animation ====================
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;
    
    const statsSection = document.querySelector('.hero-stats');
    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
}

// Call on load and scroll
window.addEventListener('load', animateCounters);
window.addEventListener('scroll', animateCounters);

// ==================== Scroll Animations ====================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            element.style.opacity = '1';
            element.style.animation = `${element.classList.contains('fade-in-left') ? 'fadeInLeft' : 
                                        element.classList.contains('fade-in-right') ? 'fadeInRight' : 
                                        'fadeInUp'} 0.8s ease forwards`;
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
    });
    
    handleScrollAnimations();
});

// ==================== Active Nav Link ====================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ==================== Intersection Observer for Better Performance ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card, .review-card, .process-step').forEach(card => {
    observer.observe(card);
});

// ==================== Form Validation (if form is added) ====================
// This is a placeholder for future form functionality
function validateContactForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim() === '') {
        errors.push('Name is required');
    }
    
    if (!formData.phone || formData.phone.trim() === '') {
        errors.push('Phone number is required');
    }
    
    return errors;
}

// ==================== Dynamic Year in Footer ====================
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
    }
});

// ==================== Prevent Default on Empty Links ====================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// ==================== Performance: Debounce Scroll Events ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    handleScrollAnimations();
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ==================== Lazy Loading for Images ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== Add Smooth Hover Effects to Cards ====================
document.querySelectorAll('.service-card, .review-card, .info-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== Print Debugging Info ====================
console.log('%c🚗 Pakistan Car AC Website Loaded Successfully! 🚗', 
    'color: #e63946; font-size: 16px; font-weight: bold;');
console.log('%cWebsite Features:', 
    'color: #1e3a5f; font-size: 14px; font-weight: bold;');
console.log('✓ Responsive Design\n✓ Smooth Animations\n✓ Mobile Menu\n✓ Counter Animations\n✓ Lazy Loading\n✓ Performance Optimized');

// ==================== Accessibility Enhancements ====================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Scroll to top on Home key
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ==================== Service Worker Registration (Optional) ====================
// Uncomment to enable offline functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/

// ==================== Google Analytics (Placeholder) ====================
// Add your Google Analytics tracking code here
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');

// ==================== WhatsApp Click Tracking ====================
document.querySelector('.whatsapp-float')?.addEventListener('click', () => {
    console.log('WhatsApp button clicked');
    // Add analytics tracking here if needed
});

// ==================== Call Button Tracking ====================
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Call button clicked:', link.href);
        // Add analytics tracking here if needed
    });
});

// ==================== Initialize Everything ====================
function init() {
    // Set initial states
    updateActiveNavLink();
    handleScrollAnimations();
    
    // Log initialization
    console.log('%cPakistan Car AC - Ready to serve!', 
        'color: #198754; font-size: 12px; font-weight: bold;');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
