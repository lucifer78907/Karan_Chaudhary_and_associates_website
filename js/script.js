const headerForground = document.querySelector(".header__foreground");
const headerBackground = document.querySelector(".header__background");
const headerLine = document.querySelector(".header__line");
const body = document.querySelector("body");

headerForground.addEventListener("click", function () {
  headerBackground.classList.toggle("scaled");
});
