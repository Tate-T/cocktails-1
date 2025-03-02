export const closeIngModal = () => {
    const closeBtnArr = document.querySelectorAll(".modal__close");
    const backdrop = document.querySelector(".ingredients-backdrop");
    closeBtnArr.forEach(closeBtn => {
      closeBtn.addEventListener("click", () => {
        backdrop.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
      });
    });
    
    const closeItemArr = document.querySelectorAll('.modal__item');
    closeItemArr.forEach(item => {
      item.addEventListener("click", () => {
        backdrop.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
      });
    });
}