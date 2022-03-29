const display = document.getElementById('result');
const keyBtns = document.querySelectorAll('button');
const clear = document.getElementById('clear');

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
      keyBtn.addEventListener('click', () => displayValue(keyBtn.value));
    }
  });

// reset display





