//Dichiarazione delle costanti hamburgerMenu e hamburgerReveal

const hamburgerMenu = document.getElementsByClassName("hamburger-menu");

console.log(hamburgerMenu);


hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.add("active");
})

