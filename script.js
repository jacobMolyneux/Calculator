// basic functions 
function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
// function operator(a, b, operation{
    
// }
// selecting elements 
const display = document.getElementById('display');
const number = document.getElementByClassName('number');
const  calcValue = 0;
display.textContent = calcValue;
function clickedNumber(){
    calcValue = number.textContent;
    display.textContent = calcValue;
}
number.addEventListener('click', clickedNumber);





