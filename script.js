// JavaScript Rock Paper Scissors Project

/* set prompt for userChoice and Math.random
for conditional statement for computer choice. */
let userChoice = prompt("Rock, Paper or Scissors?");
let computerChoice = Math.random();

if (computerChoice < 0.34){
  computerChoice = "rock";
} else if (computerChoice <=0.67){
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
