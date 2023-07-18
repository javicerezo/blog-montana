import { Categoria } from '../models/Categoria.js';
 
const paginaInicio = async (req, res) => { 
    const categorias = await Categoria.findAll();

    res.render('inicio', {
        pagina: 'Inicio',
        categorias
    });
}

const paginaFavoritos = (req, res) => { 
    res.render('favoritos', {
        pagina: 'favoritos'
    });
}

const paginaLogin = (req, res) => { 
    res.render('login', {
        pagina: 'login'
    });
}

const paginaRegistro = (req, res) => { 
    res.render('registro', {
        pagina: 'registro'
    });
}

// muestra un perfil por su id
const paginaTuPerfil = (req, res) => { 
    res.render('tuperfil', {
        pagina: 'tuperfil'
    });
}

export {
    paginaInicio,
    paginaFavoritos,
    paginaLogin,
    paginaRegistro,
    paginaTuPerfil
}