export const closeModal = () => {
    const closeBtnArr = document.querySelectorAll(".header__modal-close");
    const modal = document.querySelector(".header__modal");
    closeBtnArr.forEach(closeBtn => {
        
      closeBtn.addEventListener("click", () => {
        modal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
      });
    });
    // document.addEventListener("click", e => {
    //     if (e.target.classList.contains("header__modal-close")) {
    //         console.log('fdh')
    //       modal.classList.remove("is-hidden");
    //       document.body.classList.add("no-scroll");
    //     }
    //   });
  };
  