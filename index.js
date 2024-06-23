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

const humanScore = 0; 
const computerScore = 0; 

const playRound = (humanChoice, computerChoice) => {
    return humanChoice + computerChoice;
}

const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice();

const testResult = playRound(humanSelection, computerSelection);




console.log(testResult);