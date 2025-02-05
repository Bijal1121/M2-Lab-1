// Function to update the webpage with results
function displayResult(result) {
    let outputElement = document.getElementById("output");

    if (!outputElement) {
        outputElement = document.createElement("p");
        outputElement.id = "output";
        document.body.appendChild(outputElement);
    }

    outputElement.innerText = result;
}

// STEP 1
function halfNumber(n) {
    let result = `Half of ${n} is ${n / 2}.`;
    displayResult(result);
}

// STEP 2
function squareNumber(n) {
    let result = `The result of squaring the number ${n} is ${n * n}.`;
    displayResult(result);
}

// STEP 3
function percentOf(m, n) {
    let percentage = (m / n) * 100;
    let result = `${m} is ${percentage}% of ${n}.`;
    displayResult(result);
}

// STEP 4
function findModulus(m, n) {
    let modulus = n % m;
    let result = `${modulus} is the modulus of ${m} and ${n}.`;
    displayResult(result);
}

// Prompt-based interaction for the user
var m, n;
var option = window.prompt(
    'Choose operation: \n1. Half Number\n2. Square Number\n3. Percent Of\n4. Find Modulus\n'
);

if (option == 1) {
    n = window.prompt('Half Number\nEnter the number: ');
    halfNumber(parseFloat(n));
} else if (option == 2) {
    n = window.prompt('Square Number\nEnter the number: ');
    squareNumber(parseFloat(n));
} else if (option == 3) {
    m = window.prompt('Percent Of\nEnter first number: ');
    n = window.prompt('Percent Of\nEnter second number: ');
    percentOf(parseFloat(m), parseFloat(n));
} else if (option == 4) {
    m = window.prompt('Find Modulus\nEnter first number: ');
    n = window.prompt('Find Modulus\nEnter second number: ');
    findModulus(parseFloat(m), parseFloat(n));
} else {
    window.alert('Please enter a correct operation.');
}
