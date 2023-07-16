
class UI {
    limpiarHTML (contenedor) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }
    imprimirAlerta (contenedorMensaje, tipo, mensaje) {
        if(contenedorMensaje.childElementCount === 0) {
            console.log('entra en el if')
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
            }, 30000);
        }
    }
}

export default UI;