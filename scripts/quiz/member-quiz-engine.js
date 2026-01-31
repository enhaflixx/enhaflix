// Quiz Engine
class EnhypenQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            heeseung: 0, jay: 0, jake: 0, 
            sunghoon: 0, sunoo: 0, jungwon: 0, niki: 0
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
        const question = ENHYPEN_QUIZ.questions[questionIndex];
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
            button.onclick = () => this.selectAnswer(option.member);
            optionsContainer.appendChild(button);
        });

        this.updateProgress();
    }

    selectAnswer(member) {
        this.scores[member]++;
        this.currentQuestion++;

        if (this.currentQuestion < ENHYPEN_QUIZ.questions.length) {
            this.showQuestion(this.currentQuestion);
        } else {
            this.showResult();
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        const progress = ((this.currentQuestion + 1) / ENHYPEN_QUIZ.questions.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Question ${this.currentQuestion + 1} of ${ENHYPEN_QUIZ.questions.length}`;
    }

    showResult() {
        // Find member with highest score
        let maxScore = 0;
        let resultMember = 'heeseung';
        
        for (const [member, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                resultMember = member;
            }
        }

        const result = ENHYPEN_QUIZ.results[resultMember];
        document.getElementById('result-member').textContent = result.name;
        document.getElementById('result-image').src = result.image;
        document.getElementById('result-image').alt = result.name;
        document.getElementById('result-description').textContent = result.description;

        document.getElementById('quiz-questions').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.scores = {
            heeseung: 0, jay: 0, jake: 0, 
            sunghoon: 0, sunoo: 0, jungwon: 0, niki: 0
        };
        
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
}

// Global instance
const quiz = new EnhypenQuiz();

// Global functions for HTML buttons
function startQuiz() {
    quiz.startQuiz();
}

function restartQuiz() {
    quiz.restartQuiz();
}

function goHome() {
    window.location.href = 'index.html';
}