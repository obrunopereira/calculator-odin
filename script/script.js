const buttons = document.querySelector('.buttons');
const result = document.querySelector('.digits');

function add(a, b) {
    return a + b;    
}

function subtract(a, b) {
    return a - b;    
}

function multiply(a, b) {
    return a * b;    
}

function divide(a, b) {
    return a / b;    
}

function operate(operation, number1, number2) {
    switch (operation) {
        case 'add': {
            return add(number1, number2);
            break;
        }
        case 'subtract': {
            return subtract(number1, number2);
            break;
        }
        case 'multiply': {
            return multiply(number1, number2);
            break;
        }
        case 'divide': {
            return divide(number1, number2);
            break;
        }
    }
}

let key;
let mainDisplay;
let logDisplay;

buttons.addEventListener('click', e => {
    key = e.target.value;
    result.textContent = key;   

});

// 1. when click on numbers, update display
//      if the number is zero and no prior number was added, to nothing
//     when click on dot,
//          if there is no prior number, put a '0.' on display 
//          if  there is, put a '.' after the number
// when click an operator, 
//      if there is no number on top display, preserve the entered number on  major display and pass the number + the operator to top display
//      if there is a number on top-display, evaluate the operation, put the result + sign on top display and the result on major display
// if user changes the operation, update the operation signal displayed on top-display
// when user enter a new number (or press 'decimal'), update the display (like on 1)
// if user presses '=', add the bottom display number to the top display number (with the operator), put a equal sign after it and display result on major display
// if user enter another number after pressing equal, clear the displays (and their variables) and start getting the new value