const barsBtn = document.querySelector(".bars-btn");
const mainMenu = document.querySelector(".main");
const nav = document.querySelector(".responsive");
const closeBtn = document.querySelector(".close-btn");
const line = document.querySelector(".line");
const headerIcons = document.querySelector(".header__icons");
const formElem = document.querySelector(".form-elem");
barsBtn.addEventListener("click", function () {
  nav.style.display = "flex";
  nav.style.justifyContent = "center";
  nav.style.flexDirection = "column";
  closeBtn.style.display = "block";
  barsBtn.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  nav.style.display = "none";
  barsBtn.style.display = "flex";
  closeBtn.style.display = "none";
  line.style.display = "none";
});
