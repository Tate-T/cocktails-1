export const clickDropdown = () => {
    const dropdownEl = document.querySelector(".hero__dropdown");
    const dropdownContentEl = document.querySelector(".hero__dropdown--content");
    const dropdownBoxEl = document.querySelector(".hero__box");

    let clickCounter = 0;

    document.addEventListener("click", (e) => {
        if (e.target.closest(".hero__dropdown")) {
            clickCounter += 1;

            if (clickCounter === 1) {
                dropdownEl.classList.add("hero__dropdown--clicked");
                dropdownEl.classList.remove("hero__dropdown--active");
            } else if (clickCounter === 2) {
                dropdownEl.classList.add("hero__dropdown--active");
                dropdownContentEl.classList.remove("is-hidden-dropdown");  
                dropdownBoxEl.style.height = "605px"; 
            } else if (clickCounter === 3) {
                dropdownEl.classList.remove("hero__dropdown--clicked", "hero__dropdown--active");
                dropdownContentEl.classList.add("is-hidden-dropdown");
                dropdownBoxEl.style.height = "auto";
                clickCounter = 0;
            }
        } else {
            dropdownEl.classList.remove("hero__dropdown--clicked", "hero__dropdown--active");
            dropdownContentEl.classList.add("is-hidden-dropdown");
            dropdownBoxEl.style.height = "auto";
            clickCounter = 0;
        }
    });
}
