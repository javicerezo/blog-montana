import Sequelize from "sequelize";
import db from "../config/db.js";

export const Newsletter = db.define ('newsletters', {
    email: {
        type: Sequelize.STRING
    }
});

Newsletter.sync()
    .then(() => {
        console.log("Tabla 'newsletters' sincronizada correctamente.")
    })
    .catch(() => {
        console.log("Error al sincronizar la tabla 'newsletters'")
    });
