const headerBarsBtn = document.querySelector(".header__bars");
const nav = document.querySelector("nav");
const btnComment = document.querySelector(".fa-comment");
headerBarsBtn.addEventListener("click", function () {
  nav.style.display = "flex";
  headerBarsBtn.style.display = "none";
  btnComment.style.display = "flex";
});
