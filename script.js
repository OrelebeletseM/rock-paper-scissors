console.log("Hello World!");

function getComputerChoice(){
    //generate random number between 0 and 1
    const randomNumber = Math.random();

    //return choice based on random number
    if(randomNumber < 0.33){
        return "rock";

    }else if (randomNumber < 0.66){
        return "paper";

    }else{
        return "scissors";
    }
}

console.log("Testing computer choices");
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());