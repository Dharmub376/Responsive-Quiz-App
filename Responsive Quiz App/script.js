const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";
    current.options.forEach((option, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;
        li.appendChild(input);
        li.innerHTML += ` ${option}`;
        optionsElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="option"]:checked');

    if (selectedAnswer) {
        const current = questions[currentQuestion];

        if (selectedAnswer.value === current.correctAnswer) {
            score++;
            resultElement.textContent = "Correct!";
            resultElement.style.color = "#2ecc71";
        } else {
            resultElement.textContent = "Wrong!";
            resultElement.style.color = "#e74c3c";
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        resultElement.textContent = "Please select an answer!";
        resultElement.style.color = "#e74c3c";
    }
}

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    // Hide the next button when showing the result
    nextButton.style.display = "none";
}

// Function to load the next question
function loadNextQuestion() {
    resultElement.textContent = ""; // Clear previous result message
    checkAnswer();
    // Display the next button again
    nextButton.style.display = "block";
}

// Initial load
loadQuestion();
