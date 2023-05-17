"use strict";

// DOM SELECTIONS
const leftSection = document.querySelector(".left_section");
const navBar = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation-link");
const pages = document.querySelectorAll(".page");
const hamburger = document.querySelector(".hamburger");
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("modal-button1");
const closeModalButton = document.getElementById("closeBtn1");

// FUNCTION DECLARATIONS
const init = () => {
  navigationLinks[0].classList.add("navigation-link-active");
  pages[0].classList.add("active-page");
};

// EVENT LISTENERS
navBar.addEventListener("click", (e) => {
  const { target } = e;

  if (!target.classList.contains("navigation-link")) return;

  if (window.innerWidth <= 865) {
    leftSection.classList.remove("menu-active");
    hamburger.classList.remove("hamburger-active");
  }
  navigationLinks.forEach((l) => {
    l.dataset.page === target.dataset.page
      ? l.classList.add("navigation-link-active")
      : l.classList.remove("navigation-link-active");
  });
  pages.forEach((p) =>
    p.dataset.page === target.dataset.page
      ? p.classList.add("active-page")
      : p.classList.remove("active-page")
  );
});

hamburger.addEventListener("click", (e) => {
  leftSection.classList.toggle("menu-active");
  hamburger.classList.toggle("hamburger-active");
});

// Calling init func
init();

// Alex's part
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

closeModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) modal.style.display = "none";
});
