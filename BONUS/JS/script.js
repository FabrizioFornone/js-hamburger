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

// Dichiarazione Variabile clickCounter e delle costanti per la funzione

let clickCounter = 0;

const buttonBipolar = document.getElementById("bipolar-button");
const smileFace = document.querySelector(".fa-smile-wink");
const angryFace = document.querySelector(".fa-angry");
const containerJs = document.querySelector(".container");

// Se il contatore è pari il pulsante si arrabbia sennò è felice

buttonBipolar.addEventListener("click", function () {
  clickCounter++; 

  if (clickCounter % 2 !== 0) {
    buttonBipolar.innerHTML += `<br/> I hate you!`;
    angryFace.classList.add("show-face");
    smileFace.classList.remove("show-face");
    containerJs.classList.add("bg-red");
    containerJs.classList.remove("bg-yellow");
  } else {
    buttonBipolar.innerHTML += `<br/> I love you`;
    angryFace.classList.remove("show-face");
    smileFace.classList.add("show-face");
    containerJs.classList.add("bg-yellow");
    containerJs.classList.remove("bg-red");
  }
});
