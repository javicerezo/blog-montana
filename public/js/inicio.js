(function(){

    const listadoFechasNoticiasRecientes = document.querySelectorAll('.c-entradaDetalle__noticiasRecientes-fecha');
    listadoFechasNoticiasRecientes.forEach(fecha => {
        const date =  new Date(fecha.textContent).toDateString();
        fecha.textContent = date;
    });

})()