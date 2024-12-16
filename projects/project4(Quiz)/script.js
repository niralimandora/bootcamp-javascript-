const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
      ],
    },
    {
      question: "Which programming language is used for web development?",
      answers: [
        { text: "Python", correct: false },
        { text: "HTML", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false },
      ],
    },
    {
      question: "What is 5 + 3?",
      answers: [
        { text: "5", correct: false },
        { text: "8", correct: true },
        { text: "10", correct: false },
        { text: "6", correct: false },
      ],
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: [
          { text: "Earth", correct: false },
          { text: "Mars", correct: false },
          { text: "Jupiter", correct: true },
          { text: "Saturn", correct: false },
        ],
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        answers: [
          { text: "Asia", correct: false },
          { text: "South America", correct: false },
          { text: "Africa", correct: true },
          { text: "Europe", correct: false },
        ],
      },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    nextButton.classList.add("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("answer-btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answersElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.classList.add("hidden");
    while (answersElement.firstChild) {
      answersElement.removeChild(answersElement.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
      score++;
    }
    Array.from(answersElement.children).forEach((button) => {
      button.classList.add(button.dataset.correct === "true" ? "correct" : "wrong");
      button.disabled = true;
    });
    nextButton.classList.remove("hidden");
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });
  
  function showResults() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = score;
  }
  
  restartButton.addEventListener("click", startQuiz);
  
  // Start the quiz on page load
  startQuiz();
  