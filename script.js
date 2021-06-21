// basic functions
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
let numberClicked = (button) => {
  let value = button.textContent;
  let display = document.getElementById("display");
  display.textContent = value;
  console.log(button.textContent);
};
// creating buttons
for (let i = 0; i < 10; i++) {
  let button = document.createElement("div");
  button.textContent = i;
  button.setAttribute("id", i);
  button.className = "numberButton";
  button.addEventListener("click", function () {
    let display = document.getElementById("displayInput");
    display.value = button.textContent;
    console.log(button.textContent);
  });
  document.getElementById("numberContainer").appendChild(button);
}
operatorClicked = (operation) => {
  if (operation === "addition") {
    addition();
  } else if (operation === "subtraction") {
    subtraction();
  } else if (operation === "multiply") {
    multiply();
  } else if (operation === "divide") {
    divide();
  }
};
