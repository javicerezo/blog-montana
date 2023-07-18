import UI from './clases/UI.js';

const registroInput = document.querySelector('.js-registro__input-email');
const newPasswordInput = document.querySelector('.js-registro__input-password');
const btnRegistrarme = document.querySelector('.js-registro__input-boton');

const contMensaje = document.querySelector('.js-registro__mensaje');

const ui = new UI();
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

let email = false;
let pass = false;

ui.deshabilitar(btnRegistrarme);

registroInput.addEventListener('blur', e => {
    if(er.test(e.target.value)) {
        email = true;
    } else {
        ui.imprimirAlerta(contMensaje, 'error', 'el email no es válido');
        return
    }
    if(email && pass) {
        ui.habilitar(btnRegistrarme);
    }
})

newPasswordInput.addEventListener('blur', e => {
    if(e.target.value !='') {
        pass = true;
    } else {
        ui.imprimirAlerta(contMensaje, 'error', 'la contraseña no es válida');
        return
    }
    if(email && pass) {
        ui.habilitar(btnRegistrarme);
    }
});