export const openModal = () => {
    const openBtn = document.querySelector('.cocktails__learn-more');
    const backdrop = document.querySelector('.backdrop')
    openBtn.addEventListener('click', () => {
        backdrop.classList.remove('is-hidden')
    })
}