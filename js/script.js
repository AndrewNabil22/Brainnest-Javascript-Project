<<<<<<< HEAD
let firstMsg = "Let's play Rock Paper Scissors.";
let startMsg = "Are you ready? Write 'yes' if you are.";
  
  alert(firstMsg);

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
  
      if (result !== "It's a tie") {
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
=======
// Declaring available choices for the game
const choices = ["rock", "paper", "scissors"];

// Function that randomly selects a choice for the computer
const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

// Function that plays one round of the game between the user and the computer
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  // Check if the player's choice is valid
  if (!choices.includes(playerSelection)) {
    alert(`Invalid choice: ${playerSelection}.`);
  }
  // Determine the winner of the round and return the result as a string
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

// Function that runs the game for 5 rounds
const game = () => {
  //These two variables must be incremented after each round
  let playerScore = 0;
  let computerScore = 0;
  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    let playerSelection = "";
    // Ask the user to enter a valid choice for each round
    while (!choices.includes(playerSelection)) {
      playerSelection = prompt(`Round ${i+1}: Enter your choice: ${choices.join(", ")}`).toLowerCase();
      try {
        // Play one round with the user's choice and a random choice for the computer
        playRound(playerSelection, computerPlay());
      } catch (e) {
        alert(e.message);
      }
    }
    // Play one round with the user's choice and a random choice for the computer
    const computerSelection = computerPlay();
      if (playerSelection) {
      try {
        // Get the result of the round and update the score
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

    if (result.startsWith("You win!")) {
          playerScore++;
        } else if (result.startsWith("You lose!")) {
          computerScore++;
        }
  } catch (e) {
        alert(e.message);
      }
>>>>>>> 2df7a3dd589aace8a1aad5692744db1a7f275b29
    }
  }

<<<<<<< HEAD
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
    result = "It's a tie";

if (playerPoints > computerPoints) {
  console.log("Congratulations, You Win!");
} else if (playerPoints < computerPoints) {
  console.log("Bad luck, Computer Wins!");
} else if (playerPoints === computerPoints) {
  console.log("Hard game, good luck");
} else {
  console.log("Something went wrong, start over.");
}


  // Determine the winner of the game based on the final score
  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore}-${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game! Final score: ${playerScore}-${computerScore}`);
>>>>>>> 2df7a3dd589aace8a1aad5692744db1a7f275b29
  } else {
    console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
  }
<<<<<<< HEAD

  return result;
}

function winner(){
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

winner();
=======
};

game()
>>>>>>> 2df7a3dd589aace8a1aad5692744db1a7f275b29
