
const toTopBtn = document.querySelector('.footer__icon-btn')

const scrollToTop =
function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
toTopBtn.addEventListener('click', scrollToTop)