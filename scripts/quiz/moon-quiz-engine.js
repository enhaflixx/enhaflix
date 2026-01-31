// Moon Quiz Engine
class MoonQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            "heli": 0,
            "jaan": 0,
            "jino": 0,
            "solon": 0,
            "shion": 0,
            "jakah": 0,
            "noa": 0,
            "sooha": 0
        };
        this.init();
    }

    init() {
        this.updateProgress();
    }

    startQuiz() {
        document.getElementById('quiz-start').style.display = 'none';
        document.getElementById('quiz-questions').style.display = 'block';
        this.showQuestion(0);
    }

    showQuestion(questionIndex) {
        const question = MOON_QUIZ.questions[questionIndex];
        const questionText = document.getElementById('question-text');
        const questionImage = document.getElementById('question-image');
        const optionsContainer = document.getElementById('options-container');

        questionText.textContent = question.question;
        questionImage.src = question.image;
        questionImage.alt = question.question;

        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.onclick = () => this.selectAnswer(option.moon);
            optionsContainer.appendChild(button);
        });

        this.updateProgress();
    }

    selectAnswer(moon) {
        this.scores[moon]++;
        this.currentQuestion++;

        if (this.currentQuestion < MOON_QUIZ.questions.length) {
            this.showQuestion(this.currentQuestion);
        } else {
            this.showResult();
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        const progress = ((this.currentQuestion + 1) / MOON_QUIZ.questions.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Question ${this.currentQuestion + 1} of ${MOON_QUIZ.questions.length}`;
    }

    showResult() {
        // Find moon with highest score
        let maxScore = 0;
        let resultMoon = 'heli';
        
        for (const [moon, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                resultMoon = moon;
            }
        }

        const result = MOON_QUIZ.results[resultMoon];
        document.getElementById('result-moon').textContent = result.name;
        document.getElementById('result-image').src = result.image;
        document.getElementById('result-image').alt = result.name;
        document.getElementById('result-description').textContent = result.description;

        document.getElementById('quiz-questions').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.scores = {
            "heli": 0,
            "jaan": 0,
            "jino": 0,
            "solon": 0,
            "shion": 0,
            "jakah": 0,
            "noa": 0,
            "sooha": 0
        };
        
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
}

// Global instance
const moonQuiz = new MoonQuiz();

// Global functions for HTML buttons
function startQuiz() {
    moonQuiz.startQuiz();
}

function restartQuiz() {
    moonQuiz.restartQuiz();
}

function goToQuizHub() {
    window.location.href = 'quiz-hub.html';
}