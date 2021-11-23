// Game Values
let min = 1,
max = 10,
winningNum = getRandomNum(min, max),
guessesLeft = 3;

// Ui Elements
const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value)
  
  if (guess === winningNum) {
    // game over won
    gameOver(true, `${winningNum} is correct.YOU WIN!`)

  // validating input
  } else if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //check if won
  

   else {
    // wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // game over lost
      gameOver(false, `Game Over. You lost. the correct number was ${winningNum}`);
    } else {
      // game continues - answer wrong

      // change border color
      guessInput.style.borderColor = 'red';

      //clear input
      guessInput.value = '';

      // how many guesses left
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
    } 
  }
});

// game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // set message
  setMessage(msg)

  //play again
  guessBtn.value = 'play Again';
  guessBtn.className += 'play-again'
}

// get winning num
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}



// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}