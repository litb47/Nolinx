// שינוי לפונקציית הטיפול בטופס (Form submission handling)
// החלף את הקוד הקיים של הטיפול בטופס עם הקוד הבא:

// Form submission handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // נשמור את הפרטים בלוקל סטורג' כדי להציג אותם בדף האישור
        localStorage.setItem('userName', formData.get('name'));
        localStorage.setItem('userEmail', formData.get('email'));
        localStorage.setItem('userPhone', formData.get('phone'));
        
        // Submit to Netlify
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // מעבר לדף אישור
            window.location.href = 'thank-you.html';
        })
        .catch(error => {
            console.error('Error:', error);
            alert(currentLang === 'he' ? 'אירעה שגיאה. אנא נסה שוב.' : 'An error occurred. Please try again.');
        });
    });
}