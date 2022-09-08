
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

let score = 0;

const quiz = document.querySelector(".formQuiz");
const submitbtn = document.querySelector("#submit");
const outputvalue = document.querySelector("#output");

submitbtn.addEventListener("click", submitform);

function submitform(e) {
  e.preventDefault();
  score = 0;
  const formResults = new FormData(quiz);

  for (let value of formResults.entries()) {
    const questionno = parseInt(value[0]);
    const userans = value[1];
    const realans = answers[questionno - 1];

    if (userans === realans) {
      score++;
    }
  }

  outputvalue.innerText = `Your score is ${score}`;
}