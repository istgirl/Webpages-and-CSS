const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Earth", "Venus"],
    }
    // Add more questions here
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
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
            nextButton.style.display = 'block'; // Display the next question button after an option is selected
        };
        optionsElement.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none'; // Hide the next question button for the next question
    } else {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        homeButton.style.display = 'block'; // Display the "Back to Homepage" button when the quiz is completed
    }
}

function startQuiz() {
    document.querySelector('.quiz-container').style.display = 'block';
    document.querySelector('.start-quiz-container').style.display = 'none'; // Hide the start quiz container
    document.querySelector('h1').style.display = 'none'; // Hide the heading
    loadQuestion();
}


function goToHomepage() {
    window.location.href = "homepage.html"; // Replace "homepage.html" with your actual homepage URL
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
homeButton.addEventListener('click', goToHomepage);
