import express  from "express";
import {
    paginaInicio, 
    paginaNosotros,
    paginaEntradas,
    paginaEntradasCategoria,
    paginaEntradasDetalle,
    paginaMas
} from "../controllers/paginasController.js";
import { agregarNewsletter } from "../controllers/newsletterController.js";
import { agregarComentario } from "../controllers/comentariosController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);
router.post('/nosotros', agregarNewsletter);

router.get('/entradas', paginaEntradas);
router.get('/entradas/:categoria', paginaEntradasCategoria);
router.get('/entradas/:categoria/:titulo', paginaEntradasDetalle);
router.post('/entradas/:categoria/:titulo', agregarComentario);

router.get('/mas', paginaMas);

export default router;