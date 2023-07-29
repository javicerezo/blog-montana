import express  from "express";
import {
    paginaInicio, 
    paginaNosotros,
    paginaEntradas,
    paginaEntradasCategoria,
    paginaEntradasDetalle,
    paginaClub
} from "../controllers/paginasController.js";
import { agregarNewsletter } from "../controllers/newsletterController.js";
import { agregarComentario } from "../controllers/comentariosController.js";

import { incribirClub } from "../controllers/clubController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);
router.post('/nosotros', agregarNewsletter);

router.get('/entradas', paginaEntradas);
router.get('/entradas/:categoria', paginaEntradasCategoria);
router.get('/entradas/:categoria/:titulo', paginaEntradasDetalle);
router.post('/entradas/:categoria/:titulo', agregarComentario);

router.get('/club', paginaClub);
router.post('/club', incribirClub);

export default router;