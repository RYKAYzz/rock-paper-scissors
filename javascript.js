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
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win, rock beats scissors";
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats rock";
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win, scissors beats paper";
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats scissors";
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win, paper beats rock";
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats paper";
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//console.log(playRound(humanSelection, computerSelection));
//console.log(`Your score: ${humanScore} Bot score: ${computerScore}`);

//Create a 5 round gameplay
//use a function playGame
//Use for loop

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "scissors";
    if (num === 2) return "paper";
    return "rock";
  }

  function getHumanChoice() {
    return prompt("Choose: rock, paper or scissors").toLowerCase();
  }

  function playRound(humanChoice, computerChoice) {
    console.log("You:", humanChoice);
    console.log("Bot:", computerChoice);

    if (humanChoice === computerChoice) {
      console.log("That's a draw");
      return;
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win, rock beats scissors");
      humanScore++;
      return;
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats rock");
      computerScore++;
      return;
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win, scissors beats paper");
      humanScore++;
      return;
    }

    if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats scissors");
      computerScore++;
      return;
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win, paper beats rock");
      humanScore++;
      return;
    }

    if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats paper");
      computerScore++;
      return;
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`\nFinal Score — You: ${humanScore}, Bot: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🏆 You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("💻 Bot wins the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}
playGame();
