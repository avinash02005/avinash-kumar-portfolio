// Simple Calculator - beginner JavaScript project
// Handles basic arithmetic without using eval().

const previousOperandElement = document.getElementById('previous-operand');
const currentOperandElement = document.getElementById('current-operand');
const messageElement = document.getElementById('message');
const keypad = document.querySelector('.keypad');

let currentOperand = '0';
let previousOperand = '';
let selectedOperator = null;
let shouldResetScreen = false;

function updateDisplay() {
  currentOperandElement.textContent = currentOperand;
  previousOperandElement.textContent = selectedOperator
    ? `${previousOperand} ${selectedOperator}`
    : '';
}

function showMessage(message = '') {
  messageElement.textContent = message;
}

function appendNumber(number) {
  if (shouldResetScreen || currentOperand === 'Error') {
    currentOperand = number;
    shouldResetScreen = false;
  } else if (currentOperand === '0') {
    currentOperand = number;
  } else if (currentOperand.length < 14) {
    currentOperand += number;
  }
  showMessage();
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentOperand === 'Error') return;
  if (selectedOperator !== null && !shouldResetScreen) calculate();
  previousOperand = currentOperand;
  selectedOperator = operator;
  shouldResetScreen = true;
  showMessage();
  updateDisplay();
}

function calculate() {
  if (selectedOperator === null || shouldResetScreen) return;

  const first = Number(previousOperand);
  const second = Number(currentOperand);
  let result;

  switch (selectedOperator) {
    case '+': result = first + second; break;
    case '−': result = first - second; break;
    case '×': result = first * second; break;
    case '÷':
      if (second === 0) {
        currentOperand = 'Error';
        previousOperand = '';
        selectedOperator = null;
        shouldResetScreen = true;
        showMessage('Cannot divide by zero.');
        updateDisplay();
        return;
      }
      result = first / second;
      break;
    default: return;
  }

  // Limit floating-point noise and keep the display readable.
  currentOperand = String(Number(result.toPrecision(10)));
  previousOperand = '';
  selectedOperator = null;
  shouldResetScreen = true;
  showMessage();
  updateDisplay();
}

function clearCalculator() {
  currentOperand = '0';
  previousOperand = '';
  selectedOperator = null;
  shouldResetScreen = false;
  showMessage();
  updateDisplay();
}

function deleteNumber() {
  if (currentOperand === 'Error' || shouldResetScreen) {
    currentOperand = '0';
    shouldResetScreen = false;
  } else {
    currentOperand = currentOperand.length > 1
      ? currentOperand.slice(0, -1)
      : '0';
  }
  showMessage();
  updateDisplay();
}

function addDecimal() {
  if (shouldResetScreen || currentOperand === 'Error') {
    currentOperand = '0.';
    shouldResetScreen = false;
  } else if (!currentOperand.includes('.')) {
    currentOperand += '.';
  }
  showMessage();
  updateDisplay();
}

function applyPercent() {
  if (currentOperand !== 'Error') {
    currentOperand = String(Number(currentOperand) / 100);
    shouldResetScreen = true;
    showMessage();
    updateDisplay();
  }
}

// Event delegation: one listener handles all calculator buttons.
keypad.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  if (button.dataset.number !== undefined) appendNumber(button.dataset.number);
  else if (button.dataset.operator) chooseOperator(button.dataset.operator);
  else {
    switch (button.dataset.action) {
      case 'clear': clearCalculator(); break;
      case 'delete': deleteNumber(); break;
      case 'decimal': addDecimal(); break;
      case 'percent': applyPercent(); break;
      case 'equals': calculate(); break;
      default: break;
    }
  }
});

// Keyboard support: digits, decimal, operators, Enter, Backspace and Escape.
document.addEventListener('keydown', (event) => {
  if (/^[0-9]$/.test(event.key)) appendNumber(event.key);
  else if (event.key === '.') addDecimal();
  else if (event.key === '+') chooseOperator('+');
  else if (event.key === '-') chooseOperator('−');
  else if (event.key === '*') chooseOperator('×');
  else if (event.key === '/') { event.preventDefault(); chooseOperator('÷'); }
  else if (event.key === 'Enter' || event.key === '=') { event.preventDefault(); calculate(); }
  else if (event.key === 'Backspace') deleteNumber();
  else if (event.key === 'Escape') clearCalculator();
});

updateDisplay();
