function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors:");
    return choice.toLowerCase();
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return `You choose: ${humanChoice}\nComputer choose: ${computerChoice}\nIt's a tie!`;
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return `You choose: ${humanChoice}\nComputer choose: ${computerChoice}\n${humanChoice} beats ${computerChoice}.\nYou win!`;
    } 
    else {
        computerScore++;
        return `You choose: ${humanChoice}\nComputer choose: ${computerChoice}\n${computerChoice} beats ${humanChoice}.\nYou lose!`;
    }
}
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log("Final Score");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } 
  else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } 
  else {
    console.log("The game ended in a tie!");
  }  
}
playGame();

