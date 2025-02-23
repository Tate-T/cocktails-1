export const openFavoriteModal = () => {
    const openBtn = document.querySelector('.header__nav-span');
    const modal = document.querySelector('.header__nav-list')
    openBtn.addEventListener('click', () => {
        modal.classList.toggle('is-hidden');
    })
}