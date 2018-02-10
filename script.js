/* JavaScript Rock Paper Scissors Project
Developer: Ivan van der Merwe */

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
