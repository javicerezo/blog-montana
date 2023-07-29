(function(){

    const listadoFechasNoticiasRecientes = document.querySelectorAll('.c-entradaDetalle__noticiasRecientes-fecha');
    listadoFechasNoticiasRecientes.forEach(fecha => {
        const date =  new Date(fecha.textContent).toDateString();
        fecha.textContent = date;
    });
    
    const listadoFechasRutas = document.querySelectorAll('.c-entradas__noticia-fecha');
    listadoFechasRutas.forEach(fecha => {
        const date =  new Date(fecha.textContent).toDateString();
        fecha.textContent = date;
    });

})()