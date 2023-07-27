import { Categoria } from '../models/Categoria.js';
import { Entrada } from '../models/Entrada.js';
import { numerosAleatorios } from '../public/js/funciones/funciones.js';
import { Comentario } from '../models/Comentario.js';
 
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
    const entradas = await Entrada.findAll();
    res.render('entradas', {
        pagina: 'entradas',
        categorias,
        entradas
    });
}

const paginaEntradasCategoria = async (req, res) => {
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
            todasCategorias,
            resultadoCategoria,
            todasEntradas
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaEntradasDetalle = async (req, res) => {
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