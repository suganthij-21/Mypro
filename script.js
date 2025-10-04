const quizData = [
  {
    question: "What is the chemical symbol for water?",
    answers: ["O2", "H2O", "CO2", "NaCl"],
    correct: "H2O"
  },
  {
    question: "Which element has the atomic number 6?",
    answers: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
    correct: "Carbon"
  },
  {
    question: "Which type of bond is in NaCl?",
    answers: ["Covalent", "Ionic", "Hydrogen", "Metallic"],
    correct: "Ionic"
  },
  {
    question: "What is the pH of pure water?",
    answers: ["7", "1", "0", "14"],
    correct: "7"
  },
  {
    question: "What gas is used in balloons?",
    answers: ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
    correct: "Helium"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quiz = quizData[currentQuestion];
  document.getElementById("question").textContent = quiz.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  quiz.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].correct) {
    score++;
  }
  document.getElementById("score").textContent = `Score: ${score}/${quizData.length}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Complete!";
    document.getElementById("answers").innerHTML = "";
    document.querySelector("#quiz-container button").style.display = "none";
  }
}

window.onload = showQuestion;
