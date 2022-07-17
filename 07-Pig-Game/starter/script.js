'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;

// Setting up the game
const init = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score[0] = 0;
  score[1] = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  score0El.textContent = '0';
  score1El.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
  btnRoll.disabled = false;
  btnHold.disabled = false;
};
init();

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll the dice
btnRoll.addEventListener('click', () => {
  // Generate a random number between 1 and 6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // Update the score
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch the current player
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  // Add the current score to the global score
  score[activePlayer] += currentScore;

  // Update the UI
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];

  if (score[activePlayer] >= 100) {
    playing = false;
    document.querySelector(`#name--${activePlayer}`).textContent = 'Winner!';
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    // switch the player
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
