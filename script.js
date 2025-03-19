// Language translations
const translations = {
    he: {
        home: "דף הבית",
        services: "שירותים",
        contact: "צור קשר",
        testimonials: "עדויות",
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
        testimonialsTitle: "עדויות לקוחות"
    },
    en: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        testimonials: "Testimonials",
        heroTitle: "Your Business Solution with Business Automation Management",
        heroSubtitle: "Nolinx's automation services enable you to run your business automatically and save your processes.",
        startNow: "Start Now",
        whatWeDo: "What We Do",
        marketing: "Marketing & Sales Automation Services",
        marketingDesc: "Save automations that save your marketing and optimize your marketing manpower.",
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
        testimonialsTitle: "Client Testimonials"
    }
};

// Language state
let currentLang = 'he';

// DOM Elements
const languageToggle = document.getElementById('languageToggle');
const languageModal = document.getElementById('languageModal');
const langOptions = document.querySelectorAll('.lang-option');
const contactForm = document.getElementById('contactForm');
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

// Language switching functionality
languageToggle.addEventListener('click', () => {
    languageModal.style.display = 'block';
});

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

// Update content based on selected language
function updateLanguage() {
    // Update navigation
    document.querySelector('a[href="#home"]').textContent = translations[currentLang].home;
    document.querySelector('a[href="#services"]').textContent = translations[currentLang].services;
    document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contact;
    document.querySelector('a[href="#testimonials"]').textContent = translations[currentLang].testimonials;

    // Update hero section
    document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;
    document.querySelector('.cta-button').textContent = translations[currentLang].startNow;

    // Update services section
    document.querySelector('.services h2').textContent = translations[currentLang].whatWeDo;
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = translations[currentLang].marketing;
    serviceCards[0].querySelector('p').textContent = translations[currentLang].marketingDesc;
    serviceCards[1].querySelector('h3').textContent = translations[currentLang].business;
    serviceCards[1].querySelector('p').textContent = translations[currentLang].businessDesc;
    serviceCards[2].querySelector('h3').textContent = translations[currentLang].management;
    serviceCards[2].querySelector('p').textContent = translations[currentLang].managementDesc;

    // Update contact form
    document.querySelector('.contact h2').textContent = translations[currentLang].contactTitle;
    document.querySelector('#name').placeholder = translations[currentLang].name;
    document.querySelector('#email').placeholder = translations[currentLang].email;
    document.querySelector('#phone').placeholder = translations[currentLang].phone;
    document.querySelector('#message').placeholder = translations[currentLang].message;
    document.querySelector('.submit-button').textContent = translations[currentLang].send;

    // Update testimonials section
    document.querySelector('.testimonials h2').textContent = translations[currentLang].testimonialsTitle;
}

// Form submission handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Submit to Netlify
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        // Show success message
        alert(currentLang === 'he' ? 'תודה! נחזור אליך בהקדם.' : 'Thank you! We will get back to you soon.');
        contactForm.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert(currentLang === 'he' ? 'אירעה שגיאה. אנא נסה שוב.' : 'An error occurred. Please try again.');
    });
});

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

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('service-card')) {
                // Add jump effect with delay based on position
                const delay = entry.target.dataset.delay;
                setTimeout(() => {
                    entry.target.classList.add('jump');
                    
                    // Add glow effect
                    entry.target.style.animation = 'glowPulse 2s infinite';
                    
                    // Remove effects after animation
                    setTimeout(() => {
                        entry.target.classList.remove('jump');
                        entry.target.style.animation = '';
                    }, 1000);
                }, delay * 300);
            }
        }
    });
}, observerOptions);

// Observe service cards with staggered animation
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.dataset.delay = index;
    observer.observe(card);
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.classList.add('jump');
        card.style.animation = 'glowPulse 2s infinite';
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('jump');
        card.style.animation = '';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
}); 