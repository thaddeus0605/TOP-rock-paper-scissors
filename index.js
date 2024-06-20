let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    const gameStrings = ['rock', 'paper', 'scissors'];
    return gameStrings[Math.floor(Math.random() * gameStrings.length)]
};

function getHumanChoice() {
    const humanChoice = prompt("Please choose rock paper or scissors");
    return humanChoice.toLowerCase();
};

function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        return `You won! ${humanChoice} beats ${computerChoice}`;
    } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")){
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        return `Tied! both chose ${humanChoice}`;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame()  {
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore++;
            return `You won! ${humanChoice} beats ${computerChoice}. The score is Human: ${humanScore} Computer: ${computerScore}`;
        } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")){
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}. The score is Human: ${humanScore} Computer: ${computerScore}`;
        } else {
            return `Tied! both chose ${humanChoice}. The score is Human: ${humanScore} Computer: ${computerScore}`;
        }
    }
    

    for (let i = 0; i <= 4; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }
    
}

console.log(playGame());