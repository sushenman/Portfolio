const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('.navig');

function myFunction() {
    console.log(hello)

};
let goto = document.querySelector('.to');
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll >= 780) {
        goto.classList.add('sticky');

    } else {
        goto.classList.remove('sticky');

    }
});