export const closeModal = () => {
    const closeBtn = document.querySelector('.modal__close');
    const backdrop = document.querySelector('.backdrop')
    closeBtn.addEventListener('click', () => {
        backdrop.classList.add('is-hidden')
    })
}