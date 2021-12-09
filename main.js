//Dichiarazione delle costanti hamburgerMenu

const hamburgerMenu = document.querySelector(".hamburger-menu");

console.log(hamburgerMenu);

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.add("active");
});
