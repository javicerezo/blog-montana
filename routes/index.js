import express  from "express";
import {
    paginaInicio, 
    paginaNosotros,
    paginaEntradas,
    paginaMas
} from "../controllers/paginasController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/entradas', paginaEntradas);

router.get('/mas', paginaMas);

export default router;