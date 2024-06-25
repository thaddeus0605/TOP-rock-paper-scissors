let humanChoice = "";
let humanScore = 0; 
let computerScore = 0; 

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const updateScoreDisplay = () => {
    document.querySelector('#human').innerHTML = humanScore;
    document.querySelector('#computer').innerHTML = computerScore;
};

const endGame = () => {
    document.querySelectorAll(".choice-button").forEach(button => button.disabled = true);
    const finalMessage = humanScore > computerScore ? "Congratulations! You won the game!"
                        : humanScore < computerScore ? "Sorry, you lost the game."
                        : "This game is a tie!";
    document.querySelector(".final").innerHTML = finalMessage;
};

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
};

const playGame = (humanSelection) => {
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
    
    document.querySelector('.message').innerHTML = `${result}. Score: Human: ${humanScore}, Computer: ${computerScore}`;
    updateScoreDisplay();

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
};

document.querySelectorAll(".choice-button").forEach(button => {
    button.addEventListener("click", () => {
        humanChoice = button.innerHTML.toLocaleLowerCase();
        playGame(humanChoice);
    });
});