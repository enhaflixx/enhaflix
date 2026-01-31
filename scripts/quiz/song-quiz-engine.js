// Song Quiz Engine
class SongQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            "given-taken": 0,
            "fever": 0,
            "go-big-or-go-home": 0,
            "shout-out": 0,
            "bills": 0,
            "sweet-venom": 0,
            "moonstruck": 0,
            "helium": 0
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
        const question = SONG_QUIZ.questions[questionIndex];
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

    selectAnswer(song) {
        this.scores[song]++;
        this.currentQuestion++;

        if (this.currentQuestion < SONG_QUIZ.questions.length) {
            this.showQuestion(this.currentQuestion);
        } else {
            this.showResult();
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        const progress = ((this.currentQuestion + 1) / SONG_QUIZ.questions.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Question ${this.currentQuestion + 1} of ${SONG_QUIZ.questions.length}`;
    }

    showResult() {
        // Find song with highest score
        let maxScore = 0;
        let resultSong = 'given-taken';
        
        for (const [song, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                resultSong = song;
            }
        }

        const result = SONG_QUIZ.results[resultSong];
        document.getElementById('result-song').textContent = result.name;
        document.getElementById('result-image').src = result.image;
        document.getElementById('result-image').alt = result.name;
        document.getElementById('result-description').textContent = result.description;

        document.getElementById('quiz-questions').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.scores = {
            "given-taken": 0,
            "fever": 0,
            "go-big-or-go-home": 0,
            "shout-out": 0,
            "bills": 0,
            "sweet-venom": 0,
            "moonstruck": 0,
            "helium": 0
        };
        
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
}

// Global instance
const songQuiz = new SongQuiz();

// Global functions for HTML buttons
function startQuiz() {
    songQuiz.startQuiz();
}

function restartQuiz() {
    songQuiz.restartQuiz();
}

function goToQuizHub() {
    window.location.href = 'quiz-hub.html';
}