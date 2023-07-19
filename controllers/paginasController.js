import { Categoria } from '../models/Categoria.js';
 
const paginaInicio = (req, res) => { 
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'nosotros'
    });
}

const paginaEntradas = async (req, res) => { 
    const categorias = await Categoria.findAll();

    res.render('entradas', {
        pagina: 'entradas',
        categorias
    });
}
const paginaMas = (req, res) => { 

    res.render('mas', {
        pagina: 'mas'
    });
}


export {
    paginaInicio,
    paginaNosotros,
    paginaEntradas,
    paginaMas
}