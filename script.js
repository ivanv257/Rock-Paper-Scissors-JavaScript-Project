/* JavaScript Rock Paper Scissors Project
Developer: Ivan van der Merwe */

/* set prompt for userChoice and Math.random
for conditional statement for computer choice. */
let userChoice = prompt("Choose your Weapon: Rock, Paper or Scissors?");

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
  document.write(`<p>The Robot chooses ${computerChoice}</p>`);


// Choose the winner (Compare Choice)

let compare = (choice1, choice2) => {
  if (choice1 === choice2){
        return "Both selected the same result, play again.";
    } if (choice1 === "rock" && choice2 === "scissors"){
        return "You win!";
    } else {
        return "You lose, play again";
    }

  if (choice1 === "paper" && choice2 === "rock") {
        return "You win!";
    } else {
        return "You lose, play again";
    }

    if (choice1 === "scissors" && choice2 === "rock") {
          return "You lose, play again";
      } else {
          return "You win!";
      }
 };
// run the comparison function
let results = compare(userChoice,computerChoice);

// print the results to the screen.
document.write(`<br /> ${results}`);
