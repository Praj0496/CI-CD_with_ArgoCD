// app.js

// Import the evaluate function from mathjs
import { evaluate } from 'mathjs';

// Assuming you have an HTML input field with the ID 'display'
const display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate() {
    try {
        const result = evaluate(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
