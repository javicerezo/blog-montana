(function(){

    const flechaIzq = document.querySelector('.js-categorias__boton-left');
    const flechaDer = document.querySelector('.js-categorias__boton-right');
    const ul = document.querySelector('.js-categorias__categorias-ul');

    flechaIzq.addEventListener('click', () => {
        console.log('izquierda')
        if(ul.classList.contains('c-categorias__categorias-ul--mod')){
            ul.classList.remove('c-categorias__categorias-ul--mod')
        } else {
            console.log('no hagas nada')
        }
    })
    flechaDer.addEventListener('click', () => {
        console.log('derecha')
        if(ul.classList.contains('c-categorias__categorias-ul--mod')){
            console.log('no hagas nada')
        } else {
            ul.classList.add('c-categorias__categorias-ul--mod')
        }
    })

})();