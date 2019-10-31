console.log("it works");
const hamburger = document.querySelector("#hamburger");
const drawer = document.querySelector("#myDrawer");
const mode = document.querySelector("#mode");
const body = document.querySelector("body");
const sticker = document.querySelector("#sticker");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  drawer.classList.toggle("menu");
});

mode.addEventListener("click", () => {
  body.classList.toggle("dark");
  title.classList.toggle("dark");
  sticker.classList.toggle("dark");
  nav.classList.toggle("darknav");
});
