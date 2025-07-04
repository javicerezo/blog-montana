// NOTA IMPORTANTE
// ESTE FICHERO SOLO SE DEBE EJECUTAR 1 VEZ PARA POBLAR LA VEZ PARA BASE DE DATOS DE RENDER
// COMPRUEBA SI LAS TABLAS YA TIENE  DATOS DE PRUEBA, LOS BORRA E INSERTA DATOS NUEVOS

import db from "./config/db.js";
import { Categoria } from "./models/Categoria.js";
import { Entrada } from "./models/Entrada.js";
import { Comentario } from "./models/Comentario.js";
import { Newsletter } from "./models/Newsletter.js";
import { where } from "sequelize";

async function seed() {
    try {
        await db.authenticate();
        console.log("Conectado a la base de datos con EXITO");

        // Borrar datos si existen
        const tablas = [
            {modelo: Categoria, nombre: 'categorias'},
            {modelo: Entrada, nombre: 'entradas'},
            {modelo: Comentario, nombre: 'comentarios'},
            {modelo: Newsletter, nombre: 'newsletters'}
        ];
        for (const{ modelo, nombre } of tablas) {
            const count = await modelo.count();
            if (count > 0) {
                console.log(`La tabla ${nombre} tiene ${count} registros. BORRANDO... .`);
                await modelo.destroy({ where: {} });
            } else {
                console.log(`La tabla ${nombre} no tiene registros.`);
            }
        }

        // Importar cada seed individual
        const seedCategorias = await import('./seeds/seedCategorias.js');
        const seedEntradas = await import('./seeds/seedEntradas.js');
        const seedComentarios = await import('./seeds/seedComentarios.js');
        const seedNewsletters = await import('./seeds/seedNewsletters.js');

        // invocar seeds por orden (para evitar errores)
        await seedCategorias.default();
        await seedEntradas.default();
        await seedComentarios.default();
        await seedNewsletters.default();
        
        console.log('TODOS LOS DATOS DE PRUEBA HAN SIDO REGISTRADOS CORRECTAMENTE.');
        process.exit();
    } catch (e) {
        console.error('Error en:', e);
        process.exit();
    }
}

seed();