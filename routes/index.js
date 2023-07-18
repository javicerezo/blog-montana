import express  from "express";
import {
    paginaInicio, 
    paginaFavoritos, 
    paginaLogin, 
    paginaRegistro, 
    paginaTuPerfil 
} from "../controllers/paginasController.js";
import {
    nuevoPerfil,
    nuevoLogin
} from '../controllers/perfilesController.js'

const router = express.Router();

router.get('/', paginaInicio);
router.get('/favoritos', paginaFavoritos);
router.get('/login', paginaLogin);
router.post('/login', nuevoLogin);
router.get('/registro', paginaRegistro);
router.post('/registro', nuevoPerfil);
router.get('/tuperfil', paginaTuPerfil);

export default router;