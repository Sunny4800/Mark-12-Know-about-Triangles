const inputs = document.querySelectorAll('.angle');
const trianglebtn = document.querySelector('#triangle-btn');
const outputvalue = document.querySelector('#output');

function calculatesumofangles(angle1,angle2,angle3){
    const sumofangles = angle1 + angle2 + angle3;
    return sumofangles;
}

function isTriangle(){
    const sumofangles = calculatesumofangles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(inputs[0].value =="" || inputs[1].value=="" || inputs[2].value==""){
        output.innerText = "Please Enter All the Fields 😐";
    }
    else if(sumofangles === 180){
        outputvalue.innerText = "Yay , The Angles can Form a Triangle 🔺";
    }
    else{
        outputvalue.innerText = "Oh No ! The Angles can't form a Triangle";
    }

}



trianglebtn.addEventListener("click", isTriangle)