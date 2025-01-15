// Simple Arithmetic Calculator in JavaScript
// This code can be run in a browser or a Node.js environment

// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    // Check for division by zero
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Function to display the menu and handle user input
function calculator() {
    // Prompt the user for input
    let operation = prompt("Choose an operation: add, subtract, multiply, divide").toLowerCase();
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Perform the selected operation
    let result;
    switch (operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation. Please choose add, subtract, multiply, or divide.";
    }

    // Display the result
    alert("The result is: " + result);
}

// Run the calculator function
calculator();
