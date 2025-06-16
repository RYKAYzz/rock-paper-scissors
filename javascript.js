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

//restart button
const restartButton = document.createElement("button");
restartButton.textContent = "Restart Game";
restartButton.style.display = "none"; // Hide it initially
document.body.appendChild(restartButton);

//Get computer choice
function getComputerchoice() {
  const option = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
}

//Adding an event when button is clicked
//return that specific as playerChoice

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    choice = button.textContent;
    playRound(choice);
  })
);
//assign initial score
let playerScore = 0;
let computerScore = 0;

//function to determine a winner
function determineWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  )
    return "player";
  return "computer";
}
//Element to store the results
const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);
// PlayRound  section
//playRound function to check playersSelection
function playRound(playersSelection) {
  let computerSelection = getComputerchoice();
  let winner = determineWinner(
    playersSelection.toLowerCase(),
    computerSelection.toLowerCase()
  );

  if (winner === "player") {
    playerScore++;
    resultsDiv.textContent = `You won the round ${playersSelection} beats ${computerSelection}`;
  } else if (winner === "computer") {
    computerScore++;
    resultsDiv.textContent = `Computer won the round ${computerSelection} beats ${playersSelection}`;
  } else {
    resultsDiv.textContent = `It's a draw you choose both ${playersSelection}`;
  }
  //Showing current score
  const score = `Player: ${playerScore} | computer: ${computerScore}`;
  const scoreP = document.createElement("p");
  scoreP.textContent = score;
  resultsDiv.appendChild(scoreP);
  //check if game is over
  if (playerScore === 5 || computerScore === 5) {
    const final = document.createElement("p");
    final.textContent =
      playerScore === 5
        ? "Congrats, you are a winner of this game"
        : "Computer won the game";
    resultsDiv.appendChild(final);
    buttons.forEach((button) => (button.disabled = true));

    restartButton.style.display = "block";
    restartButton.addEventListener("click", () => {
      playerScore = 0;
      computerScore = 0;
      resultsDiv.textContent = ""; // Clear results
      buttons.forEach((button) => (button.disabled = false)); // Re-enable buttons
      restartButton.style.display = "none"; // Hide the restart button again
    });
  }
}
