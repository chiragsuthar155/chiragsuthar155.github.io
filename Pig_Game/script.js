"use strict";

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// Starting conditions
let totalScore, currentScore, activePlayer;

// Audio Elements
let diceSound = new Audio("dice.mp3");
let win = new Audio("win.mp3");
let hold = new Audio("hold.mp3");
let newGame = new Audio("newgame.mp3");

const init = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// console.log(sectionEl);

//Rolling Dice Functionality
rollBtn.addEventListener("click", function () {
  // 1) Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2) Display Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  diceSound.play();

  // 3) Check if 1 on dice
  if (dice !== 1) {
    // The dice will be stored into currentScore;
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switching Player
    switchPlayer();
  }
});

holdBtn.addEventListener("click", function () {
  // 1) Adding currentScore to Totalscore of active player
  hold.play();
  totalScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  // 2) If Totalscore is greater than 100 then activePlayer wins;
  if (totalScore[activePlayer] >= 100) {
    // ActivePlayer wins; Not Working
    win.play();
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");

    diceEl.classList.add("hidden");

    rollBtn.disabled = true;
    holdBtn.disabled = true;
  } else {
    // 3) else Switch player;
    switchPlayer();
  }
});

newBtn.addEventListener("click", function () {
  // 1) Set all scores to 0
  newGame.play();

  init();

  rollBtn.disabled = false;
  holdBtn.disabled = false;
});
