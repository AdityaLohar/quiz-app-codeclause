const allQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Vietnam", correct: false },
    ],
  },
  {
    question: "What is the currency of Brazil?",
    answers: [
      { text: "Peso", correct: false },
      { text: "Real", correct: true },
      { text: "Dollar", correct: false },
      { text: "Euro", correct: false },
    ],
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1912", correct: true },
      { text: "1905", correct: false },
      { text: "1925", correct: false },
      { text: "1930", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    answers: [
      { text: "F. Scott Fitzgerald", correct: true },
      { text: "Ernest Hemingway", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
    ],
  },
  {
    question: "Which country is famous for its pyramids?",
    answers: [
      { text: "Egypt", correct: true },
      { text: "Mexico", correct: false },
      { text: "Italy", correct: false },
      { text: "Greece", correct: false },
    ],
  },
  {
    question: "What is the currency of South Africa?",
    answers: [
      { text: "Rand", correct: true },
      { text: "Dollar", correct: false },
      { text: "Euro", correct: false },
      { text: "Yen", correct: false },
    ],
  },
  {
    question: "In which year did the first moon landing occur?",
    answers: [
      { text: "1969", correct: true },
      { text: "1975", correct: false },
      { text: "1982", correct: false },
      { text: "1990", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: [
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Polar Bear", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Silver", correct: false },
    ],
  },
  {
    question: "What is the official language of Brazil?",
    answers: [
      { text: "Portuguese", correct: true },
      { text: "Spanish", correct: false },
      { text: "French", correct: false },
      { text: "Italian", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const optionsBtns = document.getElementById("options");
const nextBtn = document.getElementById("next");
const startBtn = document.getElementById("start-quiz");

startBtn.addEventListener("click", handleStartClick);

function handleStartClick() {
  startBtn.style.display = "none";
  questionElement.style.display = "block";
  optionsBtns.style.display = "block";
  nextBtn.style.display = "block";

  startQuiz();
}

const shuffledQuestions = shuffleArray(allQuestions);
const questions = shuffledQuestions.slice(0, 5);
console.log(questions);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let questionIndex = 0;
let score = 0;

function startQuiz() {
  questionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetOptions();
  let currentQuestion = questions[questionIndex];
  questionElement.innerHTML =
    questionIndex + 1 + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("options");
    optionsBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetOptions() {
  nextBtn.style.display = "none";
  while (optionsBtns.firstChild) {
    optionsBtns.removeChild(optionsBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    score++;
    console.log(isCorrect);
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(optionsBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetOptions();
  question.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (questionIndex < questions.length) {
    handleNextButton();
  } else {
    startBtn.style.display = "block";
    questionElement.style.display = "none";
    optionsBtns.style.display = "none";
    nextBtn.style.display = "none";
  }
});
