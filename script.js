// Language translations
const translations = {
    he: {
        home: "דף הבית",
        services: "שירותים",
        contact: "צור קשר",
        testimonials: "עדויות",
        about: "עלינו",
        heroTitle: "הפתרון לעסק שלך עם ניהול אוטומציה עסקית",
        heroSubtitle: "שירותי האוטומציה של Nolinx מעניקים לכם להפעיל את העסק בצורה אוטומטית ולחסוך תהליכים את התהליכים שלכם.",
        startNow: "התחל עכשיו",
        whatWeDo: "מה אנחנו עושים?",
        marketing: "שירותי אוטומציה לשיווק ומכירה",
        marketingDesc: "חיסכו אוטומציות שחוסכות את השיווק ומקצות את כוח האדם בשיווק.",
        business: "הפעלת תהליכים עסקיים",
        businessDesc: "קיצור על המטלות שחוסכות לכם את העבודה והניהול.",
        management: "פתרון ניהול העסק שלכם",
        managementDesc: "חברה שמתאימה את התפקידות לצמיחה שלכם.",
        contactTitle: "צור קשר",
        contactSubtitle: "מלא פרטים ונחזור אליך עם נציגי האוטומציה שלנו!",
        name: "שם מלא",
        email: "אימייל",
        phone: "טלפון",
        message: "הודעה",
        send: "שלח",
        testimonialsTitle: "עדויות לקוחות",
        aboutTitle: "עלינו",
        aboutContent: "אנחנו בנולינקס מתמחים בפתרונות אוטומציה לעסקים קטנים ובינוניים במטרה לייעל תהליכים ולהגדיל את הרווחיות שלכם.",
        footerRights: "כל הזכויות שמורות.",
        contactInfo: "צור קשר",
        phoneNumber: "טלפון:",
        emailAddress: "אימייל:",
        automationSolutions: "פתרונות אוטומציה עסקית",
        thankYou: "תודה שפנית אלינו!",
        detailsReceived: "הפרטים שלך התקבלו בהצלחה. נציג מטעמנו יחזור אליך בהקדם האפשרי.",
        close: "סגור",
        errorMessage: "אירעה שגיאה. אנא נסה שוב."
    },
    en: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        testimonials: "Testimonials",
        about: "About",
        heroTitle: "Your Business Solution with Business Automation Management",
        heroSubtitle: "Nolinx's automation services enable you to run your business automatically and save your processes.",
        startNow: "Start Now",
        whatWeDo: "What We Do",
        marketing: "Marketing & Sales Automation Services",
        marketingDesc: "Save automations that optimize your marketing manpower.",
        business: "Business Process Automation",
        businessDesc: "Shorten tasks that save you work and management.",
        management: "Business Management Solution",
        managementDesc: "A company that adapts roles to your growth.",
        contactTitle: "Contact Us",
        contactSubtitle: "Fill in your details and we'll get back to you with our automation representatives!",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send",
        testimonialsTitle: "Client Testimonials",
        aboutTitle: "About Us",
        aboutContent: "At Nolinx, we specialize in automation solutions for small and medium businesses with the goal of streamlining processes and increasing your profitability.",
        footerRights: "All rights reserved.",
        contactInfo: "Contact Information",
        phoneNumber: "Phone:",
        emailAddress: "Email:",
        automationSolutions: "Business Automation Solutions",
        thankYou: "Thank you for contacting us!",
        detailsReceived: "Your details have been successfully received. Our representative will contact you as soon as possible.",
        close: "Close",
        errorMessage: "An error occurred. Please try again."
    }
};

// Language state
let currentLang = 'he';

// DOM Elements
const languageToggle = document.getElementById('languageToggle');
const languageModal = document.getElementById('languageModal');
const langOptions = document.querySelectorAll('.lang-option');
const contactForm = document.querySelector('.contact-form');
const startNowBtn = document.getElementById('startNowBtn');
const backToTopBtn = document.getElementById('backToTop');

// Start Now Button Functionality
startNowBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// Back to Top Button Functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Function to directly toggle language without showing modal
function toggleLanguage() {
    currentLang = currentLang === 'he' ? 'en' : 'he';
    updateLanguage();
    languageToggle.textContent = currentLang === 'he' ? 'EN' : 'עב';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
}

// Language switching functionality
// Direct toggle on click for better UX
languageToggle.addEventListener('click', toggleLanguage);

// Keep modal option for those who prefer choosing from menu
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const newLang = option.dataset.lang;
        if (newLang !== currentLang) {
            currentLang = newLang;
            updateLanguage();
            languageToggle.textContent = newLang === 'he' ? 'EN' : 'עב';
            document.documentElement.lang = newLang;
            document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
        }
        languageModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === languageModal) {
        languageModal.style.display = 'none';
    }
});

// Comprehensive update of all text content based on selected language
function updateLanguage() {
    // Navigation
    document.querySelector('a[href="#home"]').textContent = translations[currentLang].home;
    document.querySelector('a[href="#services"]').textContent = translations[currentLang].services;
    document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contact;
    document.querySelector('a[href="#testimonials"]').textContent = translations[currentLang].testimonials;
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) aboutLink.textContent = translations[currentLang].about;

    // Hero section
    document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;
    document.querySelector('.cta-button').textContent = translations[currentLang].startNow;

    // Services section
    document.querySelector('.services h2').textContent = translations[currentLang].whatWeDo;
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = translations[currentLang].marketing;
    serviceCards[0].querySelector('p').textContent = translations[currentLang].marketingDesc;
    serviceCards[1].querySelector('h3').textContent = translations[currentLang].business;
    serviceCards[1].querySelector('p').textContent = translations[currentLang].businessDesc;
    serviceCards[2].querySelector('h3').textContent = translations[currentLang].management;
    serviceCards[2].querySelector('p').textContent = translations[currentLang].managementDesc;

    // Contact section
    document.querySelector('.contact h2').textContent = translations[currentLang].contactTitle;
    document.querySelector('#name').placeholder = translations[currentLang].name;
    document.querySelector('#email').placeholder = translations[currentLang].email;
    document.querySelector('#phone').placeholder = translations[currentLang].phone;
    document.querySelector('#message').placeholder = translations[currentLang].message;
    document.querySelector('.submit-button').textContent = translations[currentLang].send;

    // Testimonials section
    document.querySelector('.testimonials h2').textContent = translations[currentLang].testimonialsTitle;
    
    // About section (if it exists)
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutHeading = aboutSection.querySelector('h2');
        if (aboutHeading) aboutHeading.textContent = translations[currentLang].aboutTitle;
        const aboutText = aboutSection.querySelector('p');
        if (aboutText) aboutText.textContent = translations[currentLang].aboutContent;
    }
    
    // Footer
    const footerRights = document.querySelector('.footer-bottom p');
    if (footerRights) {
        const year = new Date().getFullYear();
        footerRights.innerHTML = `&copy; ${year} Nolinx. ${translations[currentLang].footerRights}`;
    }
    
    const footerContactTitle = document.querySelector('.footer-section:nth-child(2) h3');
    if (footerContactTitle) footerContactTitle.textContent = translations[currentLang].contactInfo;
    
    const footerPhone = document.querySelector('.footer-section:nth-child(2) p:nth-child(2)');
    if (footerPhone) footerPhone.textContent = `${translations[currentLang].phoneNumber} 03-1234567`;
    
    const footerEmail = document.querySelector('.footer-section:nth-child(2) p:nth-child(3)');
    if (footerEmail) footerEmail.textContent = `${translations[currentLang].emailAddress} info@nolinx.com`;
    
    const footerBusinessDesc = document.querySelector('.footer-section:first-child p');
    if (footerBusinessDesc) footerBusinessDesc.textContent = translations[currentLang].automationSolutions;
    
    // Thank you modal
    const thankYouTitle = document.querySelector('.thank-you-title');
    if (thankYouTitle) thankYouTitle.textContent = translations[currentLang].thankYou;
    
    const thankYouMessage = document.querySelector('.thank-you-message');
    if (thankYouMessage) thankYouMessage.textContent = translations[currentLang].detailsReceived;
    
    const closeModalBtn = document.querySelector('.close-modal-btn');
    if (closeModalBtn) closeModalBtn.textContent = translations[currentLang].close;
}

// Form submission handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const userName = formData.get('name');
        const userEmail = formData.get('email');
        const userPhone = formData.get('phone');
        const userMessage = formData.get('message') || '';

        // Display user details in confirmation modal
        document.getElementById('modalUserName').textContent = userName;
        document.getElementById('modalUserEmail').textContent = userEmail;
        document.getElementById('modalUserPhone').textContent = userPhone;
        
        // Send to Make
        fetch('https://hook.eu2.make.com/mbvnhnut6bs9i3rmbtuwgjvhpu608ber', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                phone: userPhone,
                message: userMessage
            })
        })
        .then(() => {
            const modal = document.getElementById('thankYouModal');
            modal.style.display = 'flex';
            createModalParticles();
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert(currentLang === 'he' ? translations[currentLang].errorMessage : translations[currentLang].errorMessage);
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === Advanced animations for service cards ===
const serviceCards = document.querySelectorAll('.service-card');
const animationClasses = ['jump', 'floating', 'wobble', 'rubberBand'];

// Initial jump effect on page load
setTimeout(() => {
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('active');
            setTimeout(() => {
                card.classList.remove('active');
            }, 1000);
        }, index * 200);
    });
}, 1000);

// Jump effect on card click
serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        const randomAnimation = animationClasses[Math.floor(Math.random() * animationClasses.length)];
        
        // Ensure animation restarts if clicked again
        this.classList.remove(...animationClasses);
        
        // Add small delay to allow animation reset
        setTimeout(() => {
            this.classList.add(randomAnimation);
            
            // Remove animation after it completes
            setTimeout(() => {
                this.classList.remove(randomAnimation);
            }, 1000);
        }, 10);
    });
});

// Automatic animation for cards periodically
setInterval(() => {
    const randomCard = serviceCards[Math.floor(Math.random() * serviceCards.length)];
    const randomAnimation = animationClasses[Math.floor(Math.random() * animationClasses.length)];
    
    randomCard.classList.remove(...animationClasses);
    
    setTimeout(() => {
        randomCard.classList.add(randomAnimation);
        
        setTimeout(() => {
            randomCard.classList.remove(randomAnimation);
        }, 1000);
    }, 10);
}, 5000);

// Animation for icons in cards - rotation on hover
const serviceIcons = document.querySelectorAll('.service-card i');
serviceIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.animation = 'spin 0.8s ease-in-out';
        this.style.transform = 'scale(1.3)';
        this.style.color = '#00ffff';
        this.style.textShadow = '0 0 15px #00ffff';
    });
    
    icon.addEventListener('animationend', function() {
        this.style.animation = '';
    });
    
    icon.addEventListener('mouseout', function() {
        this.style.transform = '';
        this.style.color = '';
        this.style.textShadow = '';
    });
});

// === Bounce effect for headings ===
const headings = document.querySelectorAll('h1, h2, h3');

headings.forEach(heading => {
    heading.addEventListener('mouseover', function() {
        this.style.animation = 'rubberBand 1s ease';
        this.style.color = '#00ffff';
        this.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
    });
    
    heading.addEventListener('animationend', function() {
        this.style.animation = '';
    });
    
    heading.addEventListener('mouseout', function() {
        this.style.color = '';
        this.style.textShadow = '';
    });
});

// Additional functions for advanced animations
function createEnhancedParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create particle container if it doesn't exist
    let particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        hero.appendChild(particlesContainer);
    }
    
    // Number of particles based on screen size
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        // Create particle element
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Set random attributes
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Set style
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity.toString();
        
        // Set custom CSS variables
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        const midOpacity = Math.random() * 0.3 + 0.1;
        
        // Set animation with CSS Variables
        particle.style.setProperty('--move-x', `${moveX}px`);
        particle.style.setProperty('--move-y', `${moveY}px`);
        particle.style.setProperty('--initial-opacity', opacity.toString());
        particle.style.setProperty('--mid-opacity', midOpacity.toString());
        
        // Set animation
        particle.style.animation = `particleMove ${duration}s infinite ease-in-out`;
        particle.style.animationDelay = `${delay}s`;
        
        // Add to container
        particlesContainer.appendChild(particle);
    }
}

// Function to create ripple effect on click
function createRippleEffect() {
    const buttons = document.querySelectorAll('.cta-button, .submit-button, .service-card');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove old ripples
            const oldRipple = this.querySelector('.ripple');
            if (oldRipple) {
                oldRipple.remove();
            }
            
            // Create new element for effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            // Find click position relative to element
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            
            // Remove effect after animation completes
            ripple.addEventListener('animationend', function() {
                this.remove();
            });
        });
    });
}

// Function to add entrance animations to elements
function addEntranceAnimations() {
    // Observer object for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check which type of animation to apply
                if (entry.target.classList.contains('right-animation')) {
                    entry.target.classList.add('animate-in-right');
                } else if (entry.target.classList.contains('left-animation')) {
                    entry.target.classList.add('animate-in-left');
                } else {
                    entry.target.classList.add('animate-in-bottom');
                }
                
                // Remove observer from the element
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Add classes to various elements
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach((title, index) => {
        title.style.opacity = '0';
        if (index % 2 === 0) {
            title.classList.add('right-animation');
        } else {
            title.classList.add('left-animation');
        }
        observer.observe(title);
    });
    
    // Add animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add animation to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.classList.add('right-animation');
        observer.observe(card);
    });
}

// Function for floating header effect
function floatingHeaderEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;
    
    window.addEventListener('mousemove', e => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        heroTitle.style.textShadow = `
            ${moveX/5}px ${moveY/5}px 10px rgba(0, 212, 255, 0.5)
        `;
    });
}

// Function to create particles in confirmation modal
function createModalParticles() {
    const container = document.getElementById('modalParticles');
    if (!container) return;
    
    // Clear previous particles
    container.innerHTML = '';
    
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        
        // Basic style for particle
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(0, 212, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        particle.style.boxShadow = '0 0 5px rgba(0, 212, 255, 0.5)';
        
        // Random animation
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        // Create specific keyframes for each particle
        const keyframesName = `moveModalParticle${i}`;
        const directionX = Math.random() > 0.5 ? '+' : '-';
        const directionY = Math.random() > 0.5 ? '+' : '-';
        const distance = Math.random() * 100 + 50;
        
        const keyframes = `
            @keyframes ${keyframesName} {
                0% {
                    transform: translate(0, 0);
                    opacity: ${Math.random() * 0.7 + 0.3};
                }
                50% {
                    transform: translate(${directionX}${distance}px, ${directionY}${distance}px);
                    opacity: ${Math.random() * 0.3 + 0.1};
                }
                100% {
                    transform: translate(0, 0);
                    opacity: ${Math.random() * 0.7 + 0.3};
                }
            }
        `;
        
        // Add keyframes to DOM
        const styleElement = document.createElement('style');
        styleElement.textContent = keyframes;
        document.head.appendChild(styleElement);
        
        // Apply animation
        particle.style.animation = `${keyframesName} ${duration}s infinite ease-in-out ${delay}s`;
        
        container.appendChild(particle);
    }
}

// Run all animations on page load
window.addEventListener('load', () => {
    createEnhancedParticles();
    createRippleEffect();
    addEntranceAnimations();
    floatingHeaderEffect();
    
    // Add 3D effect to cards on hover
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Softer animation for contact form
    const contactObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Animation only for form title
            const contactTitle = document.querySelector('.contact h2');
            if (contactTitle) {
                contactTitle.style.animation = 'bounceIn 1s cubic-bezier(0.22, 0.61, 0.36, 1)';
            }
            
            // Add glowing border effect to form
            if (contactForm) {
                contactForm.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
                contactForm.style.transition = 'all 0.5s ease';
            }
            
            // Gradual appearance of send button
            const submitButton = document.querySelector('.submit-button');
            if (submitButton) {
                submitButton.style.opacity = '0';
                submitButton.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    submitButton.style.opacity = '1';
                    submitButton.style.transform = 'translateY(0)';
                    submitButton.style.transition = 'all 0.5s ease';
                }, 300);
            }
            
            contactObserver.disconnect();
        }
    }, { threshold: 0.5 });

    if (contactForm) {
        contactObserver.observe(contactForm);
    }

    // Enhanced focus effect for form fields
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'all 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Animations for stars in testimonials section
    document.querySelectorAll('.stars').forEach(starsDiv => {
        starsDiv.addEventListener('mouseover', function() {
            this.style.color = '#FFC107';
            this.style.transform = 'scale(1.1)';
            this.style.textShadow = '0 0 10px rgba(255, 193, 7, 0.7)';
            
            // Vibration animation for stars
            const stars = this.textContent.split('');
            this.textContent = '';
            
            stars.forEach((star, index) => {
                const span = document.createElement('span');
                span.textContent = star;
                span.style.display = 'inline-block';
                span.style.animation = `rubberBand 1s ${index * 0.1}s`;
                this.appendChild(span);
            });
        });
        
        starsDiv.addEventListener('mouseout', function() {
            this.style.color = '#FFD700';
            this.style.transform = '';
            this.style.textShadow = '';
        });
    });

    // Animation for images in testimonial cards
    document.querySelectorAll('.client-info img').forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%';
            this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.7)';
            this.style.transition = 'all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.borderRadius = '50%';
            this.style.boxShadow = '';
        });
    });
});

// Close confirmation modal
document.addEventListener('DOMContentLoaded', function() {
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const modal = document.getElementById('thankYouModal');
    
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside card
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Call updateLanguage to set initial language state
    updateLanguage();
});