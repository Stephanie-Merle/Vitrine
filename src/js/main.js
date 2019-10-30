console.log("it works");
const hamburger = document.querySelector("#hamburger");
const drawer = document.querySelector("#myDrawer");
const mode = document.querySelector("#mode");
const body = document.querySelector("body");
const collec = document.querySelector("#collection");
const title = document.querySelector("h1");
const sticker = document.querySelector("#sticker");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  drawer.classList.toggle("menu");
});

mode.addEventListener("click", () => {
  console.log("clicked");
  body.classList.toggle("dark");
  title.classList.toggle("dark");
  sticker.classList.toggle("dark");
  nav.classList.toggle("darknav");
});
