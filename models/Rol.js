import Sequelize from "sequelize";
import db from "../config/db.js";

export const Rol = db.define ('roles', {
    rol: {
        type: Sequelize.STRING
    }
})