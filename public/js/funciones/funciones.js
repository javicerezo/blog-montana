

function guardarStorage(nombreArray, array){
    localStorage.setItem(nombreArray, JSON.stringify(array));
};

function cargarStorage (nombreArray) {
    return JSON.parse(localStorage.getItem(nombreArray)) || [];
};

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

export {
    guardarStorage,
    cargarStorage,
    numerosAleatorios
}