import Sequelize from "sequelize";
import db from "../config/db.js";

export const Categoria = db.define ('categorias', {
    categoria: {
        type: Sequelize.STRING
    }
})