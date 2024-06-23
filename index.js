const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

const getHumanChoice = () => {
    let userPrompt = prompt("Please select rock, paper, or scissors").toLocaleLowerCase();
    while (userPrompt != "rock" && userPrompt != "paper" && userPrompt != "scissors") {
        alert("Please try agin");
        userPrompt = prompt("Please select rock, paper, or scissors").toLowerCase();
    } 
    return userPrompt;
}

let humanScore = 0; 
let computerScore = 0; 

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }
}  



const playGame = () => {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i ++) {
        const humanSelection = getHumanChoice(); 
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        console.log(result);
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.")
    } else {
        console.log("this game is a tie!")
    }
}

playGame();