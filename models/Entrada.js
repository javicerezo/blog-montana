import Sequelize from "sequelize";
import db from "../config/db.js";

export const Entrada = db.define('entradas', {
    titulo: {
        type: Sequelize.STRING
    },
    desarrollo: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    tipoId: {
        type: Sequelize.INTEGER
        // 1-rutas, 2-noticias, 3-consejos, 4-test, 5-reportajes, 6-preparacion fisica, 
    },
    updatedAt: {
        type: Sequelize.DATE
        // fecha de modificación de la entrada
    }
});

// si no existe la tabla, la crea
Entrada.sync()
    .then(() => {
        console.log("Tabla 'entradas' sincronizada correctamente.")
    })
    .catch(() => {
        console.log("Error al sincronizar la tabla 'entradas'")
    });
