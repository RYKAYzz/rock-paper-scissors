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
  if (humanChoice === computerChoice) return "That's a draw";

  if (humanChoice === "rock" && computerChoice === "scissors")
    return "You win, rock beats scissors";
  if (humanChoice === "rock" && computerChoice === "paper")
    return "You lose! Paper beats rock";

  if (humanChoice === "scissors" && computerChoice === "paper")
    return "You win, scissors beats paper";
  if (humanChoice === "scissors" && computerChoice === "rock")
    return "You lose! Rock beats scissors";

  if (humanChoice === "paper" && computerChoice === "rock")
    return "You win, paper beats rock";
  if (humanChoice === "paper" && computerChoice === "scissors")
    return "You lose! Scissors beats paper";
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
