// Chatbot Core Class
class Chatbot {
    constructor(config = {}) {
        this.config = {
            containerId: config.containerId || 'chatbot-container',
            position: config.position || 'bottom-right',
            theme: config.theme || 'light',
            avatar: config.avatar || null,
            welcomeMessage: config.welcomeMessage || 'Hello! How can I help you today?',
            customColors: config.customColors || {
                primary: '#007bff',
                background: '#ffffff',
                text: '#333333'
            },
            notificationBadge: config.notificationBadge || false,
            typingIndicator: config.typingIndicator || true,
            ...config
        };
        
        this.state = {
            isOpen: false,
            currentQuestion: null,
            conversationHistory: [],
            isTyping: false,
            unreadMessages: 0
        };
        
        this.qaData = [];
        this.init();
    }

    init() {
        this.createFloatingButton();
        this.createContainer();
        this.loadQA();
        this.attachEventListeners();
        this.setupCustomColors();
    }

    createFloatingButton() {
        const button = document.createElement('div');
        button.className = `chatbot-float-button ${this.config.position}`;
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            ${this.config.notificationBadge ? '<div class="chatbot-notification">1</div>' : ''}
        `;
        document.body.appendChild(button);
    }

    createContainer() {
        const container = document.createElement('div');
        container.id = this.config.containerId;
        container.className = `chatbot-container ${this.config.position} ${this.config.theme}`;
        
        container.innerHTML = `
            <div class="chatbot-header">
                ${this.config.avatar ? `
                    <div class="chatbot-avatar">
                        <img src="${this.config.avatar}" alt="Chat Assistant">
                    </div>
                ` : ''}
                <div class="chatbot-header-content">
                    <h3>Chat Assistant</h3>
                    <div class="chatbot-status">Online</div>
                </div>
                <button class="chatbot-toggle">×</button>
            </div>
            <div class="chatbot-welcome">
                <p>${this.config.welcomeMessage}</p>
            </div>
            <div class="chatbot-messages"></div>
            ${this.config.typingIndicator ? '<div class="chatbot-typing" style="display: none;"><span></span><span></span><span></span></div>' : ''}
            <div class="chatbot-input">
                <input type="text" placeholder="Type your message...">
                <button class="chatbot-send">Send</button>
            </div>
        `;
        
        document.body.appendChild(container);
    }

    setupCustomColors() {
        const container = document.getElementById(this.config.containerId);
        if (this.config.customColors) {
            Object.entries(this.config.customColors).forEach(([key, value]) => {
                container.style.setProperty(`--${key}-color`, value);
            });
        }
    }

    showTypingIndicator() {
        if (this.config.typingIndicator) {
            const indicator = document.querySelector(`#${this.config.containerId} .chatbot-typing`);
            indicator.style.display = 'flex';
        }
    }

    hideTypingIndicator() {
        if (this.config.typingIndicator) {
            const indicator = document.querySelector(`#${this.config.containerId} .chatbot-typing`);
            indicator.style.display = 'none';
        }
    }

    loadQA() {
        // Load QA data from localStorage or use default
        const savedQA = localStorage.getItem('chatbot_qa_data');
        this.qaData = savedQA ? JSON.parse(savedQA) : [];
    }

    attachEventListeners() {
        const container = document.getElementById(this.config.containerId);
        const floatButton = document.querySelector('.chatbot-float-button');
        const toggleBtn = container.querySelector('.chatbot-toggle');
        const input = container.querySelector('input');
        const sendBtn = container.querySelector('.chatbot-send');

        floatButton.addEventListener('click', () => this.toggleChat());
        toggleBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.handleUserInput());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
    }

    toggleChat() {
        const container = document.getElementById(this.config.containerId);
        const floatButton = document.querySelector('.chatbot-float-button');
        this.state.isOpen = !this.state.isOpen;
        container.classList.toggle('open');
        floatButton.style.display = this.state.isOpen ? 'none' : 'flex';
        
        if (this.state.isOpen) {
            this.state.unreadMessages = 0;
            this.updateNotificationBadge();
        }
    }

    handleUserInput() {
        const input = document.querySelector(`#${this.config.containerId} input`);
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.processMessage(message);
        input.value = '';
    }

    async processMessage(message) {
        this.showTypingIndicator();
        
        // Simulate typing delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = this.findResponse(message);
        this.hideTypingIndicator();
        this.addMessage(response, 'bot');
    }

    findResponse(message) {
        const lowerMessage = message.toLowerCase();
        let bestMatch = null;
        let bestMatchScore = 0;
        
        for (const qa of this.qaData) {
            const matchScore = qa.keywords.reduce((score, keyword) => {
                return score + (lowerMessage.includes(keyword.toLowerCase()) ? 2 : 0);
            }, 0);
            
            if (matchScore > bestMatchScore) {
                bestMatchScore = matchScore;
                bestMatch = qa;
            }
        }
        
        if (bestMatch && bestMatchScore > 0) {
            if (bestMatch.conditions) {
                try {
                    const conditionResult = new Function('message', 'return ' + bestMatch.conditions)(message);
                    if (conditionResult) {
                        return bestMatch.answer;
                    }
                } catch (e) {
                    console.error('Error evaluating condition:', e);
                }
            } else {
                return bestMatch.answer;
            }
        }
        
        return "I'm not sure about that. Could you please rephrase your question?";
    }

    addMessage(message, sender) {
        const messagesContainer = document.querySelector(`#${this.config.containerId} .chatbot-messages`);
        const messageElement = document.createElement('div');
        messageElement.className = `chatbot-message ${sender}-message`;
        messageElement.innerHTML = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        if (sender === 'bot' && !this.state.isOpen) {
            this.state.unreadMessages++;
            this.updateNotificationBadge();
        }
    }

    updateNotificationBadge() {
        const badge = document.querySelector('.chatbot-notification');
        if (badge) {
            badge.textContent = this.state.unreadMessages;
        }
    }

    // Admin methods
    updateQA(newQAData) {
        this.qaData = newQAData;
        localStorage.setItem('chatbot_qa_data', JSON.stringify(newQAData));
    }

    getQA() {
        return this.qaData;
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        // Update UI elements based on new config
        const container = document.getElementById(this.config.containerId);
        if (container) {
            container.className = `chatbot-container ${this.config.position} ${this.config.theme}`;
            
            // Update avatar if changed
            const avatarContainer = container.querySelector('.chatbot-avatar');
            if (this.config.avatar) {
                if (!avatarContainer) {
                    const header = container.querySelector('.chatbot-header');
                    const avatar = document.createElement('div');
                    avatar.className = 'chatbot-avatar';
                    avatar.innerHTML = `<img src="${this.config.avatar}" alt="Chat Assistant">`;
                    header.insertBefore(avatar, header.firstChild);
                } else {
                    avatarContainer.querySelector('img').src = this.config.avatar;
                }
            } else if (avatarContainer) {
                avatarContainer.remove();
            }

            // Update welcome message
            const welcomeMessage = container.querySelector('.chatbot-welcome p');
            if (welcomeMessage) {
                welcomeMessage.textContent = this.config.welcomeMessage;
            }
        }
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Chatbot;
} 