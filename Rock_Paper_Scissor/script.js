// "use strict";

// Creating Initial Conditions

const score = [0, 0];
const myScore = document.querySelector(".score-1");
const cpuScore = document.querySelector(".score-2");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const leftTemplate = document.querySelector(".left");
const rightTemplate = document.querySelector(".right");
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const restart = document.querySelector(".restart");
const signs = document.querySelector(".signs-1");

// Audio Elements
const winSound = new Audio("win.mp3");
const loseSound = new Audio("lose.mp3");
const clickSound = new Audio("click.mp3");
const replaySound = new Audio("restart.mp3");
// Function of Cpu's Move
const cpuMove = function () {
  let cpu = document.querySelector(".cpu");
  let cpuChoice = Math.trunc(Math.random() * 3);
  cpu.src = `img-${cpuChoice}.jpg`;
  if (cpuChoice == 0) {
    cpu.dataset.selection = rock.dataset.selection;
  }
  if (cpuChoice == 1) {
    cpu.dataset.selection = paper.dataset.selection;
  }
  if (cpuChoice == 2) {
    cpu.dataset.selection = scissor.dataset.selection;
  }

  return cpu;
};

// Checking winning Condition;
function win(ele1, ele2) {
  // const a = Number(ele1.src[26]);
  const a = ele1.dataset.selection;
  const b = ele2.dataset.selection;

  if (a === "rock" && b === "paper") {
    score[1] += 1;
    cpuScore.textContent = score[1];
  } else if (a === "paper" && b === "scissor") {
    score[1] += 1;
    cpuScore.textContent = score[1];
  } else if (a === "scissor" && b === "rock") {
    score[1] += 1;
    cpuScore.textContent = score[1];
  } else if (a === "rock" && b === "scissor") {
    score[0] += 1;
    myScore.textContent = score[0];
  } else if (a === "paper" && b === "rock") {
    score[0] += 1;
    myScore.textContent = score[0];
  } else if (a === "scissor" && b === "paper") {
    score[0] += 1;
    myScore.textContent = score[0];
  } else {
    // console.log("Draw");
  }

  checkWin();
}

function rockFunction() {
  clickSound.play();
  var a = rock;
  var b = cpuMove();
  signs.classList.remove("none");
  win(a, b);
}

function paperFunction() {
  clickSound.play();
  var a = paper;
  var b = cpuMove();
  signs.classList.remove("none");
  win(a, b);
}

function scissorFunction() {
  clickSound.play();
  var a = scissor;
  var b = cpuMove();
  signs.classList.remove("none");
  win(a, b);
}

rock.addEventListener("click", rockFunction);

paper.addEventListener("click", paperFunction);

scissor.addEventListener("click", scissorFunction);

const checkWin = function () {
  if (score[0] === 10) {
    leftTemplate.classList.add("winner");
    rock.removeEventListener("click", rockFunction);
    paper.removeEventListener("click", paperFunction);
    scissor.removeEventListener("click", scissorFunction);
    player0El.textContent = "Winner";
    winSound.play();
  } else if (score[1] == 10) {
    rightTemplate.classList.add("winner");
    rock.removeEventListener("click", rockFunction);
    paper.removeEventListener("click", paperFunction);
    scissor.removeEventListener("click", scissorFunction);
    player1El.textContent = "Winner";
    loseSound.play();
  }
};

restart.addEventListener("click", function () {
  replaySound.play();
  score[0] = 0;
  score[1] = 0;
  myScore.textContent = 0;
  cpuScore.textContent = 0;
  player0El.textContent = "You";
  player1El.textContent = "Computer";
  leftTemplate.classList.remove("winner");
  rightTemplate.classList.remove("winner");
  rock.addEventListener("click", rockFunction);
  paper.addEventListener("click", paperFunction);
  scissor.addEventListener("click", scissorFunction);
  signs.classList.add("none");
});
