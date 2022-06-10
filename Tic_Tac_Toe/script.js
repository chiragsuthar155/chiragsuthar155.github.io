// console.log("hello");
//  x or 0
// change x and 0
// check won

let player = "X";
let gameOver = false;
let counter = 0;
let click = new Audio("click.mp3");
let win = new Audio("win.mp3");
let draw = new Audio("draw.mp3");
let start = new Audio("start.mp3");

// start.play();
const changePlayer = () => {
  start.play();
  return player === "X" ? "O" : "X";
};

const checkWon = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winPos.forEach((ele) => {
    if (
      boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
      boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText &&
      boxTexts[ele[0]].innerText !== ""
    ) {
      document.getElementById("result").innerText =
        boxTexts[ele[0]].innerText + " won";
      win.play();
      gameOver = true;
      document.querySelector("img").style.width = "100px";
    }
  });
};

let boxes = document.getElementsByClassName("box");

// console.log(boxes);
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxText");

  box.addEventListener("click", () => {
    click.play();
    if (boxText.innerText === "" && !gameOver) {
      boxText.innerText = player;
      counter++;
      //   console.log(counter);
      player = changePlayer();
      checkWon();
      document.getElementsByClassName("player")[0].innerText = player;
      if (counter == 9 && !gameOver) {
        document.getElementById("result").innerText = "Game Draw!";
        draw.play();
      }
    }
  });
});

// reset button
let reset = document.getElementsByClassName("reset")[0];
// console.log(reset);
reset.addEventListener("click", () => {
  start.currentTime = 0;
  let boxTexts = document.querySelectorAll(".boxText");
  //   console.log(boxTexts);
  boxTexts.forEach((boxText) => {
    boxText.innerText = "";
  });
  player = "X";
  gameOver = false;
  counter = 0;
  document.querySelector("img").style.width = "0px";
  document.getElementById("result").innerText = "running";
});

// vanish the gif as soon as the game restarts
