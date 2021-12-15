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
let mainDisplay = '';
let logDisplay = '';
let decimalUsed = false;

buttons.addEventListener('click', e => updateDisplay(e.target.value));

function inputNumber(number) {
    // if first number enter is '0', ignores it
    (number === '0' && mainDisplay === '') ? '' : mainDisplay += number;
}
function inputDecimal() {
    if (!decimalUsed) {
        decimalUsed = true;
        (mainDisplay === '') ? mainDisplay = '0.' : mainDisplay += '.';
    }
};

function eraseLastChar() {
    // If erased character is a decimal point, enable another user o decimal
    if (mainDisplay.slice(-1) === '.') decimalUsed = false;
    mainDisplay = mainDisplay.slice(0, -1)
}

function updateDisplay(key) {
    
    // Numbers and decimal signal
    switch (key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9': 
        case '0': {
            inputNumber(key);
            break;
        }
        case '.': {
            inputDecimal();
            break;
        }

        
        // Operations
        case "+": {
            
            break;
        }
        case "-": {

            break;
        }
        case "*": {
            
            break;
        }
        case "/": {
            
            break;
        }
        case "=": {
            
            break;
        }
        case "signal": {
            mainDisplay = (Number(mainDisplay) * -1);
            mainDisplay.toFixed(2);
            break;
        }
        
        // Other action buttons
        case 'clear': {//TODO: MAKE SURE TO CLEAR ALL VARIABLES
            mainDisplay = '';
            decimalUsed = false;
            break;
        }
        case "backspace": {           
            eraseLastChar();
            break;
        }
    }
    result.textContent = mainDisplay; 
}

// 1. when click on numbers, update display
//      if the number is zero and no prior number was added, to nothing
//     when click on dot,
//          if there is no prior number, put a '0.' on display 
//          if  there is, put a '.' after the number
// 
// when click an operator, 
//      if there is no number on top display, preserve the entered number on  major display and pass the number + the operator to top display
//      if there is a number on top-display, evaluate the operation, put the result + sign on top display and the result on major display
// if user changes the operation, update the operation signal displayed on top-display
// when user enter a new number (or press 'decimal'), update the display (like on 1)
// if user presses '=', add the bottom display number to the top display number (with the operator), put a equal sign after it and display result on major display
// if user enter another number after pressing equal, clear the displays (and their variables) and start getting the new value