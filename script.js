console.log("Rock Paper Scissors Game Loaded!");

// Helper functions
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

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie! No points awarded.");
        return { humanScore, computerScore }; // No change
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
    console.log("---");
    
    return { humanScore, computerScore };
}

function playGame() {
    console.log("🎮 Starting Rock Paper Scissors Game! 🎮");
    console.log("Best of 5 rounds. Let's begin!");
    console.log("---");
    
    let humanScore = 0;
    let computerScore = 0;
    
    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\n📍 ROUND ${round} of 5`);
        
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        const newScores = playRound(humanChoice, computerChoice, humanScore, computerScore);
        humanScore = newScores.humanScore;
        computerScore = newScores.computerScore;
    }
    
    // Announce game winner
    console.log("\n🏆 GAME OVER 🏆");
    console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game! Better luck next time! 💻");
    } else {
        console.log("🤝 It's a tie game! Well played! 🤝");
    }
}

// Start the game
playGame();