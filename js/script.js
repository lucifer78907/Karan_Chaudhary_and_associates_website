const navigation = document.querySelector(".navigation");
const openNavigationBtn = document.querySelector(".header__label");
const body = document.querySelector("body");

openNavigationBtn.addEventListener("click", function () {
  navigation.classList.toggle("hidden");
});

// Smooth scrolling
const navigationBox = document.querySelector(".navigation__nav");
const checkBox = document.querySelector(".header__checkbox");

const scrollIntoSection = function () {
  // binded this to an actual value to use it as an arguement
  document.querySelector(this).scrollIntoView({ behavior: "smooth" });
};

navigationBox.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navigation__link")) {
    const id = e.target.getAttribute("href");
    // uncheck the checkbox
    checkBox.checked = false;
    // add hidden class
    navigation.classList.add("hidden");
    // scroll intoView
    setTimeout(scrollIntoSection.bind(id), 1000);
  }
});

// Spinner

const spinner = document.createElement("div");
const showSpinner = function () {
  const markup = `
<div class="loading__screen">
      <div class="loading__screen--main">
        <div class="loading__screen--icon"></div>
      </div>
    </div>
`;
  spinner.classList.add("loading__screen");
  spinner.innerHTML = markup;
  body.prepend(spinner);
};
const hideSpinner = function () {
  spinner.remove();
};

showSpinner();

// setTimeout(hideSpinner, 3000);
window.addEventListener("load", () => setTimeout(hideSpinner, 3000));
