const display = document.getElementById('result');
const keyBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear');
const equal = document.getElementById('equal');

let firstNumber = 0;
let operatorValue = '';
let waitingNextValue = false;

function displayNumberValue(number) {
  // Replace current display value if first value is entered
  if (waitingNextValue) {
    display.textContent = number;
    waitingNextValue = false;
  } else {
    // If current display value is 0, replace it, if not add number to display value
    const displayValue = display.textContent;
    display.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  // If operator pressed, don't add decimal
  if (waitingNextValue) return;
  // If no decimal, add one
  if (!display.textContent.includes('.')) {
    display.textContent = `${display.textContent}.`;
  }
}


function useOperator(operator) {
  const currentValue = Number(display.textContent);
  // Prevent multiple operators
  if (operatorValue && waitingNextValue) {
    operatorValue = operator;
    return;
  }
  // Assign firstNumber if no value
  if (!firstNumber) {
    firstNumber = currentValue;
  } else {
    const calculation = operate(firstNumber, currentValue, operatorValue);
    display.textContent = calculation;
    firstNumber = calculation;
  }
  // Ready for next value, store operator
  waitingNextValue = true;
  operatorValue = operator;
}

// Add Event Listeners for numbers, operators, decimal
keyBtns.forEach((keyBtn) => {
  if (keyBtn.classList.length === 0) {
    keyBtn.addEventListener('click', () => displayNumberValue(keyBtn.value));
  } else if (keyBtn.classList.contains('operator')) {
    keyBtn.addEventListener('click', () => useOperator(keyBtn.value));
  } else if (keyBtn.classList.contains('decimal')) {
    keyBtn.addEventListener('click', () => addDecimal());
  }
});

// Reset display
function resetAll() {
  firstNumber = 0;
  operatorValue = '';
  waitingNextValue = false;
  display.textContent = '0';
}

clearBtn.addEventListener('click', resetAll);


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

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
  }
};
