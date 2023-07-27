import UI from './clases/UI.js';
import { rellenarinput, 
    comprobarInput, 
    resetInputs,
    resetFormulario 
} from './funciones/funciones.js';

(function(){

    const btnEnviar = document.querySelector('.js-entradaDetalle__fieldset-boton');
    const aliasInput = document.querySelector('.js-entradaDetalle__fieldset-alias');
    const comentarioinput = document.querySelector('.js-entradaDetalle__fieldset-textarea');
    const contenedorMensaje = document.querySelector('.js-entradaDetalle__contenedorMensaje');
    const formulario = document.querySelector('.js-entradaDetalle__form');
    
    
    let infoComentario = {
        alias: '',
        comentario: ''
    }
    
    const ui = new UI();

    const fechaEntrada = document.querySelector('.c-entradaDetalle__comentario-fecha');
    const date =  new Date(fechaEntrada.textContent).toDateString();
    fechaEntrada.textContent = date;
    
    const listadoFechasNoticiasRecientes = document.querySelectorAll('.c-entradaDetalle__noticiasRecientes-fecha');
    listadoFechasNoticiasRecientes.forEach(fecha => {
        const date =  new Date(fecha.textContent).toDateString();
        fecha.textContent = date;
    });

    const listadoFechasComentarios = document.querySelectorAll('.js-entradaDetalle__listadoComentarios-fecha');
    listadoFechasComentarios.forEach(fecha => {
        const date =  new Date(fecha.textContent).toUTCString();
        fecha.textContent = date;
    });

    // ACTIVAR CUANDO EN EL BACKEND PUEDA HACER VALIDACION CON USUARIOS

    // document.addEventListener('DOMContentLoaded', () => {
    //     ui.deshabilitar(btnEnviar);
    // });

    // aliasInput.addEventListener('blur', e => {
    //     rellenarinput(infoComentario, e);
    //     let habilitar = comprobarInput(infoComentario);
    //     if(habilitar) {
    //         ui.habilitar(btnEnviar);
    //     } else {
    //         ui. deshabilitar(btnEnviar);
    //     }
    // });
    // comentarioinput.addEventListener('blur', e => {
    //     rellenarinput(infoComentario, e);
    //     let habilitar = comprobarInput(infoComentario);
    //     if(habilitar) {
    //         ui.habilitar(btnEnviar);
    //     } else {
    //         ui. deshabilitar(btnEnviar);
    //     }
    // });

})()
