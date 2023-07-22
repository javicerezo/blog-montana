import Sequelize from "sequelize";
import db from "../config/db.js";

export const Newsletter = db.define ('newsletters', {
    email: {
        type: Sequelize.STRING
    }
})