import Sequelize from "sequelize";
import db from "../config/db.js";

export const Comentario = db.define ('comentarios', {
    alias: {
        type: Sequelize.STRING
    },
    comentario: {
        type: Sequelize.STRING
    },
    comentarioId: {
        type: Sequelize.INTEGER
        // ESTE TIPOID DEBE COINCIDIR CON EL ID DE LA ENTRADA 
    },
    createdAt: {
        type: Sequelize.DATE
        // fecha de creación del comentario
    }
});

Comentario.sync()
    .then(() => {
        console.log("Tabla 'comentarios' sincronizada correctamente.")
    })
    .catch(() => {
        console.log("Error al sincronizar la tabla 'comentarios'")
    });
