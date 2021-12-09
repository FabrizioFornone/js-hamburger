//Dichiarazione delle costanti hamburgerMenu e hamburger-menu

const hamburgerMenu = document.querySelector(".fa-bars");

const hamburgerReveal = document.querySelector('.hamburger-menu');

const hamburgerClose = document.querySelector('.close');


hamburgerMenu.addEventListener("click", function () {
  hamburgerReveal.classList.add("active");
});

hamburgerClose.addEventListener("click", function () {
    hamburgerReveal.classList.remove("active");
  });
