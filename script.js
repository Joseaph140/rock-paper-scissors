function getComputerChoice() {
   let result = Math.floor(Math.random() * (3 - 1 + 1) + 1)
   if (result == 1) {
    return "rock"
   } else if (result == 2) {
    return "paper"
   } else {
    return "scissors"
   }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return alert("Rock vs Scissors : Winner!")
  } else if (playerSelection === "rock" && computerSelection ==="paper") {
    return alert("Rock vs Paper : Nice try!")
  } else  if (playerSelection === "paper" && computerSelection === "rock") {
    return alert("Paper vs Rock ; Winner!")
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return alert("Paper vs Scissors : Nice try!")
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return alert("Scissors vs Paper : Winner!")
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return alert("Scissors vs Rock : Nice try!")
  } else if (playerSelection === computerSelection) {
    return alert("Draw!")
  } else {
    return alert("Error!")
  }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));