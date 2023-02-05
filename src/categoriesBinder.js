const categories = ["Men", "Women", "Kids"];
const newArrivals = document.querySelector(".new-arrivals__menu");

function categoriesBinder() {
  let newCategory;
  categories.forEach(function (categorie) {
    newCategory = document.createElement("li");
    newCategory.innerHTML = categorie;
    newArrivals.append(newCategory);
  });
}

window.onload = categoriesBinder();

export default categoriesBinder;
