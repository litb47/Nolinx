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

// Function for floating header effect
function floatingHeaderEffect() {
    const heroTitle = document.querySelector('.hero h1');
    const bigLogo = document.querySelector('.big-logo');
    
    if (!heroTitle && !bigLogo) return;
    
    window.addEventListener('mousemove', e => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        if (heroTitle) {
            heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            heroTitle.style.textShadow = `
                ${moveX/5}px ${moveY/5}px 10px rgba(0, 212, 255, 0.5)
            `;
        }
        
        if (bigLogo) {
            bigLogo.style.transform = `translate(${moveX * 0.7}px, ${moveY * 0.7}px) scale(1.05)`;
        }
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
    
    // Add animation to team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transitionDelay = `${index * 0.2}s`;
        member.classList.add(index % 2 === 0 ? 'left-animation' : 'right-animation');
        observer.observe(member);
    });
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
}// Language translations
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
        aboutIntro: "אנחנו בנולינקס מתמחים בפתרונות אוטומציה לעסקים קטנים ובינוניים במטרה לייעל תהליכים ולהגדיל את הרווחיות שלכם.",
        founder: "שם שלך",
        founderPosition: "מייסד ומנכ\"ל",
        founderBio: "כאן יופיע טקסט קצר עליך, רקע מקצועי, ניסיון או תחומי מומחיות. מומלץ 2-3 שורות קצרות.",
        partner: "שם השותפה",
        partnerPosition: "שותפה ומנהלת טכנולוגיות",
        partnerBio: "כאן יופיע טקסט קצר על השותפה שלך, רקע מקצועי, ניסיון או תחומי מומחיות. מומלץ 2-3 שורות קצרות.",
        missionTitle: "המשימה שלנו",
        missionText: "המשימה שלנו היא לאפשר לעסקים להתמקד במה שחשוב באמת - צמיחה ויצירת ערך ללקוחות. אנחנו מאמינים שאוטומציה חכמה מאפשרת לעסקים להשתחרר ממשימות חוזרות ולהתמקד באסטרטגיה וחדשנות.",
        footerRights: "כל הזכויות שמורות.",
        contactInfo: "צור קשר",
        phoneNumber: "טלפון:",
        emailAddress: "אימייל:",
        automationSolutions: "פתרונות אוטומציה עסקית",
        thankYou: "תודה שפנית אלינו!",
        detailsReceived: "הפרטים שלך התקבלו בהצלחה. נציג מטעמנו יחזור אליך בהקדם האפשרי.",
        close: "סגור",
        errorMessage: "אירעה שגיאה. אנא נסה שוב."
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
        const modalUserName = document.getElementById('modalUserName');
        if (modalUserName) modalUserName.textContent = userName;
        
        const modalUserEmail = document.getElementById('modalUserEmail');
        if (modalUserEmail) modalUserEmail.textContent = userEmail;
        
        const modalUserPhone = document.getElementById('modalUserPhone');
        if (modalUserPhone) modalUserPhone.textContent = userPhone;
        
        // Send to Make
        fetch('https://hook.eu2.make.com/hm86a1f61q26j1h6wbp4x2v15mqpcfox', {
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
            if (modal) {
                modal.style.display = 'flex';
                createModalParticles();
                contactForm.reset();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert(translations[currentLang].errorMessage);
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
}}, 5000);

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

// הפעלת פונקציות ההתאמה בטעינה ובשינוי גודל
window.addEventListener('load', () => {
    adjustFontSizes();
    adjustProfileImageHeight();
    adjustCardHeights();
    updateLanguage();
});

window.addEventListener('resize', () => {
    adjustFontSizes();
    adjustProfileImageHeight();
    adjustCardHeights();
});

// Comprehensive update of all text content based on selected language
function updateLanguage() {
    // Navigation
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) homeLink.textContent = translations[currentLang].home;
    
    const servicesLink = document.querySelector('a[href="#services"]');
    if (servicesLink) servicesLink.textContent = translations[currentLang].services;
    
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) contactLink.textContent = translations[currentLang].contact;
    
    const testimonialsLink = document.querySelector('a[href="#testimonials"]');
    if (testimonialsLink) testimonialsLink.textContent = translations[currentLang].testimonials;
    
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) aboutLink.textContent = translations[currentLang].about;

    // Hero section
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = translations[currentLang].heroTitle;
    
    const heroText = document.querySelector('.hero p');
    if (heroText) heroText.textContent = translations[currentLang].heroSubtitle;
    
    const startNowBtn = document.querySelector('.cta-button');
    if (startNowBtn) startNowBtn.textContent = translations[currentLang].startNow;

    // Services section
    const servicesHeading = document.querySelector('.services h2');
    if (servicesHeading) servicesHeading.textContent = translations[currentLang].whatWeDo;
    
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length >= 3) {
        const marketingTitle = serviceCards[0].querySelector('h3');
        if (marketingTitle) marketingTitle.textContent = translations[currentLang].marketing;
        
        const marketingDesc = serviceCards[0].querySelector('p');
        if (marketingDesc) marketingDesc.textContent = translations[currentLang].marketingDesc;
        
        const businessTitle = serviceCards[1].querySelector('h3');
        if (businessTitle) businessTitle.textContent = translations[currentLang].business;
        
        const businessDesc = serviceCards[1].querySelector('p');
        if (businessDesc) businessDesc.textContent = translations[currentLang].businessDesc;
        
        const managementTitle = serviceCards[2].querySelector('h3');
        if (managementTitle) managementTitle.textContent = translations[currentLang].management;
        
        const managementDesc = serviceCards[2].querySelector('p');
        if (managementDesc) managementDesc.textContent = translations[currentLang].managementDesc;
    }

    // Contact section
    const contactHeading = document.querySelector('.contact h2');
    if (contactHeading) contactHeading.textContent = translations[currentLang].contactTitle;
    
    const nameInput = document.querySelector('#name');
    if (nameInput) nameInput.placeholder = translations[currentLang].name;
    
    const emailInput = document.querySelector('#email');
    if (emailInput) emailInput.placeholder = translations[currentLang].email;
    
    const phoneInput = document.querySelector('#phone');
    if (phoneInput) phoneInput.placeholder = translations[currentLang].phone;
    
    const messageInput = document.querySelector('#message');
    if (messageInput) messageInput.placeholder = translations[currentLang].message;
    
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) submitButton.textContent = translations[currentLang].send;

    // Testimonials section
    const testimonialsHeading = document.querySelector('.testimonials h2');
    if (testimonialsHeading) testimonialsHeading.textContent = translations[currentLang].testimonialsTitle;
    
    // About section with team members
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutTitle = aboutSection.querySelector('h2');
        if (aboutTitle) aboutTitle.textContent = translations[currentLang].aboutTitle;
        
        const aboutIntro = aboutSection.querySelector('.about-intro');
        if (aboutIntro) aboutIntro.textContent = translations[currentLang].aboutIntro;
        
        const teamMembers = aboutSection.querySelectorAll('.team-member');
        if (teamMembers.length >= 2) {
            // First team member (Founder)
            const founderName = teamMembers[0].querySelector('h3');
            if (founderName) founderName.textContent = translations[currentLang].founder;
            
            const founderPosition = teamMembers[0].querySelector('.position');
            if (founderPosition) founderPosition.textContent = translations[currentLang].founderPosition;
            
            const founderBio = teamMembers[0].querySelector('.bio');
            if (founderBio) founderBio.textContent = translations[currentLang].founderBio;
            
            // Second team member (Partner)
            const partnerName = teamMembers[1].querySelector('h3');
            if (partnerName) partnerName.textContent = translations[currentLang].partner;
            
            const partnerPosition = teamMembers[1].querySelector('.position');
            if (partnerPosition) partnerPosition.textContent = translations[currentLang].partnerPosition;
            
            const partnerBio = teamMembers[1].querySelector('.bio');
            if (partnerBio) partnerBio.textContent = translations[currentLang].partnerBio;
        }
        
        const missionTitle = aboutSection.querySelector('.about-mission h3');
        if (missionTitle) missionTitle.textContent = translations[currentLang].missionTitle;
        
        const missionText = aboutSection.querySelector('.about-mission p');
        if (missionText) missionText.textContent = translations[currentLang].missionText;
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
        aboutIntro: "At Nolinx, we specialize in automation solutions for small and medium businesses with the goal of streamlining processes and increasing your profitability.",
        founder: "Your Name",
        founderPosition: "Founder & CEO",
        founderBio: "Short text about you, professional background, experience or areas of expertise. Recommended 2-3 short lines.",
        partner: "Partner's Name",
        partnerPosition: "Co-founder & CTO",
        partnerBio: "Short text about your partner, professional background, experience or areas of expertise. Recommended 2-3 short lines.",
        missionTitle: "Our Mission",
        missionText: "Our mission is to enable businesses to focus on what truly matters - growth and creating value for customers. We believe that smart automation allows businesses to break free from repetitive tasks and focus on strategy and innovation.",
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

// --- תפריט המבורגר למובייל ---

// יסודות DOM
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// יצירת אלמנט הרקע לתפריט
const menuOverlay = document.createElement('div');
menuOverlay.className = 'menu-overlay';
body.appendChild(menuOverlay);

// טוגל פתיחה/סגירה של התפריט
function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // לחסום גלילה בזמן שהתפריט פתוח
    if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

// מאזיני אירועים
if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', toggleMenu);
}
menuOverlay.addEventListener('click', toggleMenu);

// סגירת התפריט בלחיצה על קישור
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === languageModal) {
        languageModal.style.display = 'none';
    }
});

// --- שיפור חווית משתמש במובייל ---

// התאמת גודל הגופן עבור מסכים קטנים
function adjustFontSizes() {
    const isMobile = window.innerWidth <= 768;
    
    document.documentElement.style.setProperty(
        '--heading-font-size', 
        isMobile ? 'clamp(1.2rem, 5vw, 1.8rem)' : 'clamp(1.5rem, 3vw, 2.5rem)'
    );
    
    document.documentElement.style.setProperty(
        '--subheading-font-size', 
        isMobile ? 'clamp(1rem, 4vw, 1.5rem)' : 'clamp(1.2rem, 2vw, 1.8rem)'
    );
    
    document.documentElement.style.setProperty(
        '--body-font-size', 
        isMobile ? 'clamp(0.85rem, 3vw, 1rem)' : 'clamp(0.9rem, 1.5vw, 1.1rem)'
    );
}

// התאמת גובה תמונות באודות
function adjustProfileImageHeight() {
    const profileImages = document.querySelectorAll('.profile-image');
    
    profileImages.forEach(image => {
        // וידוא שגובה התמונה זהה לרוחבה (יחס גובה-רוחב 1:1)
        if (image.offsetWidth) {
            image.style.height = `${image.offsetWidth}px`;
        }
    });
}

// התאמת גובה כרטיסי שירות לגובה אחיד
function adjustCardHeights() {
    if (window.innerWidth > 768) {
        const serviceCards = document.querySelectorAll('.service-card');
        let maxHeight = 0;
        
        // איפוס גובה קודם
        serviceCards.forEach(card => {
            card.style.height = 'auto';
        });
        
        // מציאת הגובה המקסימלי
        serviceCards.forEach(card => {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
        
        // קביעת גובה אחיד
        serviceCards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    } else {
        // במובייל, אפשר גובה דינמי
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.style.height = 'auto';
        });
    }
}

// Start Now Button Functionality
if (startNowBtn) {
    startNowBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Back to Top Button Functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

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
if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
}

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
});

// התאמת הניווט כאשר גודל המסך משתנה
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});