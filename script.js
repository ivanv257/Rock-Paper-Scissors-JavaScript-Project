/* JavaScript Rock Paper Scissors Project
Developer: Ivan van der Merwe */


//randomly choose computerChoice
function computerChoice(){
  let randomCount = Math.random();
  
  if (randomCount < 0.34){
    return 'rock';
} else if (randomCount > 0.34 && randomCount < 0.68){
  return 'paper';
} else {
  return 'scissors';
}
}

const playerSelection = prompt('Please select rock, paper or scissors.')
const computerSelection = computerChoice();

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return 'It is a tie';
} else if (playerSelection == 'rock' && computerSelection == 'paper'){
    return 'Computer wins!';
} else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return 'You win!';
} else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return 'You win!';
}
}