const answers = [
    "90°",
    "60°",
    "One right angle",
    "12, 16, 20",
    "Equilateral",
    "80°",
    "10°",
    "a + b + c",
    "0",
    "45°",
  ];
  
  
  
  const quizForm = document.querySelector(".quiz-form");
  const submitBtn = document.querySelector("#submit");
  const outputValue = document.querySelector("#result");
  
  submitBtn.addEventListener("click", submitForm);
  let score = 0;
  
  function submitForm(e) {
    e.preventDefault();
    score = 0;
    const formResults = new FormData(quizForm);
  
    for (let value of formResults.entries()) {
      const questionNumber = parseInt(value[0]);
      const userAnswer = value[1];
      const realAnswer = answers[questionNumber - 1];
  
      if (userAnswer === realAnswer) {
        score++;
      }
    }
  
    outputValue.innerHTML = `Your Score is ${score}`;
  }
  