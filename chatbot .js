
// כ Chatbot - Created with NOLINX
document.addEventListener('DOMContentLoaded', function() {
  console.log("NOLINX Chatbot initializing...");
  
  // Configuration
  const config = {
  "active": true,
  "colors": {
    "primary": "#22457c",
    "secondary": "#2563EB",
    "background": "#FFFFFF",
    "text": "#1F2937",
    "buttonText": "#FFFFFF"
  },
  "fonts": {
    "main": "Heebo, sans-serif",
    "size": "14px"
  },
  "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/877b4a_GeneratedImageMarch192025-3_10PMpng.jpeg",
  "agentName": "נציג שירות",
  "title": "שירות לקוחות",
  "welcomeMessage": "שלום!! כיצד אוכל לעזור לך היום?",
  "closingMessage": "תודה על פנייתך! נשמח לעזור בכל שאלה נוספת.",
  "offlineMessage": "נציגינו אינם זמינים כרגע. אנא השאירו פרטים ונחזור אליכם בהקדם.",
  "workHours": {
    "active": false,
    "timezone": "Asia/Jerusalem",
    "sunday": {
      "active": true,
      "start": "09:00",
      "end": "17:00"
    },
    "monday": {
      "active": true,
      "start": "09:00",
      "end": "17:00"
    },
    "tuesday": {
      "active": true,
      "start": "09:00",
      "end": "17:00"
    },
    "wednesday": {
      "active": true,
      "start": "09:00",
      "end": "17:00"
    },
    "thursday": {
      "active": true,
      "start": "09:00",
      "end": "17:00"
    },
    "friday": {
      "active": true,
      "start": "09:00",
      "end": "14:00"
    },
    "saturday": {
      "active": false,
      "start": "00:00",
      "end": "00:00"
    }
  },
  "contactFormWebhook": null,
  "buttonPosition": "bottom-right",
  "id": "67e3b25c8e14e449d2f273b4",
  "created_date": "2025-03-26T07:53:00.605000",
  "updated_date": "2025-03-26T10:47:37.083000",
  "created_by": "lirantb@gmail.com",
  "is_sample": false
};
  const questions = [
  {
    "question": "מה שעות הפעילות שלכם?",
    "keywords": [
      "שעות",
      "פעילות",
      "פתוח",
      "עובדים"
    ],
    "answer": "אנחנו פעילים בימים א'-ה' בין השעות 9:00-17:00, ובימי שישי בין השעות 9:00-14:00.",
    "category": "שירות לקוחות",
    "order": 1,
    "id": "67e3aee9d68b5aeb23b27487",
    "created_date": "2025-03-26T07:38:17.393000",
    "updated_date": "2025-03-26T07:38:17.393000",
    "created_by": "lirantb@gmail.com",
    "is_sample": false
  },
  {
    "question": "איזה שירותי אוטומציה אתם מציעים?",
    "keywords": [
      "שירותים",
      "אוטומציה",
      "פתרונות",
      "מציעים"
    ],
    "answer": "אנחנו מציעים מגוון רחב של שירותי אוטומציה עסקית, כולל אוטומציית תהליכים, אינטגרציית מערכות, אוטומציית שיווק, צ'אטבוטים ומערכות ניתוח נתונים חכמות. נשמח לדון בפרויקט הספציפי שלך!",
    "category": "שירותים",
    "order": 2,
    "id": "67e3aee9d68b5aeb23b27488",
    "created_date": "2025-03-26T07:38:17.393000",
    "updated_date": "2025-03-26T07:38:17.393000",
    "created_by": "lirantb@gmail.com",
    "is_sample": false
  },
  {
    "question": "כמה עולה להטמיע מערכת אוטומציה?",
    "keywords": [
      "עלות",
      "מחיר",
      "כמה עולה",
      "תשלום",
      "תקציב"
    ],
    "answer": "העלות של פרויקט אוטומציה תלויה במורכבות התהליכים שברצונך לאוטומט והמערכות שיש לחבר. אנחנו מציעים ייעוץ ראשוני ללא עלות והצעת מחיר מותאמת אישית. נשמח לדבר על הפרויקט שלך ולהתאים פתרון לתקציב שלך.",
    "category": "מחירים",
    "order": 3,
    "id": "67e3aee9d68b5aeb23b27489",
    "created_date": "2025-03-26T07:38:17.393000",
    "updated_date": "2025-03-26T07:38:17.393000",
    "created_by": "lirantb@gmail.com",
    "is_sample": false
  },
  {
    "question": "מה זה אוטומציה עסקית?",
    "keywords": [
      "מה זה",
      "הסבר",
      "אוטומציה עסקית",
      "אוטומציה"
    ],
    "answer": "אוטומציה עסקית היא תהליך של שימוש בטכנולוגיה כדי להפוך משימות ותהליכים עסקיים ידניים לאוטומטיים. זה כולל חיבור בין מערכות שונות, אוטומציה של תהליכי עבודה וייעול זרימת המידע בארגון. המטרה היא לחסוך זמן, להפחית טעויות אנוש ולהגדיל את היעילות העסקית.",
    "category": "מידע כללי",
    "order": 4,
    "id": "67e3aee9d68b5aeb23b2748a",
    "created_date": "2025-03-26T07:38:17.393000",
    "updated_date": "2025-03-26T07:38:17.393000",
    "created_by": "lirantb@gmail.com",
    "is_sample": false
  },
  {
    "question": "כמה זמן לוקח להטמיע אוטומציה?",
    "keywords": [
      "זמן",
      "כמה זמן",
      "לוקח",
      "משך",
      "הטמעה"
    ],
    "answer": "משך הזמן להטמעת אוטומציה תלוי במורכבות הפרויקט. פרויקטים פשוטים יכולים להיות מוכנים תוך ימים ספורים, בעוד שפרויקטים מורכבים יותר עשויים להימשך מספר שבועות. בפגישת הייעוץ הראשונית נוכל לתת הערכה מדויקת יותר בהתאם לדרישות הספציפיות שלך.",
    "category": "תהליך עבודה",
    "order": 5,
    "id": "67e3aee9d68b5aeb23b2748b",
    "created_date": "2025-03-26T07:38:17.393000",
    "updated_date": "2025-03-26T07:38:17.393000",
    "created_by": "lirantb@gmail.com",
    "is_sample": false
  },
  {
    "question": "אך קוראים לי?",
    "keywords": [
      "לירן"
    ],
    "answer": "לירן טל ברטנטל",
    "category": "כללי",
    "order": 0,
    "id": "67e3c2347890d9077516c4e9",
    "created_date": "2025-03-26T09:00:36.082000",
    "updated_date": "2025-03-26T09:00:36.082000",
    "created_by": "lirantb@gmail.com",
    "is_sample": false
  }
];

  console.log("Chatbot config loaded, creating UI...");

  // Create styles
  const style = document.createElement('style');
  style.textContent = `
    .nolinx-chatbot-button {
      position: fixed;
      right: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #22457c;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s;
      z-index: 9999;
    }

    .nolinx-chatbot-button:hover {
      transform: scale(1.1);
    }

    .nolinx-chatbot-window {
      position: fixed;
      right: 20px;
      bottom: 100px;
      width: 350px;
      height: 500px;
      background-color: #FFFFFF;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      display: none;
      flex-direction: column;
      font-family: Heebo, sans-serif;
      z-index: 9999;
      max-width: calc(100vw - 40px);
    }

    .nolinx-chatbot-header {
      background-color: #22457c;
      color: #FFFFFF;
      padding: 15px;
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nolinx-chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      direction: rtl;
    }

    .nolinx-chatbot-message {
      margin: 8px 0;
      max-width: 80%;
      padding: 10px;
      border-radius: 10px;
      word-wrap: break-word;
    }

    .nolinx-chatbot-message.bot {
      background-color: #f0f0f0;
      color: #1F2937;
      margin-right: auto;
      border-top-right-radius: 0;
    }

    .nolinx-chatbot-message.user {
      background-color: #22457c;
      color: #FFFFFF;
      margin-left: auto;
      border-top-left-radius: 0;
    }

    .nolinx-chatbot-input {
      padding: 15px;
      border-top: 1px solid #eee;
      display: flex;
      gap: 10px;
      direction: rtl;
    }

    .nolinx-chatbot-input input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;
      font-size: 14px;
    }

    .nolinx-chatbot-input button {
      background-color: #22457c;
      color: #FFFFFF;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }

    .nolinx-chatbot-input button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `;

  document.head.appendChild(style);
  console.log("Chatbot styles added");

  // Create HTML elements
  const container = document.createElement('div');
  container.id = 'nolinx-chatbot-container';
  container.innerHTML = `
    <button data-filename="components/chatbot/ExportDialog" data-linenumber="153" data-visual-selector-id="components/chatbot/ExportDialog153" class="nolinx-chatbot-button" title="צ'אט">
      <svg data-filename="components/chatbot/ExportDialog" data-linenumber="154" data-visual-selector-id="components/chatbot/ExportDialog154" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path data-filename="components/chatbot/ExportDialog" data-linenumber="155" data-visual-selector-id="components/chatbot/ExportDialog155" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
    <div data-filename="components/chatbot/ExportDialog" data-linenumber="158" data-visual-selector-id="components/chatbot/ExportDialog158" class="nolinx-chatbot-window">
      <div data-filename="components/chatbot/ExportDialog" data-linenumber="159" data-visual-selector-id="components/chatbot/ExportDialog159" class="nolinx-chatbot-header">
        <div data-filename="components/chatbot/ExportDialog" data-linenumber="160" data-visual-selector-id="components/chatbot/ExportDialog160">
          <div data-filename="components/chatbot/ExportDialog" data-linenumber="161" data-visual-selector-id="components/chatbot/ExportDialog161" style="font-weight: bold">שירות לקוחות</div>
          <div data-filename="components/chatbot/ExportDialog" data-linenumber="162" data-visual-selector-id="components/chatbot/ExportDialog162" style="font-size: 0.8em">נציג שירות</div>
        </div>
        <button data-filename="components/chatbot/ExportDialog" data-linenumber="164" data-visual-selector-id="components/chatbot/ExportDialog164" class="nolinx-chatbot-close" style="background: none; border: none; color: inherit; cursor: pointer">
          ✕
        </button>
      </div>
      <div data-filename="components/chatbot/ExportDialog" data-linenumber="168" data-visual-selector-id="components/chatbot/ExportDialog168" class="nolinx-chatbot-messages"></div>
      <div data-filename="components/chatbot/ExportDialog" data-linenumber="169" data-visual-selector-id="components/chatbot/ExportDialog169" class="nolinx-chatbot-input">
        <input data-filename="components/chatbot/ExportDialog" data-linenumber="170" data-visual-selector-id="components/chatbot/ExportDialog170" type="text" placeholder="הקלד/י הודעה..." />
        <button data-filename="components/chatbot/ExportDialog" data-linenumber="171" data-visual-selector-id="components/chatbot/ExportDialog171">שלח</button>
      </div>
    </div>
  `;

  document.body.appendChild(container);
  console.log("Chatbot HTML added to the page");

  // Initialize elements
  const button = document.querySelector('.nolinx-chatbot-button');
  const chatWindow = document.querySelector('.nolinx-chatbot-window');
  const closeBtn = document.querySelector('.nolinx-chatbot-close');
  const input = document.querySelector('.nolinx-chatbot-input input');
  const sendBtn = document.querySelector('.nolinx-chatbot-input button');
  const messages = document.querySelector('.nolinx-chatbot-messages');

  if (!button || !chatWindow || !closeBtn || !input || !sendBtn || !messages) {
    console.error("Chatbot elements not found!");
    return;
  }

  console.log("Chatbot elements initialized");

  function addMessage(type, text) {
    const msg = document.createElement('div');
    msg.className = `nolinx-chatbot-message ${type}`;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function findAnswer(text) {
    const normalizedText = text.toLowerCase();
    for (const q of questions) {
      if (q.keywords && q.keywords.some(k => normalizedText.includes(k.toLowerCase()))) {
        return q.answer;
      }
    }
    return config.offlineMessage || "מצטער, לא מצאתי תשובה מתאימה.";
  }

  function handleSendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage('user', text);
    input.value = '';
    sendBtn.disabled = true;

    setTimeout(() => {
      const answer = findAnswer(text);
      addMessage('bot', answer);
      sendBtn.disabled = false;
    }, 500);
  }

  // Event handlers
  button.addEventListener('click', () => {
    console.log("Chatbot button clicked");
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
    if (chatWindow.style.display === 'flex' && messages.children.length === 0) {
      addMessage('bot', config.welcomeMessage || 'שלום! כיצד אוכל לעזור?');
    }
  });

  closeBtn.addEventListener('click', () => {
    chatWindow.style.display = 'none';
  });

  sendBtn.addEventListener('click', handleSendMessage);
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
  });

  console.log("NOLINX Chatbot initialized successfully!");
});

// Backup in case DOMContentLoaded has already fired
if (document.readyState === 'complete') {
  document.dispatchEvent(new Event('DOMContentLoaded'));
}
