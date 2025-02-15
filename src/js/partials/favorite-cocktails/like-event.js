document.addEventListener("click", e => {
  if (e.target.classList.contains("cocktails__remove-favorite")) {
    const target = e.target;

    target.children[1].children[0].href.baseVal =
      "../../assets/icons/symbol-defs.svg#icon-desktop-heart";
    target.children[0].textContent = "Add to";

    target.classList.toggle("cocktails__remove-favorite");

    setTimeout(() => {
      target.classList.toggle("cocktails__add-favorite");
    }, 750);
  }

  if (e.target.classList.contains("cocktails__add-favorite")) {
    const target = e.target;

    target.children[1].children[0].href.baseVal =
      "../../assets/icons/symbol-defs.svg#icon-desktop-full-heart";
    target.children[0].textContent = "Remove";

    target.classList.toggle("cocktails__remove-favorite");

    setTimeout(() => {
      target.classList.toggle("cocktails__add-favorite");
    }, 750);
  }
});
