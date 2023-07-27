import { Categoria } from '../models/Categoria.js';
import { Entrada } from '../models/Entrada.js';
import { numerosAleatorios } from '../public/js/funciones/funciones.js';
import { Comentario } from '../models/Comentario.js';
 
const paginaInicio = async (req, res) => { 
    // const todasCategorias = await Categoria.findAll();
    const paginaInicio = '';
    res.render('inicio', {
        pagina: 'Inicio',
        // todasCategorias,
        clase: 'c-home',
        paginaInicio
    });
}

const paginaNosotros = async (req, res) => {
    const paginaNosotros = '';
    const todasCategorias = await Categoria.findAll();
    res.render('nosotros', {
        pagina: 'nosotros',
        paginaNosotros,
        todasCategorias
    });
}

const paginaEntradas = async (req, res) => {
    const paginaEntradas = '';
    const todasCategorias = await Categoria.findAll();
    const entradas = await Entrada.findAll();
    res.render('entradas', {
        pagina: 'entradas',
        paginaEntradas,
        todasCategorias,
        entradas
    });
}

const paginaEntradasCategoria = async (req, res) => {
    const paginaEntradasCategoria = '';
    const {categoria} = req.params;

    try {
        const resultadoCategoria = await Categoria.findAll({
            where: {
                categoria
            }
        });
        
        const todasCategorias = await Categoria.findAll();
        const todasEntradas = await Entrada.findAll();
        res.render('categoria', {
            pagina: 'Listado',
            paginaEntradasCategoria,
            todasCategorias,
            resultadoCategoria,
            todasEntradas
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaEntradasDetalle = async (req, res) => {
    const paginaEntradasDetalle = '';
    console.log(req.params)

    const { titulo } = req.params;
    const arrayAleatorio = numerosAleatorios(4, 10);
    
    try {
        const todasCategorias = await Categoria.findAll();
        const entradasRecomendadas = await Entrada.findAll({
            where: {
                id: arrayAleatorio
            }
        })
        const entrada = await Entrada.findAll({
            where: {
                titulo
            }
        })
        const listadoComentarios = await Comentario.findAll();
        res.render('entradaDetalle', {
            pagina: 'Entrada Detalle',
            paginaEntradasDetalle,
            entrada,
            todasCategorias,
            entradasRecomendadas,
            listadoComentarios
        })
    } catch (error) {
        console.log(error)
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
    paginaEntradasDetalle,
    paginaMas
}