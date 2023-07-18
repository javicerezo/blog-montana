import UI from './clases/UI.js';

const btnOvidarPassword = document. querySelector('.js-login__input-olvido');
const btnRecuperar = document.querySelector('.js-login__olvidado-boton');
const contenedorOlvido = document.querySelector('.js-login__contenedorOlvidado');
const loginOlvidadoInput = document.querySelector('.js-login__olvidado-email');
const contenedorMensajeOlvidado = document.querySelector('.js-login__mensaje-olvidado');



const loginInput = document.querySelector('.js-login__input-email');
const PasswordInput = document.querySelector('.js-login__input-password');
const btnIdentificarme = document.querySelector('.js-login__input-boton');
const contenedorMensaje = document.querySelector('.js-login__mensaje');


const ui = new UI();
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
let correoCorrecto = false;
let passwordCorrecto = false;
let correoOlvidoCorrecto = false;

ui.deshabilitar(btnIdentificarme);

btnOvidarPassword.addEventListener('click', () => {
    contenedorOlvido.classList.add('c-login__contenedorOlvidado--mod');
    ui.deshabilitar(btnRecuperar);
});
contenedorOlvido.addEventListener('click', e => {
    if (e.target.classList.contains('fa-xmark')) {
        contenedorOlvido.classList.remove('c-login__contenedorOlvidado--mod');
    }
});



loginInput.addEventListener('blur', e => {
    if(er.test(e.target.value)) {
        correoCorrecto = true;
    } else {
        ui.imprimirAlerta(contenedorMensaje, 'error', 'el email no es válido');
        return
    }
    if(correoCorrecto && passwordCorrecto) {
        ui.habilitar(btnIdentificarme);
    }
})

PasswordInput.addEventListener('blur', e => {
    if(e.target.value !='') {
        passwordCorrecto = true;
    } else {
        ui.imprimirAlerta(contenedorMensaje, 'error', 'la contraseña no es válida');
        return
    }
    if(correoCorrecto && passwordCorrecto) {
        ui.habilitar(btnIdentificarme);
    }
});


loginOlvidadoInput.addEventListener('blur', e => {
    if(er.test(e.target.value)) {
        correoOlvidoCorrecto = true;
    } else {
        ui.imprimirAlerta(contenedorMensajeOlvidado, 'error', 'el email no es válido');
        return
    }
    if(correoOlvidoCorrecto) {
        ui.habilitar(btnRecuperar);
    }
})