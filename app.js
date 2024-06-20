// Get references to the input fields and result spans
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const sumResult = document.getElementById('sumResult');
const productResult = document.getElementById('productResult');

// Function to calculate sum and product
function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        const product = num1 * num2;

        sumResult.textContent = sum;
        productResult.textContent = product;
    } else {
        alert('Please enter valid numbers.');
    }
}
