let num = 2;
let score = 0;
let choice;
let randNum;
const username = prompt("Enter user name: ");
console.log(`Welcome ${username}`);

const doGuess = () => {
  choice = parseInt(prompt(`Guess a   number from   1 to ${num}: `));

  randNum = Math.floor(Math.random()*num + 1);
  

  if ( choice=== randNum) {
  console.log("You passed ");
  console.log(`You guessed right - ${randNum}`);    
  console.log(`-----Your score is (${score += 1})-----`);
    
  num+=1
  doGuess() 
    
  } else {
  console.log("Oops! try again.")
  console.log(`The guessed num was ${randNum}.`); 
  }
}

doGuess();














