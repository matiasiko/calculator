const display = document.getElementById('result');
const keyBtns = document.querySelectorAll('button');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

function displayValue(number) {
    // if current display value is 0 , replace it, if not add number
    const displayValue = display.textContent;
    display.textContent = displayValue === '0' ? number : displayValue + number;
}

// add eventlisteners for numbers, operators and decimal buttons
keyBtns.forEach((keyBtn) => {
    if (keyBtn.classList.length === 0) {
      keyBtn.addEventListener('click', () => displayValue(keyBtn.value));
    } else if (keyBtn.classList.contains('operator')) {
      keyBtn.addEventListener('click', () => displayValue(keyBtn.value));
    } else if (keyBtn.classList.contains('decimal')) {
      keyBtn.addEventListener('click', () => addDecimal());
    }
  });

  function addDecimal() {
    // If no decimal, add one
    if (!display.textContent.includes('.')) {
      display.textContent = `${display.textContent}.`;
    }
  }

// reset display

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

// equal.addEventListener('click', calculate);