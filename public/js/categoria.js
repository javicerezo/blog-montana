(function(){
    
    const listadoFechas = document.querySelectorAll('.c-categoria__noticia-fecha');
    
    listadoFechas.forEach(fecha => {
        const date =  new Date(fecha.textContent).toDateString();
        fecha.textContent = date;
    });

})();