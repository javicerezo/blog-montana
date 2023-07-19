
const btnBurger = document.querySelector('.js-header__burger');
const contenedorNav = document.querySelector('.js-header__nav');
const contenedorHeader = document.querySelector('.js-header');
const tablet = 768;

window.addEventListener("resize", () => {
    if (contenedorHeader.clientWidth >= tablet) {
        if (contenedorNav.classList.contains('c-header__nav-activo')) {
            contenedorNav.classList.remove('c-header__nav-activo');
            // btnBurger.children[0].children[0].classList.toggle('fa-bars');
            // btnBurger.children[0].children[0].classList.toggle('fa-xmark');
        }
    } 

    // terminar por aqui
});

btnBurger.addEventListener('click', () => {
    contenedorNav.classList.toggle('c-header__nav-activo--mod');
    btnBurger.children[0].children[0].classList.toggle('fa-xmark');
    btnBurger.children[0].children[0].classList.toggle('fa-bars');
})