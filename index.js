let humanChoice = "";


const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// const getHumanChoice = () => {
//     let userPrompt = prompt("Please select rock, paper, or scissors").toLocaleLowerCase();
//     while (userPrompt != "rock" && userPrompt != "paper" && userPrompt != "scissors") {
//         alert("Please try agin");
//         userPrompt = prompt("Please select rock, paper, or scissors").toLowerCase();
//     } 
//     return userPrompt;
// }

let humanScore = 0; 
let computerScore = 0; 
let rounds = 0;
const scissorsButton = document.querySelector(".scissors");
const scissorsButtonText = scissorsButton.innerHTML;
const paperButton = document.querySelector(".paper");
const paperButtonText = paperButton.innerHTML;
const rockButton = document.querySelector(".rock");
const rockButtonText = rockButton.innerHTML;
const finalGame = document.querySelector(".final");




const playRound = (humanChoice, computerChoice) => {
    const humanScoreText = document.querySelector('#human');
    const computerScoreText = document.querySelector('#computer');
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        humanScoreText.innerHTML = humanScore;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreText.innerHTML = computerScore;
        return `You lose. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }
}  

const playGame = (humanSelection) => {
   
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        
        console.log(result);
        const gameMessageText = document.querySelector('.message');
        gameMessageText.innerHTML = `${result}. Score: Human: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore == 5 || computerScore == 5) {
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorsButton.disabled = true;
            if (humanScore > computerScore) {
                finalGame.innerHTML = "Congratulations! You won the game!"
            } else if (humanScore < computerScore) {
                finalGame.innerHTML = "Sorry, you lost the game."
            } else {
                finalGame.innerHTML = "this game is a tie!"
            }
        }
}


rockButton.addEventListener("click", () => {
    humanChoice = rockButtonText.toLocaleLowerCase();
    playGame(humanChoice);
});


paperButton.addEventListener("click", () => {
    humanChoice = paperButtonText.toLocaleLowerCase();
    playGame(humanChoice);
});



scissorsButton.addEventListener("click", () => {
    humanChoice = scissorsButtonText.toLocaleLowerCase();
    playGame(humanChoice);
})

