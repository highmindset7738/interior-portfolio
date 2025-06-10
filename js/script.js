// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Page transition effect
    const pageTransition = document.querySelector('.page-transition');
    
    if (pageTransition) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                pageTransition.classList.add('active');
            }, 500);
        });
    }
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Scale cursor on hover over links and buttons
        const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .social-link');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.opacity = '0.5';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.opacity = '1';
            });
        });
    }
    
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Initial check for elements in viewport
    checkFade();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkFade);
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('appear');
            }
        });
    }
    
    // No form submission code needed anymore
    
    // Portfolio item hover effect enhancement
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '0';
        });
    });
    
    // Animated title effect
    const animatedTitle = document.querySelector('.animated-title');
    if (animatedTitle) {
        setTimeout(() => {
            animatedTitle.classList.add('active');
        }, 1000);
    }
});