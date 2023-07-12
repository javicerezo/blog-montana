import express  from "express";

const router = express.Router();

router.get('/', (req, res) => { 
    res.render('inicio', {
        pagina: 'Inicio'
    });
})
router.get('/favoritos', (req, res) => { 
    res.render('favoritos', {
        pagina: 'favoritos'
    });
})

export default router;