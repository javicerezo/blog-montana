import { Categoria } from '../models/Categoria.js';
import { Entrada } from '../models/Entrada.js';
import { numerosAleatorios } from '../public/js/funciones/funciones.js';
import { Comentario } from '../models/Comentario.js';
 
const paginaInicio = async (req, res) => { 
    const arrayAleatorio = numerosAleatorios(4, 10);
    const scripts = 'paginaInicio';
    const promiseDB = [];
    promiseDB.push(Categoria.findAll());
    promiseDB.push(Entrada.findAll({
        where: {
            id: arrayAleatorio
        }
    }));
    promiseDB.push(Entrada.findAll({
        where: {
            tipoId: 1
        }
    }));
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina: 'Home',
            clase: 'c-home',
            paginaInicio,
            todasCategorias: resultado[0],
            entradasRecomendadas: resultado[1],
            todasEntradas: resultado[2],
            scripts
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = async (req, res) => {
    const scripts = 'paginaNosotros';
    const todasCategorias = await Categoria.findAll();
    res.render('nosotros', {
        pagina: '¿Quienes somos?',
        scripts,
        todasCategorias
    });
}

const paginaEntradas = async (req, res) => {
    const scripts = 'paginaEntradas';
    const promiseDB = [];
    promiseDB.push(Categoria.findAll());
    promiseDB.push(Entrada.findAll());
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('entradas', {
            pagina: 'Artículos de Blog',
            scripts,
            todasCategorias: resultado[0],
            todasEntradas: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaEntradasCategoria = async (req, res) => {
    const scripts = 'paginaEntradasCategoria';
    const {categoria} = req.params;
    const promiseDB = [];
    promiseDB.push(Categoria.findAll());
    promiseDB.push(Categoria.findAll({
        where: {
            categoria
        }
    }));
    promiseDB.push(Entrada.findAll());

    try {
        const resultado = await Promise.all(promiseDB);
        res.render('categoria', {
            pagina: 'Listado por Categoria',
            scripts,
            todasCategorias: resultado[0],
            resultadoCategoria: resultado[1],
            todasEntradas: resultado[2]
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaEntradasDetalle = async (req, res) => {
    const scripts = 'paginaEntradasDetalle';
    const { titulo } = req.params;
    const arrayAleatorio = numerosAleatorios(4, 10);
    
    try {
        const todasCategorias = await Categoria.findAll();
        const entradasRecomendadas = await Entrada.findAll({
            where: {
                id: arrayAleatorio
            }
        });
        const entrada = await Entrada.findAll({
            where: {
                titulo
            }
        });
        const listadoComentarios = await Comentario.findAll();
        res.render('entradaDetalle', {
            pagina: 'Entrada Detalle',
            scripts,
            entrada,
            todasCategorias,
            entradasRecomendadas,
            listadoComentarios
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaClub = async (req, res) => {
    const scripts = 'paginaClub';
    const todasCategorias = await Categoria.findAll();
    res.render('club', {
        pagina: 'Club de montaña',
        todasCategorias,
        scripts
    });
}


export {
    paginaInicio,
    paginaNosotros,
    paginaEntradas,
    paginaEntradasCategoria,
    paginaEntradasDetalle,
    paginaClub
}