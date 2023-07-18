

function guardarStorage(nombreArray, array){
    localStorage.setItem(nombreArray, JSON.stringify(array));
};

function cargarStorage (nombreArray) {
    return JSON.parse(localStorage.getItem(nombreArray)) || [];
};

export {
    guardarStorage,
    cargarStorage
}