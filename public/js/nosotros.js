import UI from './clases/UI.js';

(function(){
    
    const btnEnviar = document.querySelector('.js-nosotros__form-input');
    const emailInput = document.querySelector('.c-nosotros__form-input[type="email"]');
    const contenedorMensaje = document.querySelector('.js-nosotros__mensaje');
    
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    const ui = new UI();
    
    document.addEventListener('DOMContentLoaded', () => {
        ui.deshabilitar(btnEnviar);
    });
    
    emailInput.addEventListener('blur', e => {
        // validamos email con Email Regex
        if (er.test(e.target.value)){
            ui.habilitar(btnEnviar);
        } else {
            ui.deshabilitar(btnEnviar);
            ui.imprimirAlerta(contenedorMensaje, 'error', 'Email no válido');
        }
    })

})();
