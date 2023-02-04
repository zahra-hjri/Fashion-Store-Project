const barsBtn = document.querySelector(".bars-btn");
const nav = document.querySelector(".responsive");
const closeBtn = document.querySelector(".close-btn");
const line = document.querySelector(".line");

function closeMenu() {
  nav.style.display = "none";
  barsBtn.style.display = "flex";
  closeBtn.style.display = "none";
  line.style.display = "none";
}

closeBtn.addEventListener("click", closeMenu);
export default closeMenu;
