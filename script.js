/* JavaScript Rock Paper Scissors Project
Developer: Ivan van der Merwe */

/* set prompt for userChoice and Math.random
for conditional statement for computer choice. */
let userChoice = prompt("Rock, Paper or Scissors?");

  if (! userChoice) {
      document.write("<p>Please enter a correct value</p>");
    } else {
      document.write(`You choose ${userChoice}`);
    }

// Computer choice
//To be Converted to switch statement
let computerChoice = Math.random();

  if (computerChoice < 0.34){
      computerChoice = "paper";
    } else if (computerChoice <= 0.67) {
      computerChoice = "scissors";
    } else {
      computerChoice = "rock";
    }

//Show computer choice
  document.write(`<p>The robot chooses ${computerChoice}</p>`);


// Choose the winner (Compare Choice)

let compare = (choice1, choice2) => {
  if (choice1 === choice2){
    return "Both selected the same result, play again.";
  }
}
