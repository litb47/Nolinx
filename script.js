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
//function updateLanguage() {

    // עדכון ניווט
    document.querySelector('a[href="#home"]').textContent = translations[currentLang].home;
    document.querySelector('a[href="#services"]').textContent = translations[currentLang].services;
    document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contact;
    document.querySelector('a[href="#testimonials"]').textContent = translations[currentLang].testimonials;
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) aboutLink.textContent = translations[currentLang].about;

    // עדכון כותרת ותת כותרת
    document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;

    // כפתור
    document.querySelector('.cta-button').textContent = translations[currentLang].startNow;

    // Update navigation
  //   document.querySelector('a[href="#home"]').textContent = translations[currentLang].home;
  //   document.querySelector('a[href="#services"]').textContent = translations[currentLang].services;
  //   document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contact;
 //    document.querySelector('a[href="#testimonials"]').textContent = translations[currentLang].testimonials;

 //    // Update hero section
  //   document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
  //   document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;
  //   document.querySelector('.cta-button').textContent = translations[currentLang].startNow;

    // Update services section
   //  document.querySelector('.services h2').textContent = translations[currentLang].whatWeDo;
   //  const serviceCards = document.querySelectorAll('.service-card');

   // Language translations








        
    


// שאר הקוד שלך נשאר ללא שינוי (אנימציות, שפה, סקרול וכו')
function updateLanguage() {

    // עדכון ניווט
    document.querySelector('a[href="#home"]').textContent = translations[currentLang].home;
    document.querySelector('a[href="#services"]').textContent = translations[currentLang].services;
    document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contact;
    document.querySelector('a[href="#testimonials"]').textContent = translations[currentLang].testimonials;
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) aboutLink.textContent = translations[currentLang].about;

    // עדכון כותרת ותת כותרת
    document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;

    // כפתור
    document.querySelector('.cta-button').textContent = translations[currentLang].startNow;

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
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const userName = formData.get('name');
        const userEmail = formData.get('email');
        const userPhone = formData.get('phone');
        const userMessage = formData.get('message') || '';


        // הצג את פרטי המשתמש בחלון האישור
        document.getElementById('modalUserName').textContent = userName;
        document.getElementById('modalUserEmail').textContent = userEmail;
        document.getElementById('modalUserPhone').textContent = userPhone;
        
        // שליחה ל-Make
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
    alert(currentLang === 'he' ? 'אירעה שגיאה. אנא נסה שוב.' : 'An error occurred. Please try again.');
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

// === אנימציות מתקדמות לקוביות השירותים ===
const serviceCards = document.querySelectorAll('.service-card');
const animationClasses = ['jump', 'floating', 'wobble', 'rubberBand'];

// אפקט קפיצה ראשוני בטעינת העמוד
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

// אפקט קפיצה בלחיצה על קוביה
serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        const randomAnimation = animationClasses[Math.floor(Math.random() * animationClasses.length)];
        
        // מוודא שהאנימציה תתחיל מחדש אם לוחצים שוב
        this.classList.remove(...animationClasses);
        
        // מוסיף עיכוב קטן כדי לאפשר reset של האנימציה
        setTimeout(() => {
            this.classList.add(randomAnimation);
            
            // מסיר את האנימציה אחרי שהיא מסתיימת
            setTimeout(() => {
                this.classList.remove(randomAnimation);
            }, 1000);
        }, 10);
    });
});

// אנימציה אוטומטית לקוביות כל כמה זמן
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

// אנימציה לאייקונים בקוביות - סיבוב כאשר עוברים מעל
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

// === אפקט קפיצה לכותרות ===
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

// פונקציות נוספות לאנימציות מתקדמות
function createEnhancedParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // יצירת קונטיינר לפרטיקלים אם לא קיים
    let particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        hero.appendChild(particlesContainer);
    }
    
    // מספר הפרטיקלים לפי גודל המסך
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    
    // יצירת פרטיקלים
    for (let i = 0; i < particleCount; i++) {
        // יצירת אלמנט פרטיקל
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // הגדרת מאפיינים אקראיים
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // הגדרת סגנון
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity.toString();
        
        // הגדרת משתנים מותאמים אישית ל-CSS
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        const midOpacity = Math.random() * 0.3 + 0.1;
        
        // הגדרת אנימציה עם CSS Variables
        particle.style.setProperty('--move-x', `${moveX}px`);
        particle.style.setProperty('--move-y', `${moveY}px`);
        particle.style.setProperty('--initial-opacity', opacity.toString());
        particle.style.setProperty('--mid-opacity', midOpacity.toString());
        
        // הגדרת אנימציה
        particle.style.animation = `particleMove ${duration}s infinite ease-in-out`;
        particle.style.animationDelay = `${delay}s`;
        
        // הוספה לקונטיינר
        particlesContainer.appendChild(particle);
    }
}

// פונקציה ליצירת אפקט גלים בקליק
function createRippleEffect() {
    const buttons = document.querySelectorAll('.cta-button, .submit-button, .service-card');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // הסרת אפקטים ישנים
            const oldRipple = this.querySelector('.ripple');
            if (oldRipple) {
                oldRipple.remove();
            }
            
            // יצירת אלמנט חדש לאפקט
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            // מציאת מיקום הקליק יחסית לאלמנט
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            
            // הסרת האפקט אחרי סיום האנימציה
            ripple.addEventListener('animationend', function() {
                this.remove();
            });
        });
    });
}

// פונקציה להוספת אנימציות כניסה לאלמנטים
function addEntranceAnimations() {
    // אובייקט לתצפית האלמנטים
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // בדיקה איזה סוג אנימציה להפעיל
                if (entry.target.classList.contains('right-animation')) {
                    entry.target.classList.add('animate-in-right');
                } else if (entry.target.classList.contains('left-animation')) {
                    entry.target.classList.add('animate-in-left');
                } else {
                    entry.target.classList.add('animate-in-bottom');
                }
                
                // הסרת התצפית מהאלמנט
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // הוספת קלאסים לאלמנטים שונים
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
    
    // הוספת אנימציה לקוביות השירותים
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // הוספת אנימציה לקארד עדויות
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.classList.add('right-animation');
        observer.observe(card);
    });
}

// פונקציה למימוש אפקט הכותרת המרחפת
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

// פונקציה ליצירת פרטיקלים בחלון האישור
function createModalParticles() {
    const container = document.getElementById('modalParticles');
    if (!container) return;
    
    // נקה פרטיקלים קודמים
    container.innerHTML = '';
    
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        
        // סגנון בסיסי לפרטיקל
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(0, 212, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        particle.style.boxShadow = '0 0 5px rgba(0, 212, 255, 0.5)';
        
        // אנימציה אקראית
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        // יצירת keyframes ספציפיים לכל פרטיקל
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
        
        // הוספת ה-keyframes ל-DOM
        const styleElement = document.createElement('style');
        styleElement.textContent = keyframes;
        document.head.appendChild(styleElement);
        
        // הפעלת האנימציה
        particle.style.animation = `${keyframesName} ${duration}s infinite ease-in-out ${delay}s`;
        
        container.appendChild(particle);
    }
}

// הפעלת כל האנימציות בטעינת הדף
window.addEventListener('load', () => {
    createEnhancedParticles();
    createRippleEffect();
    addEntranceAnimations();
    floatingHeaderEffect();
    
    // הוספת אפקט 3D לקוביות בהובר
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

    // אנימציה עדינה יותר לטופס צור קשר
    const contactObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // אנימציה רק לכותרת הטופס
            const contactTitle = document.querySelector('.contact h2');
            if (contactTitle) {
                contactTitle.style.animation = 'bounceIn 1s cubic-bezier(0.22, 0.61, 0.36, 1)';
            }
            
            // הוספת אפקט גבול זוהר לטופס
            if (contactForm) {
                contactForm.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
                contactForm.style.transition = 'all 0.5s ease';
            }
            
            // הופעה הדרגתית של כפתור השליחה
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

    // אפקט פוקוס מוגבר לשדות הטופס
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'all 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // אנימציות לכוכבים בחלק העדויות
    document.querySelectorAll('.stars').forEach(starsDiv => {
        starsDiv.addEventListener('mouseover', function() {
            this.style.color = '#FFC107';
            this.style.transform = 'scale(1.1)';
            this.style.textShadow = '0 0 10px rgba(255, 193, 7, 0.7)';
            
            // אנימציית רטט לכו


            // אנימציית רטט לכוכבים
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

    // אנימציה לתמונות בקארד העדויות
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

// סגירת חלון האישור
document.addEventListener('DOMContentLoaded', function() {
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const modal = document.getElementById('thankYouModal');
    
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // סגירת החלון גם בלחיצה מחוץ לקארד
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
