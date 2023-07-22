(function(){

    const btnBurger = document.querySelector('.js-header__burger');
    const contenedorNav = document.querySelector('.js-header__nav');
    
    
    btnBurger.addEventListener('click', () => {
        contenedorNav.classList.toggle('c-header__nav--mod');
        btnBurger.children[0].children[0].classList.toggle('fa-xmark');
        btnBurger.children[0].children[0].classList.toggle('fa-bars');
    });

})();
