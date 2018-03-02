<h1>Choose your Weapon: Rock, Paper, Scissors</h1>
<br />
Developer: Ivan van der Merwe <br>
Date started: 9 January 2018
From The Odin Project's <a href="http://www.theodinproject.com">Curriculum</a> <br />

<h2>Syntax</h2>
<h3>Generate Random Computer Choice</h3>

```javascript
let computerSelection = () => {
  let randomCount = Math.random();

  if (randomCount < 0.34) {
    paraComputerResult.textContent = 'Computer selects rock';
    return 'rock';
  } else if (randomCount > 0.34 && randomCount < 0.68) {
    paraComputerResult.textContent = 'Computer selects paper';
    return 'paper';
  } else {
    paraComputerResult.textContent = 'Computer selects scissors';
    return 'scissors';
  }
}
```


<h3>Compare User and Computer choice</h3>


<h2>Demo</h2>
Link to Choose You Weapon Game --> <a href="https://ivanv257.github.io/Rock-Paper-Scissors-JavaScript-Project/">Play Now</a>





