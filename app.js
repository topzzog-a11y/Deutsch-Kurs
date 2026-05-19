// Main Application Logic - Data loaded from data.js

// Text-to-Speech Helper
window.speakGerman = function(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-Speech is not supported in this browser.");
    }
};

// Background Slider Data
const sliderImages = [
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80', // Neuschwanstein Castle
    'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1920&q=80', // Berlin Brandenburg
    'https://images.unsplash.com/photo-1534313314376-a72289b60095?auto=format&fit=crop&w=1920&q=80', // Cologne Cathedral
    'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1920&q=80'  // Munich
];
let sliderInterval;
let currentSlide = 0;

function startSlider() {
    const bgSlider = document.getElementById('bg-slider');
    if (!bgSlider) return;
    bgSlider.style.backgroundImage = `url('${sliderImages[currentSlide]}')`;
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        bgSlider.style.backgroundImage = `url('${sliderImages[currentSlide]}')`;
    }, 3000); // Change image every 3 seconds
}

// Progress Manager
const ProgressManager = {
    init() {
        if (!localStorage.getItem('deutsch_xp')) {
            localStorage.setItem('deutsch_xp', '0');
            localStorage.setItem('deutsch_streak', '1');
        }
    },
    getXP() { return parseInt(localStorage.getItem('deutsch_xp')) || 0; },
    addXP(amount) {
        let xp = this.getXP() + amount;
        localStorage.setItem('deutsch_xp', xp.toString());
        this.showToast(`+${amount} XP Earned!`);
        
        const xpElement = document.getElementById('dashboard-xp');
        if (xpElement) xpElement.innerText = `${xp.toLocaleString()} XP`;
        const navXp = document.getElementById('nav-xp');
        if (navXp) navXp.innerText = `${xp.toLocaleString()} XP`;
    },
    getStreak() { return parseInt(localStorage.getItem('deutsch_streak')) || 1; },
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification fade-in';
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }
};
ProgressManager.init();

// Router logic
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li, .logo');
    const mainContent = document.getElementById('main-content');
    
    // Update Nav XP
    document.getElementById('nav-xp').innerText = `${ProgressManager.getXP()} XP`;

    // Navigation setup
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            if(e.currentTarget.tagName === 'LI') e.currentTarget.classList.add('active');
            const route = e.currentTarget.getAttribute('data-route');
            navigate(route);
        });
    });

    navigate('dashboard');

    function navigate(route) {
        mainContent.innerHTML = ''; 
        mainContent.className = 'fade-in'; 
        void mainContent.offsetWidth; 
        
        // Handle Background Slider Mode
        if (route === 'dashboard') {
            document.body.classList.add('dashboard-mode');
            startSlider();
        } else {
            document.body.classList.remove('dashboard-mode');
            clearInterval(sliderInterval);
        }

        if (route === 'dashboard') renderDashboard();
        else if (route === 'grammar-levels') renderGrammarLevels();
        else if (route === 'flashcards') renderFlashcards();
        else if (route === 'library') renderLibrary();
        else if (route === 'verbs') renderVerbs();
        else if (route === 'magazines') renderMagazines();
        else if (route.startsWith('grammar-topics-')) {
            renderGrammarTopics(route.replace('grammar-topics-', ''));
        }
        else if (route.startsWith('lesson-')) {
            const parts = route.replace('lesson-', '').split(':');
            renderGrammarLesson(parts[0], parts[1]);
        }
        else if (route.startsWith('article-')) {
            renderArticle(route.replace('article-', ''));
        }
        else renderDashboard();
    }

    function renderDashboard() {
        const xp = ProgressManager.getXP();
        const streak = ProgressManager.getStreak();
        
        const html = `
            <div class="view-header">
                <h1>Willkommen zurück!</h1>
                <p>Ready to master German today?</p>
            </div>
            
            <div class="dashboard-grid">
                <div class="content-card dash-card">
                    <div class="icon-wrap"><i class="ph-fill ph-fire"></i></div>
                    <div class="stats-info">
                        <h3>${streak} Day Streak</h3>
                        <p>You're on fire! Keep it up.</p>
                    </div>
                </div>
                <div class="content-card dash-card">
                    <div class="icon-wrap" style="color: var(--warning)"><i class="ph-fill ph-star"></i></div>
                    <div class="stats-info">
                        <h3 id="dashboard-xp">${xp.toLocaleString()} XP</h3>
                        <p>Total experience earned.</p>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid">
                <div class="content-card" style="cursor: pointer;" onclick="document.querySelector('[data-route=\\'flashcards\\']').click()">
                    <i class="ph-fill ph-cards" style="font-size: 3rem; color: var(--secondary); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Daily Vocabulary</h3>
                    <p style="opacity: 0.8;">Learn with images & audio.</p>
                </div>
                <div class="content-card" style="cursor: pointer;" onclick="document.querySelector('[data-route=\\'grammar-levels\\']').click()">
                    <i class="ph-fill ph-books" style="font-size: 3rem; color: var(--primary-light); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Continue Course</h3>
                    <p style="opacity: 0.8;">Resume your grammar lessons.</p>
                </div>
            </div>
        `;
        mainContent.innerHTML = html;
    }

    function renderGrammarLevels() {
        let cardsHtml = '';
        const courseImages = {
            'a1': 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&w=600&q=80',
            'a2': 'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?auto=format&fit=crop&w=600&q=80',
            'b1': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
            'b2': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
            'c1': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80', // Library
            'c2': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80'  // Business/Mastery
        };

        Object.keys(grammarData).forEach(key => {
            const level = grammarData[key];
            const img = courseImages[key] || courseImages['a1'];
            
            cardsHtml += `
                <div class="course-card" data-level="${key}">
                    <div class="course-image" style="background-image: url('${img}');">
                        <span class="course-badge">${level.topics.length} Lessons</span>
                    </div>
                    <div class="course-info">
                        <h3>${level.title}</h3>
                        <p>${level.desc}</p>
                        <button class="btn-primary">Start Course <i class="ph-bold ph-arrow-right"></i></button>
                    </div>
                </div>
            `;
        });

        mainContent.innerHTML = `
            <div class="view-header">
                <h1>Unsere Kurse (Our Courses)</h1>
                <p>Structured learning paths from beginner to mastery.</p>
            </div>
            <div class="course-grid">
                ${cardsHtml}
            </div>
        `;

        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('click', () => navigate(`grammar-topics-${card.getAttribute('data-level')}`));
        });
    }

    function renderGrammarTopics(levelId) {
        const levelData = grammarData[levelId];
        if (!levelData) return;

        let topicsHtml = levelData.topics.map(topic => `
            <div class="topic-item" data-topic="${topic.id}">
                <div>
                    <h3>${topic.title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.2rem;">${topic.questions.length} Exercises</p>
                </div>
                <i class="ph-bold ph-play-circle" style="font-size: 1.5rem; color: var(--secondary);"></i>
            </div>
        `).join('');

        mainContent.innerHTML = `
            <div class="view-header flex-between">
                <div>
                    <h1 style="color: var(--dark)">${levelData.title} Topics</h1>
                    <p>Select a video lesson to begin.</p>
                </div>
                <button class="btn-primary" style="background: var(--text-muted);" onclick="document.querySelector('[data-route=\\'grammar-levels\\']').click()">Back</button>
            </div>
            <div class="topics-list">
                ${topicsHtml}
            </div>
        `;
        
        document.querySelectorAll('.topic-item').forEach(item => {
            item.addEventListener('click', () => navigate(`lesson-${levelId}:${item.getAttribute('data-topic')}`));
        });
    }

    function renderGrammarLesson(levelId, topicId) {
        const levelData = grammarData[levelId];
        const topic = levelData.topics.find(t => t.id === topicId);
        if (!topic) return;

        let examplesHtml = topic.examples.map(ex => `
            <li>
                <button class="btn-audio" onclick="speakGerman('${ex.sentence.replace(/'/g, "\\'")}')">
                    <i class="ph-fill ph-speaker-high"></i>
                </button>
                <span class="badge ${ex.badge}">${ex.text}</span> ${ex.sentence}
            </li>
        `).join('');

        // Quiz State
        let currentQuestionIndex = 0;
        let score = 0;

        mainContent.innerHTML = `
            <div class="view-header flex-between">
                <h1 style="color: var(--dark)">${topic.title}</h1>
                <button class="btn-primary" style="background: var(--text-muted);" onclick="document.querySelector('[data-route=\\'grammar-levels\\']').click()">Back to Courses</button>
            </div>

            <div class="lesson-container">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/5yoHgxaOXgA?si=mIfw7uO3l58b8fED" title="German Video Lesson" allowfullscreen></iframe>
                </div>
                
                <div class="theory-section">
                    <h2 style="margin-bottom: 1rem; color: var(--primary);">Grammar Breakdown</h2>
                    <p>${topic.theory}</p>
                    <ul class="examples">
                        ${examplesHtml}
                    </ul>
                </div>
                
                <div class="exercise-section" style="margin-top: 3rem; border-top: 2px solid #f1f5f9; padding-top: 2rem;" id="quiz-container">
                    <!-- Dynamic Quiz Injected Here -->
                </div>
            </div>
        `;

        function renderQuestion() {
            const quizContainer = document.getElementById('quiz-container');
            if (currentQuestionIndex >= topic.questions.length) {
                // Show Results
                quizContainer.innerHTML = `
                    <h2 style="margin-bottom: 1rem; color: var(--primary);">Lesson Complete!</h2>
                    <p style="font-size: 1.2rem; font-weight: bold;">You scored ${score} out of ${topic.questions.length}!</p>
                    <button class="btn-primary" style="margin-top: 1rem;" onclick="document.querySelector('[data-route=\\'grammar-topics-${levelId}\\']').click()">Return to Topics</button>
                `;
                return;
            }

            const qData = topic.questions[currentQuestionIndex];
            
            let optionsHtml = qData.options.map(opt => `
                <button class="quiz-btn" data-answer="${opt.replace(/"/g, '&quot;')}">${opt}</button>
            `).join('');

            quizContainer.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h2 style="color: var(--primary);">Interactive Quiz</h2>
                    <span style="background: var(--bg-main); padding: 0.3rem 0.8rem; border-radius: 20px; font-weight: bold;">
                        Exercise ${currentQuestionIndex + 1} / ${topic.questions.length}
                    </span>
                </div>
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">${qData.q}</p>
                <div class="quiz-options" id="dynamic-quiz">
                    ${optionsHtml}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
                    <p class="feedback-msg" id="quiz-feedback" style="font-weight: 600; font-size: 1.1rem;"></p>
                    <button class="btn-primary" id="btn-next-question" style="display: none;">Next Exercise <i class="ph-bold ph-arrow-right"></i></button>
                </div>
            `;

            const quizBtns = document.querySelectorAll('#dynamic-quiz .quiz-btn');
            const nextBtn = document.getElementById('btn-next-question');
            let answered = false;

            quizBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (answered) return;
                    const answer = e.target.getAttribute('data-answer');
                    const feedback = document.getElementById('quiz-feedback');
                    
                    if (answer === qData.a) {
                        e.target.classList.add('correct');
                        feedback.innerHTML = '<span style="color: #16a34a">Richtig! (Correct!) +10 XP</span>';
                        ProgressManager.addXP(10);
                        score++;
                    } else {
                        e.target.classList.add('wrong');
                        // Show correct answer
                        quizBtns.forEach(b => { if(b.getAttribute('data-answer') === qData.a) b.classList.add('correct'); });
                        feedback.innerHTML = `<span style="color: #e32525">Falsch. (Wrong) The correct answer is: ${qData.a}</span>`;
                    }
                    answered = true;
                    nextBtn.style.display = 'inline-flex';
                });
            });

            nextBtn.addEventListener('click', () => {
                currentQuestionIndex++;
                renderQuestion();
            });
        }

        renderQuestion();
    }

    let currentFlashcardIndex = 0;
    
    // Shuffle function to randomize vocab
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    let activeVocab = shuffleArray([...vocabularyWords]);
    
    function renderFlashcards() {
        if (currentFlashcardIndex >= activeVocab.length) {
            currentFlashcardIndex = 0;
            activeVocab = shuffleArray([...vocabularyWords]); // reshuffle
        }
        const word = activeVocab[currentFlashcardIndex];

        mainContent.innerHTML = `
            <div class="view-header">
                <h1 style="color: var(--dark)">Vocabulary Practice</h1>
                <p>Card ${currentFlashcardIndex + 1} of ${vocabularyWords.length}</p>
            </div>
            
            <div class="flashcard-container">
                <div class="flashcard" id="current-flashcard">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <div class="fc-image" style="background-image: url('https://loremflickr.com/400/300/${word.translation.toLowerCase()},object/all');"></div>
                            <div class="fc-content">
                                <button class="btn-audio fc-audio" onclick="event.stopPropagation(); speakGerman('${word.article} ${word.word}')">
                                    <i class="ph-fill ph-speaker-high"></i>
                                </button>
                                <span class="article ${word.article}">${word.article}</span>
                                <h2 class="word">${word.word}</h2>
                                <p class="hint" style="color: var(--text-muted); margin-top: 1rem;">Click to flip</p>
                            </div>
                        </div>
                        <div class="flashcard-back">
                            <h2>${word.translation}</h2>
                        </div>
                    </div>
                </div>
                
                <div class="flashcard-controls">
                    <button class="btn-icon-large" id="btn-next" title="Skip"><i class="ph-bold ph-x"></i></button>
                    <button class="btn-icon-large primary" id="btn-known" title="I know this"><i class="ph-bold ph-check"></i></button>
                </div>
            </div>
        `;

        const card = document.getElementById('current-flashcard');
        if (card) card.addEventListener('click', () => card.classList.toggle('flipped'));

        document.getElementById('btn-next').addEventListener('click', () => {
            currentFlashcardIndex++;
            renderFlashcards();
        });
        
        document.getElementById('btn-known').addEventListener('click', () => {
            ProgressManager.addXP(5);
            currentFlashcardIndex++;
            renderFlashcards();
        });
    }

    function renderLibrary() {
        let pdfsHtml = libraryResources.map(res => `
            <div class="pdf-card">
                <i class="ph-fill ${res.icon}"></i>
                <h3>${res.title}</h3>
                <p>${res.desc}</p>
                <button class="btn-primary" onclick="alert('Mock Download: ${res.title}.pdf')">
                    <i class="ph-bold ph-download-simple"></i> Download
                </button>
            </div>
        `).join('');

        mainContent.innerHTML = `
            <div class="view-header">
                <h1 style="color: var(--dark)">Resource Library</h1>
                <p>Download free PDFs, cheat sheets, and grammar books.</p>
            </div>
            <div class="library-grid">
                ${pdfsHtml}
            </div>
        `;
    }

    window.renderVerbsFilter = function(filterStr) {
        renderVerbs(filterStr);
    };

    function renderVerbs(filter = 'all') {
        let filteredVerbs = verbsData;
        if (filter !== 'all') {
            filteredVerbs = verbsData.filter(v => v.case === filter);
        }

        let verbsHtml = filteredVerbs.map(v => `
            <div class="verb-card ${v.case}">
                <h3>${v.verb} <button class="btn-audio" onclick="speakGerman('${v.verb}')" style="width:24px; height:24px; font-size:0.9rem; margin-left:0.5rem;"><i class="ph-fill ph-speaker-high"></i></button></h3>
                <p class="translation">${v.translation}</p>
                <span class="badge ${v.case === 'akkusativ' ? 'blue' : v.case === 'dativ' ? 'green' : 'red'}" style="display:inline-block; margin-bottom:1rem;">+ ${v.case}</span>
                <p class="example"><button class="btn-audio" onclick="speakGerman('${v.example.replace(/'/g, "\\'")}')" style="width:20px; height:20px; font-size:0.8rem; margin-right:0.5rem;"><i class="ph-fill ph-speaker-high"></i></button>${v.example}</p>
            </div>
        `).join('');

        mainContent.innerHTML = `
            <div class="view-header">
                <h1 style="color: var(--dark)">Verb Dictionary</h1>
                <p>Learn which verbs take Akkusativ, Dativ, or Genitiv.</p>
            </div>
            <div class="verbs-filter">
                <button class="btn-primary" style="background: ${filter === 'all' ? 'var(--dark)' : 'var(--text-muted)'}" onclick="renderVerbsFilter('all')">All</button>
                <button class="btn-primary" style="background: ${filter === 'akkusativ' ? '#3b82f6' : 'var(--text-muted)'}" onclick="renderVerbsFilter('akkusativ')">+ Akkusativ</button>
                <button class="btn-primary" style="background: ${filter === 'dativ' ? '#16a34a' : 'var(--text-muted)'}" onclick="renderVerbsFilter('dativ')">+ Dativ</button>
                <button class="btn-primary" style="background: ${filter === 'genitiv' ? '#ef4444' : 'var(--text-muted)'}" onclick="renderVerbsFilter('genitiv')">+ Genitiv</button>
            </div>
            <div class="verb-grid">
                ${verbsHtml}
            </div>
        `;
    }

    function renderMagazines() {
        let magsHtml = magazinesData.map(mag => `
            <div class="mag-card" data-mag="${mag.id}">
                <div class="mag-image" style="background-image: url('${mag.img}');"></div>
                <div class="mag-content">
                    <h3>${mag.title}</h3>
                    <p>${mag.desc}</p>
                    <span style="color: var(--primary); font-weight: bold; font-size: 0.9rem;">Read Article <i class="ph-bold ph-arrow-right"></i></span>
                </div>
            </div>
        `).join('');

        mainContent.innerHTML = `
            <div class="view-header">
                <h1 style="color: var(--dark)">Magazin</h1>
                <p>Read news and articles in German to improve your reading comprehension.</p>
            </div>
            <div class="magazines-grid">
                ${magsHtml}
            </div>
        `;

        document.querySelectorAll('.mag-card').forEach(card => {
            card.addEventListener('click', () => navigate(`article-${card.getAttribute('data-mag')}`));
        });
    }

    function renderArticle(magId) {
        const article = magazinesData.find(m => m.id === magId);
        if (!article) return;

        mainContent.innerHTML = `
            <div class="view-header flex-between">
                <h1 style="color: var(--dark)">Magazin</h1>
                <button class="btn-primary" style="background: var(--text-muted);" onclick="document.querySelector('[data-route=\\'magazines\\']').click()">Back to News</button>
            </div>
            <div class="reader-container">
                <img src="${article.img}" alt="Article Cover">
                <h1>${article.title} <button class="btn-audio" onclick="speakGerman('${article.title.replace(/'/g, "\\'")}')"><i class="ph-fill ph-speaker-high"></i></button></h1>
                <div class="article-body">
                    ${article.content}
                </div>
                <button class="btn-primary" style="margin-top: 2rem; width: 100%; justify-content: center;" onclick="ProgressManager.addXP(50); document.querySelector('[data-route=\\'magazines\\']').click();">
                    Finish Reading (+50 XP)
                </button>
            </div>
        `;
    }
});
