/* JavaScript Rock Paper Scissors Project
Developer: Ivan van der Merwe */


const playerChoiceRock = document.querySelector('#rock');
const playerChoicePaper = document.querySelector('#paper');
const playerChoiceScissors = document.querySelector('#scissors');

const playerSelection = () => {
  if (playerChoiceRock) {
    playerChoiceRock.addEventListener('click', function() {
      return 'rock';
    })
  } else if (playerChoicePaper) {
    playerChoicePaper.addEventListener('click', function() {
      return 'paper';
    })
  } else if (playerChoiceScissors) {
    playerChoiceScissors.addEventListener('click', function() {
      return 'scissors';
    })
  }
}





// Generate random Computer selection
let computerSelection = () => {
  let randomCount = Math.random();

  if (randomCount < 0.34) {
    return 'rock';
  } else if (randomCount > 0.34 && randomCount < 0.68) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


// Compare the player choice versus the computer choice and return the result
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It is a tie';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Computer wins!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Computer wins!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win!';
  }
}

// Initilise the game. 
playRound(playerSelection, computerSelection());