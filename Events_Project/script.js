"use strict";

// A API is required to fetch date from system in this format
var oldDate = new Date(`Dec 28, 2024 10:00:00`).getTime();

var x = setInterval(function () {
  var newDate = new Date().getTime();
  var diff = oldDate - newDate;

  var days = Math.floor(diff / (60 * 60 * 24 * 1000));
  document.querySelector(".day").innerHTML = days;
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.querySelector(".hour").innerHTML = hours;

  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.querySelector(".minute").innerHTML = minutes;

  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);
