/* JavaScript Rock Paper Scissors Project
Developer: Ivan van der Merwe */


const playerChoiceRock = document.querySelector('#rock');
const playerChoicePaper = document.querySelector('#paper');
const playerChoiceScissors = document.querySelector('#scissors');

const paraUserResult = document.querySelector('#userResult');
const paraComputerResult = document.querySelector('#computerResult');



// Event listener added for button selection

    playerChoiceRock.addEventListener('click', function() {
      paraUserResult.textContent = 'User selects rock';
      return 'rock';
    })

    playerChoicePaper.addEventListener('click', function() {
      paraUserResult.textContent = 'User selects paper';
      return 'paper';
    })
   
    playerChoiceScissors.addEventListener('click', function() {
      paraUserResult.textContent = 'User selects scissors';
      return 'scissors';
    })
  





// Generate random Computer selection
let computerSelection = () => {
  let randomCount = Math.random();

  if (randomCount < 0.34) {
    paraComputerResult.textContent = 'Computer selects rock';
    return 'rock';
  } else if (randomCount > 0.34 && randomCount < 0.68) {
    paraComputerResult.textContent = 'Computer selects paper';
    return 'paper';
  } else {
    paraComputerResult.textContent = 'Computer selects paper';
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
playRound(playerSelection(), computerSelection());