import UI from './clases/UI.js';

const btnOvidarPassword = document. querySelector('.js-login__input-olvido');
const btnIdentificarme = document.querySelector('.js-login__input-boton');

const contenedorMensaje = document.querySelector('.js-login__mensaje');
const contenedorOlvido = document.querySelector('.js-login__contenedorOlvidado');

const ui = new UI();

const palabra = 'constantinopla@palabra.es';
const palabraModificada = palabra.substring(0, palabra.indexOf('@'))
console.log(palabraModificada)

btnOvidarPassword.addEventListener('click', () => {
    contenedorOlvido.classList.add('c-login__contenedorOlvidado--mod');
});
contenedorOlvido.addEventListener('click', e => {
    if (e.target.classList.contains('fa-xmark')) {
        contenedorOlvido.classList.remove('c-login__contenedorOlvidado--mod');
    }
});

btnIdentificarme,addEventListener('submit', e => {
    e.preventDefault();
    let correoCorrecto = false;
    let passwordCorrecto = false;

    const formulario = document.querySelector('.js-login__form');
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    const emailInput = document.querySelector('.js-login__input-email').value;
    if(er.test(emailInput)) {
        // EL FORMATO DE CORREO ES CORRECTO, VALIDAMOS QUE ES UN CORREO REAL DE LA BASE DE DATOS
        console.log('email correcto')
        correoCorrecto = true;
        console.log(correoCorrecto)
    } else {
        ui.imprimirAlerta(contenedorMensaje, 'error', 'el email no es válido');
        setTimeout(() => {
            formulario.reset();
        }, 3000);
        return
    }
    
    const passwordInput = document.querySelector('.js-login__input-password').value; 
    if(passwordInput !='') {
        console.log('password no esta vacio')
        passwordCorrecto = true;
        console.log(passwordCorrecto)
        // COMPROBAR QUE COINCIDE CON EL PASSWORD
    } else {
        ui.imprimirAlerta(contenedorMensaje, 'error', 'la contraseña no es válida');
        setTimeout(() => {
            formulario.reset();
        }, 3000);
        return
    }

    if(correoCorrecto && passwordCorrecto) {
        console.log('VALIDAMOS EN EL BACKEND')
    }
})
