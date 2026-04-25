// Toxic Quiz Engine
class ToxicQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            "fever": 0,
            "given-taken": 0,
            "polaroid-love": 0,
            "bite-me": 0,
            "drunk-dazed": 0,
            "sacrifice": 0,
            "future-perfect": 0
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
        const question = TOXIC_QUIZ.questions[questionIndex];
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
            button.onclick = () => this.selectAnswer(option.song);
            optionsContainer.appendChild(button);
        });

        this.updateProgress();
    }

    selectAnswer(toxic) {
        this.scores[toxic]++;
        this.currentQuestion++;

        if (this.currentQuestion < TOXIC_QUIZ.questions.length) {
            this.showQuestion(this.currentQuestion);
        } else {
            this.showResult();
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        const progress = ((this.currentQuestion + 1) / TOXIC_QUIZ.questions.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Question ${this.currentQuestion + 1} of ${TOXIC_QUIZ.questions.length}`;
    }

    showResult() {
        // Find toxic with highest score
        let maxScore = 0;
        let resultToxic = 'fever';
        
        for (const [toxic, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                resultToxic = toxic;
            }
        }

        const result = TOXIC_QUIZ.results[resultToxic];
        document.getElementById('result-toxic').textContent = result.name;
        document.getElementById('result-image').src = result.image;
        document.getElementById('result-image').alt = result.name;
        document.getElementById('result-description').textContent = result.description;

        document.getElementById('quiz-questions').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.scores = {
            "fever": 0,
            "given-taken": 0,
            "polaroid-love": 0,
            "bite-me": 0,
            "drunk-dazed": 0,
            "sacrifice": 0,
            "future-perfect": 0
        };
        
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
}

// Global instance
const toxicQuiz = new ToxicQuiz();

// Global functions for HTML buttons
function startQuiz() {
    toxicQuiz.startQuiz();
}

function restartQuiz() {
    toxicQuiz.restartQuiz();
}

function goToQuizHub() {
    window.location.href = 'quiz-hub.html';
}
