# גרשון Chatbot

## התקנה

1. קבצים וספריות:
   * אם הקובץ `chatbot.js` והקובץ `index.html` (או כל קובץ HTML אחר) באותה ספרייה:
     ```html
     <script data-filename="components/chatbot/ExportDialog" data-linenumber="264" data-visual-selector-id="components/chatbot/ExportDialog264" src="./chatbot.js"></script>
     ```

   * אם הקובץ `chatbot.js` נמצא בתיקיית `js`:
     ```html
     <script data-filename="components/chatbot/ExportDialog" data-linenumber="269" data-visual-selector-id="components/chatbot/ExportDialog269" src="./js/chatbot.js"></script>
     ```

   * אם הקובץ `chatbot.js` נמצא בספרייה שמעל:
     ```html
     <script data-filename="components/chatbot/ExportDialog" data-linenumber="274" data-visual-selector-id="components/chatbot/ExportDialog274" src="../chatbot.js"></script>
     ```

2. מיקום בקוד:
   * הוסף את השורה הזו בדף ה-HTML שלך, ממש לפני תג הסגירה של ה-`</body>`:
     ```html
     <!DOCTYPE html>
     <html data-filename="components/chatbot/ExportDialog" data-linenumber="281" data-visual-selector-id="components/chatbot/ExportDialog281">
     <head data-filename="components/chatbot/ExportDialog" data-linenumber="282" data-visual-selector-id="components/chatbot/ExportDialog282">
         <!-- ראש הדף -->
     </head>
     <body data-filename="components/chatbot/ExportDialog" data-linenumber="285" data-visual-selector-id="components/chatbot/ExportDialog285">
         <!-- תוכן הדף -->
         
         <!-- טען את הצ'אטבוט לפני סגירת תג body -->
         <script data-filename="components/chatbot/ExportDialog" data-linenumber="289" data-visual-selector-id="components/chatbot/ExportDialog289" src="./chatbot.js"></script>
     </body>
     </html>
     ```

3. בדיקת התקנה:
   * פתח את הדף במחשב
   * לחץ F12 כדי לפתוח את כלי המפתחים
   * עבור ללשונית Console
   * וודא שמופיעות הודעות "NOLINX Chatbot initializing..." ו-"NOLINX Chatbot initialized successfully!"

## פתרון בעיות

אם הצ'אטבוט לא מופיע:

1. בדוק את נתיב הקובץ:
   * ודא שהנתיב לקובץ ה-JS נכון ביחס למיקום קובץ ה-HTML
   * נסה להשתמש בנתיב מוחלט, לדוגמה: `<script data-filename="components/chatbot/ExportDialog" data-linenumber="306" data-visual-selector-id="components/chatbot/ExportDialog306" src="/js/chatbot.js"></script>`

2. בדוק שגיאות:
   * פתח את הקונסול של הדפדפן (F12 > Console)
   * חפש הודעות שגיאה אדומות שקשורות לטעינת הקובץ

3. ודא שהקובץ נטען:
   * הוסף את התכונה "defer" לתג ה-script: `<script data-filename='components/chatbot/ExportDialog' data-linenumber='313' data-visual-selector-id='components/chatbot/ExportDialog313' src="./chatbot.js" defer></script>`
   * או נסה להזיז את הקוד לסוף הדף, ממש לפני תג הסגירה של ה-</body>

4. בדוק אם יש התנגשות עם קוד אחר:
   * אם יש לך קוד JavaScript אחר שעלול להפריע, נסה להסיר אותו זמנית כדי לבדוק

## התאמות שבוצעו
- צבעים מותאמים אישית 
- 6 שאלות ותשובות מוגדרות
- הודעות פתיחה וסיום מותאמות
- תמיכה בטפסי יצירת קשר


## קוד להעתקה מהירה

```html
<script data-filename="components/chatbot/ExportDialog" data-linenumber="329" data-visual-selector-id="components/chatbot/ExportDialog329" src="./chatbot.js"></script>
```

## תמיכה
לכל שאלה או בעיה, אנא צור קשר עם צוות התמיכה שלנו
