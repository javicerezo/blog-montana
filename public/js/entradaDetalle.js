import UI from './clases/UI.js';

(function(){

    const btnEnviar = document.querySelector('.js-entradaDetalle__fieldset-boton');
    const aliasInput = document.querySelector('.js-entradaDetalle__fieldset-alias');
    const mensajeinput = document.querySelector('.js-entradaDetalle__fieldset-comentario');
    const contenedorMensaje = document.querySelector('.js-entradaDetalle__contenedorMensaje');
    
    const ui = new UI();

    const fecha = document.querySelector('.c-entradaDetalle__comentario-fecha');
    const listadoFechas = document.querySelectorAll('.c-entradaDetalle__noticiasRecientes-fecha');
    
    const date =  new Date(fecha.textContent).toDateString();
    fecha.textContent = date;
    
    listadoFechas.forEach(fecha => {
        const date =  new Date(fecha.textContent).toDateString();
        fecha.textContent = date;
    });

    document.addEventListener('DOMContentLoaded', () => {
        ui.deshabilitar(btnEnviar);
    });
    
    aliasInput.addEventListener('blur', e => {
        if (e.target.value != ''){
            ui.habilitar(btnEnviar);
        } else {
            ui.deshabilitar(btnEnviar);
            ui.imprimirAlerta(contenedorMensaje, 'error', 'alias no válido');
        }
    })

})()
