import _ from "lodash";

document.addEventListener("click", e => {
  if (e.target.classList.contains("cocktails__add-favorite--styles")) {
    const item = e.target.closest("li");

    item.style.display = "none";

    const favoriteDrinksLocalStorage = JSON.parse(
      localStorage.getItem("favorite-cocktails"),
    );

    console.log(favoriteDrinksLocalStorage);

    if (favoriteDrinksLocalStorage !== null) {
      if (favoriteDrinksLocalStorage.length !== 0) {
        favoriteDrinksLocalStorage.forEach(el => {
          if (el.idDrink === item.id) {
            _.remove(favoriteDrinksLocalStorage, el);

            setTimeout(() => {
              localStorage.setItem(
                "favorite-cocktails",
                JSON.stringify(_.uniq(favoriteDrinksLocalStorage)),
              );
            }, 750);
          }
        });
      }
    }
  }
});
