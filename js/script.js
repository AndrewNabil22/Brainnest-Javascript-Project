let welcomeMsg = "Let's play Rock Paper Scissors. \nIt's a 5 rounds game, \nYou gonna like it.";
let startMsg = "Are you ready? Write 'yes' if you are.";
  
  alert(welcomeMsg);

let answer = prompt(startMsg);

let playerPoints = 0;
let computerPoints = 0;

  console.log("Great, let's start!");
  
let round = 1;
let validRounds = 1;

  while (validRounds < 6) {
    if (answer.toLowerCase() === "yes") {
      console.log("\nRound " + validRounds + ":");
      const playerRes = playerSelection();
  
      console.log(playerRes);
      const computerRes = computerSelection();
  
      console.log(computerRes);
      const result = game(playerRes, computerRes);
  
      console.log(result);
      console.log("Your score is: " + playerPoints + "\nComputer score is: " + computerPoints);
  
      if (result !== "It's a tie, round did not count.") {
        validRounds++;
      }
  
    } else if (answer.toLowerCase() === "exit") {
      break;
  
    } else {
      let tryAgain = prompt("Please type 'yes'.");
      answer = tryAgain;
    }
  
    if (validRounds === 6) {
      break;
    }
  }

  function playerSelection() {
    let playerChoice = prompt("Round " + validRounds + ": " + "Type 'rock $ paper $ scissors, shoot!'");
  
    for (let i = 1; true; i++) {
      if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
        return playerChoice;
  
      } else {
        let anotherChoice = prompt("Round " + validRounds + ": " + "Please try type 'rock' or 'paper' or 'scissors'.");
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

function game(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    result = "One point for the player!!";
    playerPoints++;
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
    result = "One point for the player!!";
    playerPoints++;
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
    result = "One point for the player!!";
    playerPoints++;
  } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
    result = "One point for the computer!!";
    computerPoints++;
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
    result = "One point for the computer!!";
    computerPoints++;
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
    result = "One point for the computer!!";
    computerPoints++;
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    result = "It's a tie, round did not count.";
  } else {
    result = "Invalid input. Please choose 'rock', 'paper', or 'scissors'.";
  }

  return result;
}

function playAround() {
  if (playerPoints > computerPoints) {
    console.log("Congratulations, You Win!");

  } else if (playerPoints < computerPoints) {
    console.log("Bad luck, Computer Wins!");

  } else if (playerPoints === computerPoints) {
    console.log("Hard game, It's a tie.");

  } else {
    console.log("Something went wrong, start over.");
  }
}

playAround();