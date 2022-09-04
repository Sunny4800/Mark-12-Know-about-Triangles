const quizForm = document.querySelector('.quiz-form');
const submitbtn = document.querySelector('#submit');
const outputValue = document.querySelector('#output'); 

const correctAnswers = ["90°","Right Angled","one right angle","12, 16, 20","Equilateral triangle","80°","10°","a + b + c","no","45°",];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formresults = new FormData(quizForm);
    for(let value of formresults.values()){
        if(value  === correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputValue.innerText = `Your Score is ${score}`;
}

submitbtn.addEventListener("click", calculateScore)
  