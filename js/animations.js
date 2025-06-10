// Advanced Animation Controls
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.05;
                const x = (mouseX - 0.5) * speed * 100;
                const y = (mouseY - 0.5) * speed * 100;
                
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
    
    // Skill animation
    const skillItems = document.querySelectorAll('.skill-list li');
    const contactItems = document.querySelectorAll('.contact-item');
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observe skill items
    skillItems.forEach((item, index) => {
        // Add delay based on index
        item.style.animationDelay = `${0.1 * index}s`;
        observer.observe(item);
    });
    
    // Observe contact items
    contactItems.forEach((item, index) => {
        item.style.animationDelay = `${0.2 * index}s`;
        observer.observe(item);
    });
    
    // Portfolio hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Text typing effect for hero section
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add scroll indicator
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '<div class="mouse"></div>';
        hero.appendChild(scrollIndicator);
        
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add decorative elements
    const addDecorations = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                const decoration = document.createElement('div');
                decoration.className = 'decoration circle top-right';
                section.appendChild(decoration);
            } else {
                const decoration = document.createElement('div');
                decoration.className = 'decoration circle bottom-left';
                section.appendChild(decoration);
            }
        });
    };
    
    addDecorations();
});