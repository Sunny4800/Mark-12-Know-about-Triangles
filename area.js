const firstside = document.querySelector("#first-side");
const secondside = document.querySelector("#second-side");
const thirdside = document.querySelector("#third-side");
const calculate = document.querySelector("#calculate-area");
const outputvalue = document.querySelector("#output");

function calculateAreaoftheTriangles(e) {
  e.preventDefault();

  const firstSideValue = Number(firstside.value);
  const secondSideValue = Number(secondside.value);
  const thirdSideValue = Number(thirdside.value);

  if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const arearesult = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(4);
    outputvalue.innerText = `The Area of a triangle using heron's formula is ${arearesult} units`;
  } else {
    outputvalue.innerText = "Please Enter valid side lengths";
  }
}

calculate.addEventListener("submit", calculateAreaoftheTriangles);