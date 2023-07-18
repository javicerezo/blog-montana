
class UI {
    limpiarHTML (contenedor) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }
    imprimirAlerta (contenedorMensaje, tipo, mensaje) {
        if(contenedorMensaje.childElementCount === 0) {
            const p = document.createElement('p');
            p.classList.add('u-mensaje');
            p.textContent = mensaje;
            if (tipo === 'exito') {
                p.classList.add(`u-mensaje--${tipo}`);
            }
            if (tipo === 'error') {
                p.classList.add(`u-mensaje--${tipo}`);
            }
            if (tipo === 'alerta') {
                p.classList.add(`u-mensaje--${tipo}`);
            }
            contenedorMensaje.appendChild(p);
            setTimeout((e) => {
                this.limpiarHTML(contenedorMensaje);
            }, 3000);
        }
    }
    habilitar (contenedor) {
        // Habilitamos el uso de un botón
        contenedor.classList.remove('u-cursor--not-allowed','u-opacity--50');
        contenedor.disabled = false;
    };
    
    deshabilitar (contenedor) {
        // Deshabilitamos el uso de un botón
        contenedor.classList.add('u-cursor--not-allowed','u-opacity--50');
        contenedor.disabled = true;
    };
}

export default UI;