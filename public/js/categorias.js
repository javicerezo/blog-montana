(function(){

    const flechaIzq = document.querySelector('.js-categorias__boton-left');
    const flechaDer = document.querySelector('.js-categorias__boton-right');
    const ul = document.querySelector('.js-categorias__categorias-ul');

    flechaIzq.addEventListener('click', () => {
        if(ul.classList.contains('c-categorias__categorias-ul--mod')){
            ul.classList.remove('c-categorias__categorias-ul--mod')
        }
    });
    flechaDer.addEventListener('click', () => {
        if(!ul.classList.contains('c-categorias__categorias-ul--mod')){
            ul.classList.add('c-categorias__categorias-ul--mod')
        }
    });

})();