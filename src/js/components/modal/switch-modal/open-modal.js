export const openModal = () => {
  const backdrop = document.querySelector(".backdrop");

  document.addEventListener("click", e => {
    if (e.target.classList.contains("cocktails__learn-more")) {
      backdrop.classList.remove("is-hidden");
      document.body.classList.add("no-scroll");
    }
  });
};
