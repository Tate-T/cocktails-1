export const openIngModal = () => {
  const backdrop = document.querySelector(".ingredients-backdrop");

  document.addEventListener("click", e => {
    if (e.target.classList.contains("modal__text")) {
      backdrop.classList.remove("is-hidden");
      document.body.classList.add("no-scroll");
    }
  });
}