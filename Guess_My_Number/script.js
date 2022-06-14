"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🥇 Correct Answer";

// document.querySelector(".number").textContent = "?";

// document.querySelector(".score").textContent = "12";

// document.querySelector(".guess").value = 11;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let win = new Audio("win.mp3");
let lose = new Audio("lose.mp3");
let check = new Audio("check.mp3");
let again = new Audio("again.mp3");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  check.play();
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = " ❌ No Number!";

    displayMessage("❌ No Number!");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🥇  Correct Number!";
    win.play();
    displayMessage("🥇  Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "👆 Too High!" : "👇 Too Low!";

      displayMessage(guess > secretNumber ? "👆 Too High!" : "👇 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😭 You Loose!";
      lose.play();
      displayMessage("😭 You Loose!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e13434";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
    }
  }

  // // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "👆 Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭 You Loose!";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#e13434";
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "👇 Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭 You Loose!";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#e13434";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  again.play();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  // document.querySelector(".message").textContent = "Start guessing...";

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
