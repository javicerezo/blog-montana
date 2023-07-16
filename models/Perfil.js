import Sequelize from "sequelize";
import db from "../config/db.js";

export const Perfil = db.define ('perfiles', {
    nombre: {
        type: Sequelize.STRING
    },
    apellidos: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    rolId: {
        type: Sequelize.INTEGER
        // numero 0 --> administrador
        // numero 2 --> general
    }
})