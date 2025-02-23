import _ from "lodash";

const testOnUnique = () => {
  const favoriteDrinksLocalStorage = JSON.parse(
    localStorage.getItem("favorite-cocktails"),
  );

  document.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      localStorage.setItem(
        "favorite-cocktails",
        JSON.stringify(_.uniq(favoriteDrinksLocalStorage)),
      );
    }
  });
};

testOnUnique();
