export const closeModal = () => {
  const closeBtnArr = document.querySelectorAll(".modal__close");
  const backdrop = document.querySelector(".backdrop");
  closeBtnArr.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      backdrop.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
    });
  });
};
