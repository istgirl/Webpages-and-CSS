const questions = [
    {
        question: "How confident do you feel when doing maths?",
        options: ["super confident", "very confident", "somewhat confident", "not confident"],
    },
    {
        question: "How confident do you feel when doing english?",
        options: ["super confident", "very confident", "somewhat confident", "not confident"],
    },
    {
        question: "What math textbook does you school follow?",
        options: ["new century", "cambridge", "signpost", "other"],
    },
    {
        question: "When it comes to writting what do you LEAST prefer?",
        options: ["persuasive writting", "creative writting", "recount writting", "other"],
    },
    {
        question: "Why are you looking for a tutor?",
        options: ["selective test", "OC test", "HSC", "general"],
    },
    {
        question: "What year group are you in?",
        options: ["year 1-3", "year 4-6", "year 7-9", "year 10-12"],
    },
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('startButton');
const quizContainer = document.querySelector('.quiz-container');
const resultContainer = document.getElementById('resultContainer');
const resultText = document.getElementById('resultText');
const homeButton = document.getElementById('homeButton');

function loadQuestion() {
    const currentQuizData = questions[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.onclick = function() {
            nextButton.style.display = 'block';
        };
        optionsElement.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none'; 
    } else {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        homeButton.style.display = 'block'; 
    }
}

function startQuiz() {
    document.querySelector('.quiz-container').style.display = 'block';
    document.querySelector('.start-quiz-container').style.display = 'none'; // Hide the start quiz container
    document.querySelector('h1').style.display = 'none'; // Hide the heading
    loadQuestion();
}


function goToHomepage() {
    window.location.href = "homepage.html"; 
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
homeButton.addEventListener('click', goToHomepage);

