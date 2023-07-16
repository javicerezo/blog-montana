import Sequelize from "sequelize";
import db from "../config/db.js";

export const Entrada = db.define('entradas', {
    // AQUI CONFIGURAMOS LO QUE ES CADA COLUMNA DE LA TABLA 'ENTRADAS', QUE ES LA QUE ESTAMOS CONSULTANDO...no hace falta poner el id
    titulo: {
        type: Sequelize.STRING
    },
    desarrollo: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.NUMBER
        // 0-rutas, 1-noticias, 2-consejos, 3-test, 4-reportajes, 5-preparacion fisica, 
    }
})