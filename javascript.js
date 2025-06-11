//Generate three random numbers from one to 3
//If number is one then output scissor
//If number is two then output paper
//If number is three then output rock
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) return "scissors";
  if (num === 2) return "paper";
  return "rock";
}
//Get humanChoice function
//prompt for rock,paper or scissors

function getHumanChoice() {
  return prompt("Choose: rock,paper or scissors").toLocaleLowerCase();
}
//initialize variable to hold each score
//Variable start value 0

let humanScore = 0;
let computerScore = 0;

//Create round function
//Hold two parameters for human and computer
function playRound(humanChoice, computerChoice) {
  console.log("User:", humanChoice);
  console.log("Bot:", computerChoice);
  if (humanChoice === computerChoice) return "Draw";

  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
