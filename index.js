import express from 'express';
import router from './routes/index.js';

const app = express(); //NOTA IMPORT...SOLO SE PERMITE UNA INSTANCIA DE EXPRESS (QUE ES APP)

//DEFINIR PUERTO
const port = process.env.PORT || 4000;

// HABILITAR PUG
app.set('view engine', 'pug');

// DEFIMOS ALGUNAS VARIABLES
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actalYear = year.getFullYear();
    res.locals.nombreSitio = 'Blog de montaña';
    next();
})

//AGREGAR LA CARPETA PUBLIC
app.use(express.static('public'));

// AGREGAMOS EL ROUTER
app.use('/', router);

// ARRANCA EL SERVIDOR
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})