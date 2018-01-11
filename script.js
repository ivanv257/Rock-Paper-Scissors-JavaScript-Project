// JavaScript Rock Paper Scissors Project

/* set prompt for userChoice and Math.random
for conditional statement for computer choice. */
let userChoice = prompt("Rock, Paper or Scissors?");

if (! userChoice) {
  document.write("<p>Please enter a correct value</p>");
} else {
  document.write(userChoice);
}

// Computer choice
let computerChoice = Math.random();

if (computerChoice < 0.34){
  computerChoice = "paper";
} else if (computerChoice <= 0.67) {
  computerChoice = "scissors";
} else {
  computerChoice = "scissors";
}

//To be Converted to switch statement
