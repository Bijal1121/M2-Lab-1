// Function to get the computer's choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        return `Computer wins! ${computerChoice} beats ${userChoice}.`;
    }
}

// Function to display the result on the webpage
function displayResult(result) {
    let outputElement = document.getElementById("output");

    if (!outputElement) {
        outputElement = document.createElement("p");
        outputElement.id = "output";
        document.body.appendChild(outputElement);
    }

    outputElement.innerText = result;
}

// Start the game
function playGame() {
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }

    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);

    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`);
    displayResult(result);
}

// Start the game when the script runs
playGame();
