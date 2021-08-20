// navigation 
const nav_bar = document.querySelector('.navi');
window.addEventListener('scroll', () => {
    const scrol = window.scrollY;

    if (scrol >= 780) {
        nav_bar.classList.add('sticky');
    } else {
        nav_bar.classList.remove('sticky');
    }
})