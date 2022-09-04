const sides = document.querySelectorAll('.side-input');
const Hypotenusebtn = document.querySelector('#hypotenuse');
const outputvalue = document.querySelector('#output')

function CalculateHypotenuse(){
    const sumofsquares = calculatesumofsquares(Number(sides[0].value),Number(sides[1].value));

}

function calculatesumofsquares(side1,side2){
    const sumofsquares = Math.sqrt((side1*side1) + (side2*side2)) 
    console.log(sumofsquares);
    if(side1 === "" || side2==""){
        outputvalue.innerText = "Please enter valid lengths !!"
    }
    else{
        outputvalue.innerText = `The Length of the Hypotenuse is ${sumofsquares} cm²`;
    }
}

Hypotenusebtn.addEventListener("click", CalculateHypotenuse);