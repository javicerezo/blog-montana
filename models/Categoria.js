import Sequelize from "sequelize";
import db from "../config/db.js";

export const Categoria = db.define ('categorias', {
    categoria: {
        type: Sequelize.STRING
    }
});

// si no existe la tabla, la crea
Categoria.sync()
    .then(() => {
        console.log("Tabla 'categorias' sincronizada correctamente.")
    })
    .catch(() => {
        console.log("Error al sincronizar la tabla 'categorias'")
    });
