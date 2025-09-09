import Sequelize from "sequelize";
import db from "../config/db.js";

export const Newsletter = db.define ('newsletters', {
    email: {
        type: Sequelize.STRING
    }
});

// si no existe la tabla, la crea
Newsletter.sync()
    .then(() => {
        console.log("Tabla 'newsletters' sincronizada correctamente.")
    })
    .catch(() => {
        console.log("Error al sincronizar la tabla 'newsletters'")
    });
