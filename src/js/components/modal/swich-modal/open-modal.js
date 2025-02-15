export const openModal = () => {
  const openBtnArr = document.querySelectorAll(".cocktails__learn-more");
  const backdrop = document.querySelector(".backdrop");
  openBtnArr.forEach(openBtn => {
    openBtn.addEventListener("click", () => {
      backdrop.classList.remove("is-hidden");
      document.body.classList.add("no-scroll")
    });
  });
};
