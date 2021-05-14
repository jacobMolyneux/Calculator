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

const display = document.getElementById('display');
const number = document.getElementsByClassName('number');
displayValue = 0;
display.textContent = displayValue;
number.addEventListener('click', inputValue);

function inputValue(){
    displayValue = number.textContent;
    display.textContent = 'displayValue';
}




