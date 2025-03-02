export const openModal = (e) => {
    const modal = document.querySelector(".header__modal");
    document.addEventListener("click", e => {

      if (e.target.classList.contains("header__modal-open")) {
    console.log("hi")

        modal.classList.remove("is-hidden");
        document.body.classList.add("no-scroll");
      }
    });
  };
  