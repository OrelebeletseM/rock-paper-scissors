console.log("Rock Paper Scissors Game Loaded!");

// Scores
let humanScore = 0;
let computerScore = 0;
let gameActive = true;

// Get DOM elements
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');

// Helper function - keep this exactly the same
function getComputerChoice() {
    const randomNumber = Math.random();
    
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Modified playRound - no longer takes scores as parameters, updates global variables
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    let roundMessage = "";
    let result = ""; // 'win', 'lose', or 'tie'
    
    if (humanChoice === computerChoice) {
        roundMessage = `It's a tie! Both chose ${humanChoice}. No points awarded.`;
        result = "tie";
        console.log("It's a tie! No points awarded.");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
        result = "win";
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } 
    else {
        roundMessage = `You lose! ${computerChoice} beats ${humanChoice}!`;
        result = "lose";
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
    console.log("---");
    
    // Update the DOM
    updateDisplay(roundMessage, result, humanChoice, computerChoice);
    
    return result;
}

// New function to update the display
function updateDisplay(roundMessage, result, humanChoice, computerChoice) {
    // Add the round result to the results div (newest on top)
    const resultElement = document.createElement('p');
    resultElement.textContent = roundMessage;
    resultsDiv.insertBefore(resultElement, resultsDiv.firstChild);
    
    // Update the score display
    scoreDiv.textContent = `📊 Score - You: ${humanScore} | Computer: ${computerScore}`;
    
    // Check for game winner (first to 5)
    checkWinner();
}

// New function to check if someone has won the game
function checkWinner() {
    if (humanScore === 5) {
        winnerDiv.textContent = "🎉🏆 CONGRATULATIONS! YOU WON THE GAME! 🏆🎉";
        winnerDiv.style.color = "green";
        winnerDiv.style.fontSize = "24px";
        winnerDiv.style.fontWeight = "bold";
        gameActive = false;
        disableButtons(true);
        console.log("🎉 Congratulations! You won the game! 🎉");
        return true;
    } else if (computerScore === 5) {
        winnerDiv.textContent = "💻😭 COMPUTER WINS THE GAME! BETTER LUCK NEXT TIME! 😭💻";
        winnerDiv.style.color = "red";
        winnerDiv.style.fontSize = "24px";
        winnerDiv.style.fontWeight = "bold";
        gameActive = false;
        disableButtons(true);
        console.log("💻 Computer wins the game! Better luck next time! 💻");
        return true;
    }
    return false;
}

// New function to disable buttons when game ends
function disableButtons(disabled) {
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    
    rockBtn.disabled = disabled;
    paperBtn.disabled = disabled;
    scissorsBtn.disabled = disabled;
    
    if (disabled) {
        // Add a disabled style
        rockBtn.style.opacity = "0.5";
        paperBtn.style.opacity = "0.5";
        scissorsBtn.style.opacity = "0.5";
        rockBtn.style.cursor = "not-allowed";
        paperBtn.style.cursor = "not-allowed";
        scissorsBtn.style.cursor = "not-allowed";
    }
}

// New function to reset the game (optional - you can call this from a reset button)
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameActive = true;
    
    // Clear displays
    resultsDiv.innerHTML = "";
    scoreDiv.textContent = "📊 Score - You: 0 | Computer: 0";
    winnerDiv.textContent = "";
    
    // Re-enable buttons
    disableButtons(false);
    
    // Add a reset message
    const resetMessage = document.createElement('p');
    resetMessage.textContent = "🔄 Game reset! Let's play again! 🔄";
    resetMessage.style.color = "blue";
    resetMessage.style.fontWeight = "bold";
    resultsDiv.insertBefore(resetMessage, resultsDiv.firstChild);
    
    console.log("Game has been reset!");
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => {
    if (!gameActive) return;
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

document.getElementById('paper').addEventListener('click', () => {
    if (!gameActive) return;
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

document.getElementById('scissors').addEventListener('click', () => {
    if (!gameActive) return;
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});

// Optional: Add a reset button to your HTML if you want
// Add this to your HTML: <button id="reset">Reset Game</button>
// Then uncomment the code below:
/*
document.getElementById('reset').addEventListener('click', () => {
    resetGame();
});
*/

console.log("Game ready! Click a button to play!");