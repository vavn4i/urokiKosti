let x = 2.5; //number
let name1 = "Vasya";
let name2 = "Sasha"; // string
let bool = false; //boolean
let greeting = null; //null
let currentUser; //undefined
// if() {

// }

// NaN
console.log("Пользователь зашел на сайт");
console.log("Привет  Vasya");

console.log("Пользователь зашел на сайт");
console.log("Привет  Sasha");

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".button-burger_list");
  const mobileButton = document.querySelector(".button-burger");

  mobileButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    } else {
      mobileMenu.classList.add("active");
    }
  });
});
