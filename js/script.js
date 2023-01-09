const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const wrapperForm = document.querySelector(".wrapperForm");

signUpBtn.addEventListener("click", function () {
  formBox.classList.add("active");
  wrapperForm.classList.add("active");
});

signInBtn.addEventListener("click", function () {
  formBox.classList.remove("active");
  wrapperForm.classList.remove("active");
});

const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
init();

window.addEventListener("resize", init);

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

let fullHeight = document.body.scrollHeight;
let innerHeight = window.innerHeight;
let progressBar = document.querySelector(".progressbar>.progressbar-line");

window.addEventListener("scroll", ProgressLine);
window.addEventListener("resize", ProgressLine);

function ProgressLine() {
  fullHeight = document.body.scrollHeight;
  innerHeight = window.innerHeight;
  progressBar.style.width =
    (pageYOffset * 100) / (fullHeight - innerHeight) + "%";
}

const headerBurger = document.querySelector(".header_burger");
const popup = document.querySelector(".popup");
const body = document.body;
const headerList = document.querySelector(".header_list").cloneNode(1);

headerBurger.addEventListener("click", burger);

function burger(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  headerBurger.classList.toggle("active");
  body.classList.toggle("noscroll");
  movePopup();
}

function movePopup() {
  popup.appendChild(headerList);
}

const links = Array.from(headerList.children);

links.forEach((el) => {
  el.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  headerBurger.classList.remove("active");
  body.classList.remove("noscroll");
}
