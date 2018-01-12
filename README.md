<h1>Choose your Weapon: Rock, Paper, Scissors</h1>
<br />
<img src="https://pxt.azureedge.net/blob/68f66c3ddc3acfc4c53157abf92eace202d46db2/static/courses/csintro/conditionals/rock-paper-scissors-items.png" alt="Rock, Paper, Scissors">


<br />

Developer: Ivan van der Merwe <br>
Date started: 9 January 2018
From The Odin Project's <a href="http://www.theodinproject.com">Curriculum</a>
Link to Choose You Weapon Game --> <a href=" https://ivanv257.github.io/Rock-Paper-Scissors-JavaScript-Project/">Play Now</a>

<h2>Compare choice Function demonstrating the Arrow <code>=></code> function</h2>


<pre>
<code>
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
</code>
</pre>
