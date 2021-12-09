//Dichiarazione delle costanti hamburgerMenu e hamburger-menu

const hamburgerMenu = document.querySelector(".fa-bars");

const hamburgerReveal = document.querySelector(".hamburger-menu");

const hamburgerClose = document.querySelector(".close");

//Evento Hamburger Reveal al click

hamburgerMenu.addEventListener("click", function () {
  hamburgerReveal.classList.add("active");
});

//Evento Hamburger Disappear al click

hamburgerClose.addEventListener("click", function () {
  hamburgerReveal.classList.remove("active");
});
