/* JavaScript Rock Paper Scissors Project
Developer: Ivan van der Merwe */


//randomly choose computerChoice

const playerSelection = prompt('Choose rock, paper, or scissors.');

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It is a tie';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Computer wins!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win!';
  }
}

playRound(playerSelection, computerSelection());