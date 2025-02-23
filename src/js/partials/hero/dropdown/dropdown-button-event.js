export const clickDropdownButton = () => {
    const selectedButtonEl = document.querySelector(".hero__dropdown--selected");
    const dropdownEl = document.querySelector(".hero__dropdown");
    const dropdownContentEl = document.querySelector(".hero__dropdown--content");
    const dropdownBoxEl = document.querySelector(".hero__box");

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("hero__dropdown--button")) {
            selectedButtonEl.textContent = e.target.textContent;
            dropdownContentEl.classList.add("is-hidden"); 
            dropdownBoxEl.style.height = "auto";
        }
    });
}  