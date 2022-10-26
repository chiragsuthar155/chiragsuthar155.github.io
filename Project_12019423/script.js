const modal = document.querySelector(".myModal");
const overlay = document.querySelector(".myOverlay");
const closeBtn = document.querySelector(".btn--close-modal");
const closeBtn1 = document.querySelector(".btn--close-modal-1");
const closeBtn2 = document.querySelector(".btn--close-modal-2");
const btnLogin = document.querySelector(".btn-login");
const btnSignUp = document.querySelector(".btn-signup");
const btnAbout = document.querySelector(".btn-about");
const modal1 = document.querySelector(".myModal-1");
const modal2 = document.querySelector(".myModal-2");
const spinner = document.querySelector(".spinner-border");
const spinnerSection = document.querySelector(".spinner_section");
const videos = document.querySelector(".videos");
const hidden1 = document.querySelector(".hidden1");

btnLogin.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

btnSignUp.addEventListener("click", function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn1.addEventListener("click", function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
});

btnAbout.addEventListener("click", function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn2.addEventListener("click", function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
});

setTimeout(() => {
  spinner.classList.add("hidden");
  videos.classList.remove("hidden1");
  videos.classList.remove("hidden");
  spinnerSection.classList.add("d-none");
}, 2000);
