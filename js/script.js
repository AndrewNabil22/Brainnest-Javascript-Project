let welcomeMsg = "Let's play Rock Paper Scissors. \nIt's a 5 rounds game, \nYou gonna like it.";
let startMsg = "Are you ready? Write 'yes' if you are.";
  
  alert(welcomeMsg);

let playerPoints = 0;
let computerPoints = 0;

  console.log("Great, let's start!");

let answer = prompt(startMsg);
let round = 1;
let validRounds = 1;

function game() {
  while (validRounds < 6) {

    if (answer === null) {
      console.log("Game over. You have cancelled the game.");
      return;
    }

    answer = answer.trim();
    answer = answer.toLowerCase();

    if (answer === "yes") {
      console.log("\nRound " + validRounds + ":");

      const playerRes = playerSelection();
      if (playerRes === null) {
        console.log("Game over. You have cancelled the game.");
        return;
      }
      console.log(playerRes);

      const computerRes = computerSelection();
      console.log(computerRes);

      const result = playAround(playerRes, computerRes);
      console.log(result);

      console.log("Your score is: " + playerPoints + "\nComputer score is: " + computerPoints);

      validRounds++;
  
    } else if (answer === "exit") {
      break;
  
    } else {
      let tryAgain = prompt("Please type 'yes'.");

      if (tryAgain === null) { 
        console.log("Game over. You have cancelled the game.");
        return;
      }

      answer = tryAgain;
    }
  
    if (validRounds === 6) {
      break;
    }
  }
  winner();
}

function playerSelection() {
  let playerChoice = prompt("Round " + validRounds + ": " + "Type 'rock $ paper $ scissors, shoot!'");

  if (playerChoice === null) {
    return null;
  }

  playerChoice = playerChoice.trim();
  playerChoice = playerChoice.toLowerCase();

  for (let i = 1; true; i++) {

    if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
      return playerChoice;
  
    } else {
      let anotherChoice = prompt("Round " + validRounds + ": " + "Please try type 'rock' or 'paper' or 'scissors'.");

      if (anotherChoice === null) {
        return null;
      }

      anotherChoice = anotherChoice.trim().toLowerCase();
      playerChoice = anotherChoice;
     }
  }
}

function computerSelection() {
  let randomNum = Math.floor(3 * Math.random());
  switch (randomNum) {
    case 0:
      return "Rock";
    case 1:
      return "Scissors";
    case 2:
      return "Paper";
    default:
      return "Try again";
  }
}

function playAround(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  let result = "";

  if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "One point for the player!!";
    playerPoints++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "One point for the player!!";
    playerPoints++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "One point for the player!!";
    playerPoints++;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "One point for the computer!!";
    computerPoints++;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    result = "One point for the computer!!";
    computerPoints++;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "One point for the computer!!";
    computerPoints++;
  } else if (playerChoice === computerChoice) {
    result = "It's a tie!!"
  }

  return result;
}

function winner() {
  if (playerPoints > computerPoints) {
    console.log("Congratulations, You Win!");

  } else if (playerPoints < computerPoints) {
    console.log("Bad luck, Computer Wins!");

  } else if (playerPoints === computerPoints) {
    console.log("Hard game, It's a tie.");

  } else if (playerPoints === computerPoints) {
    console.log("You can come back any time.");

  } else {
    console.log("Something went wrong, start over.");
    
  }
}

game();