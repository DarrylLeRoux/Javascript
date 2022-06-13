"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////
// Smooth Scrolling
////////////////////////////////////////////////////////////////////////

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();

  // current position of s1coords to the position of current scroll (pageXOffset)
  // Old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // New way
  section1.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////////////////////////////////////////////////
// PAGE NAVIGATION
////////////////////////////////////////////////////////////////////////

// Event delegation
// 1. Add eventListener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault(); // stops from snapping to the elements
  console.log(e.target);
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    // Smooth scroll to section
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
////////////////////////////////////////////////////////////////////////
// SELECTING ELEMENTS
////////////////////////////////////////////////////////////////////////
console.log(document.documentElement); // Selects
console.log(document.head);

const header = document.querySelector(".header");

// If the variable is crated first storing a nodelist - sections, then even if it is deleted, it will still be printed
const allSections = document.querySelectorAll(".section");

document.getElementById("section--1");

// HTML collection (Live collection - if the DOM changes, this is updated)
const allButtons = document.getElementsByTagName("button");

document.getElementsByClassName("btn");

////////////////////////////////////////////////////////////////////////
// CREATED AND INSERTING ELEMENTS
////////////////////////////////////////////////////////////////////////

const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true)); // repeat

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
});

////////////////////////////////////////////////////////////////////////
// STYLES, ATTRIBUTES AND CLASSES
////////////////////////////////////////////////////////////////////////
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
console.log(getComputedStyle(message).color); // get the style of an element
console.log(getComputedStyle(message).width); // get the style of an element

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// CSS Variables
document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes

const logo = document.querySelector(".nav__logo");
console.log(logo.alt, logo.src);
// Set attributes
logo.setAttribute("company", "Jonas");
// Get attribute
console.log(logo.getAttribute("company")); // "Jonas"
console.log(logo.getAttribute("src")); // "img/logo.png"
const navLink = document.querySelector(".nav__link--btn");
console.log(navLink.href); // absolute (http://127.0.0.1:5501/advanced_dom/#)
console.log(navLink.getAttribute("href")); //relevant (#)

// Data Attributes
document.querySelector(".nav__logo").setAttribute("data-version-number", "3.0");
console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// Don't use - overrides the original
logo.className = "Jonas";

////////////////////////////////////////////////////////////////////////
// EVENTS AND EVENT HANDLERS
////////////////////////////////////////////////////////////////////////
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
  // remove eventListener
  h1.removeEventListener("mouseenter", alertH1);
}, 4000);

// Get random number
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Use random number for RGB Values
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target);

  // stop propogation
  e.stopPropagation(); // fixes problems in many handlers, not to use in general
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, "LINKS");
});
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, "HEADER");
});
*/
