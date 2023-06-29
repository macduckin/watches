let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 240;
  if (offset > 960) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 240;
  if (offset < 0) {
    offset = 960;
  }
  sliderLine.style.left = -offset + "px";
});
const mainMenu = document.querySelector(".burger");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
