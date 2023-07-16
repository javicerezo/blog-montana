import express  from "express";
import {
    paginaInicio, 
    paginaFavoritos, 
    paginaLogin, 
    paginaRegistro, 
    paginaTuPerfil 
} from "../controllers/paginasController.js";

const router = express.Router();

router.get('/', paginaInicio);
router.get('/favoritos', paginaFavoritos);
router.get('/login', paginaLogin);
router.get('/registro', paginaRegistro);
router.get('/tuperfil', paginaTuPerfil);

export default router;