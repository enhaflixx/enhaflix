// Era Quiz Engine
class EraQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            "border-day-one": 0,
            "border-carnival": 0,
            "dimension-dilemma": 0,
            "manifesto": 0,
            "dark-blood": 0,
            "orange-blood": 0,
            "romance-untold": 0,
            "desire-unleash": 0
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
        const question = ERA_QUIZ.questions[questionIndex];
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
            button.onclick = () => this.selectAnswer(option.era);
            optionsContainer.appendChild(button);
        });

        this.updateProgress();
    }

    selectAnswer(era) {
        this.scores[era]++;
        this.currentQuestion++;

        if (this.currentQuestion < ERA_QUIZ.questions.length) {
            this.showQuestion(this.currentQuestion);
        } else {
            this.showResult();
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        const progress = ((this.currentQuestion + 1) / ERA_QUIZ.questions.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Question ${this.currentQuestion + 1} of ${ERA_QUIZ.questions.length}`;
    }

    showResult() {
        // Find era with highest score
        let maxScore = 0;
        let resultEra = 'border-day-one';
        
        for (const [era, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                resultEra = era;
            }
        }

        const result = ERA_QUIZ.results[resultEra];
        document.getElementById('result-era').textContent = result.name;
        document.getElementById('result-image').src = result.image;
        document.getElementById('result-image').alt = result.name;
        document.getElementById('result-description').textContent = result.description;

        document.getElementById('quiz-questions').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.scores = {
            "border-day-one": 0,
            "border-carnival": 0,
            "dimension-dilemma": 0,
            "manifesto": 0,
            "dark-blood": 0,
            "orange-blood": 0,
            "romance-untold": 0,
            "desire-unleash": 0
        };
        
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
}

// Global instance
const eraQuiz = new EraQuiz();

// Global functions for HTML buttons
function startQuiz() {
    eraQuiz.startQuiz();
}

function restartQuiz() {
    eraQuiz.restartQuiz();
}

function goToQuizHub() {
    window.location.href = 'quiz-hub.html';
}