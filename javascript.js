// Three button elements each for rock,paper and button
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

document.body.style.background = "grey";
// append them into the page
document.body.append(rockButton, paperButton, scissorsButton);
//Show what player will be selecting
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
//we need to have selection for all in order to add an Event listener first at once
//create an array to hold the buttons
const buttons = [rockButton, paperButton, scissorsButton];

//Get computer choice
function getComputerchoice() {
  const option = ["Rock", "Paper", "Scissors"];
  return option.toLocaleLowerCase[Math.floor(Math.random() * option.length)];
}

//Adding an event when button is clicked
//return that specific as playerChoice

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    choice = button.textContent.toLocaleLowerCase();
    playRound(choice);
  })
);
//assign initial score
let playerScore = 0;
let computerScore = 0;
//playRound function to check playersSelection
function playRound(playersSelection) {
  let playerChoice = playersSelection;
  let computerSelection = getComputerchoice();

  if (playerChoice == computerSelection) return "Draw";
  if (
    (playerChoice == "rock" && computerSelection == "paper") ||
    (playerChoice == "rock" && computerSelection == "Scissors") ||
    (playerChoice == "scissors" && computerSelection == "paper")
  )
    return "You won";
  else return "You lost";
}
