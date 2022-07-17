'use strict';
/*
console.log(displayMessage());
displayMessage() = 'Correct Number!';
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Please enter a number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    document.querySelector('.score').textContent = score;
    score--;
    if (score === 0) {
      displayMessage('Game Over');
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
