import { Categoria } from '../models/Categoria.js';
import { Entrada } from '../models/Entrada.js';
 
const paginaInicio = async (req, res) => { 
    const categorias = await Categoria.findAll();
    res.render('inicio', {
        pagina: 'Inicio',
        categorias
    });
}

const paginaNosotros = async (req, res) => { 
    const categorias = await Categoria.findAll();
    res.render('nosotros', {
        pagina: 'nosotros',
        categorias
    });
}

const paginaEntradas = async (req, res) => { 
    const categorias = await Categoria.findAll();
    res.render('entradas', {
        pagina: 'entradas',
        categorias
    });
}

const paginaEntradasCategoria = async (req, res) => {
    console.log(req.params)

    const {categoria} = req.params;
    try {
        const resultado = await Categoria.findAll({
            where: {
                categoria
            }
        });
        
        const resultado2 = await Entrada.findAll()
        res.render('categoria', {
            pagina: 'Listado', 
            resultado,
            resultado2
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaMas = async (req, res) => { 
    const categorias = await Categoria.findAll();
    res.render('mas', {
        pagina: 'mas',
        categorias
    });
}


export {
    paginaInicio,
    paginaNosotros,
    paginaEntradas,
    paginaEntradasCategoria,
    paginaMas
}