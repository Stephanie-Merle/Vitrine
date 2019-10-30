console.log("it works");
const hamburger = document.querySelector("#hamburger");
const drawer = document.querySelector("#myDrawer");
hamburger.addEventListener("click", () => {
  drawer.classList.toggle("menu");
});
