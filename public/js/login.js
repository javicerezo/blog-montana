import UI from './clases/UI.js';

const emailInput = document.querySelector('.js-login__input-email');
const passwordInput = document.querySelector('.js-login__input-password');
const contenedorMensaje = document.querySelector('.js-login__mensaje');
console.log(contenedorMensaje)

const ui = new UI();
console.log(ui)

emailInput.addEventListener('blur', e => {
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    let correcto = false;

    if(er.test(e.target.value)) {
        console.log('es valido');
    } else {
        ui.imprimirAlerta(contenedorMensaje, 'error', 'el email no es valido');
    }

})

passwordInput.addEventListener('blur', e => {
    console.log(e.target.value)

})