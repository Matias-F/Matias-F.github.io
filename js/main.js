
const toTopBtn = document.querySelector('.footer__icon-btn')

const scrollToTop =
function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
toTopBtn.addEventListener('click', scrollToTop)


const projectHeader = document.querySelector('.project__summary-sticky')

const stickyHeaderOnScroll=
function() {
    if (window.scrollY >= 1000) {    
        projectHeader.classList.add('project__summary-sticky--show')
    } else {
        projectHeader.classList.remove('project__summary-sticky--show')   
    }
}
window.addEventListener('scroll', stickyHeaderOnScroll)