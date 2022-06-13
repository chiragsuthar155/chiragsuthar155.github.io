var currentTime = document.getElementById("tt-timer").innerHTML;
var minute = parseInt(currentTime.split(":")[0]);
var seconds = parseInt(currentTime.split(":")[1]);
var timeout;
var sw = false;
// let increaseTime = (time) => time + 1;
let increaseTime = function (time) {
  time = time + 1;
  return time;
};

let tick = new Audio("tick1.mp3");

var increaseTimer = () => {
  tick.play();
  document.getElementById("timer-start").disabled = true;

  currentTime = minute * 60 + seconds;
  currentTime = increaseTime(currentTime);
  minute = Math.floor(currentTime / 60);
  seconds = currentTime % 60;
  currentTime = minute
    .toString()
    .padStart(2, "0")
    .concat(":")
    .concat(seconds.toString().padStart(2, "0"));
  document.getElementById("tt-timer").innerHTML = currentTime;
  timeout = setTimeout(increaseTimer, 1000);
};

var stopTimer = () => {
  tick.pause();
  clearTimeout(timeout);
  document.getElementById("timer-start").disabled = false;
};

var resetTimer = () => {
  document.getElementById("timer-start").disabled = false;
  tick.load();
  clearTimeout(timeout);
  minute = 0;
  seconds = 0;
  currentTime = minute * 60 + seconds;
  minute = Math.floor(currentTime / 60);
  seconds = currentTime % 60;
  currentTime = minute
    .toString()
    .padStart(2, "0")
    .concat(":")
    .concat(seconds.toString().padStart(2, "0"));
  document.getElementById("tt-timer").innerHTML = currentTime;
};

document.getElementById("timer-start").addEventListener("click", increaseTimer);
document.getElementById("timer-stop").addEventListener("click", stopTimer);
document.getElementById("timer-reset").addEventListener("click", resetTimer);
