const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", remove);

openButton.addEventListener("click", add);

function remove() {
  nav.classList.remove("navigation-open");
}

function add() {
  nav.classList.add("navigation-open");
}
