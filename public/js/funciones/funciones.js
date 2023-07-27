

function numerosAleatorios (cantidadNumeros, limite) {
    const array = [];
    while (array.length < cantidadNumeros) {
        const numeroAleatorio = (Math.floor(Math.random() * limite)) + 1;
        let existe = false;
        for (let i=0; i<array.length; i++) {
            if(array [i] == numeroAleatorio){
                existe = true;
                break;
            }
        }
        if(!existe){
            array.push(numeroAleatorio);     
        }
    }
    return array;
};

function rellenarinput (objComentario, e) {
    objComentario[e.target.name] = e.target.value.trim();
};

function comprobarInput (objComentario) {
    if(objComentario.alias != '' && objComentario.comentario != '') {
        return true;
    } else {
        return false;
    }
}

function resetInputs(objComentario) {
    objComentario.alias = '';
    objComentario.comentario = '';
};

function resetFormulario (formulario){
    setTimeout(() => {
        formulario.reset();
    }, 3000);
};

export {
    numerosAleatorios,
    rellenarinput,
    comprobarInput,
    resetInputs,
    resetFormulario
}