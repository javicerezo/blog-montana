import { Entrada } from "../models/Entrada.js";
import { Categoria } from "../models/Categoria.js";
import { numerosAleatorios } from '../public/js/funciones/funciones.js';
import { Comentario } from "../models/Comentario.js";

const agregarComentario = async (req, res) => {

    const { alias, comentarioId, comentario } = req.body;
    const { categoria, titulo } = req.params;
    const mensaje = [];
    const arrayAleatorio = numerosAleatorios(4, 10);

    if(alias.trim() == ''){
        mensaje.push({
            contenido: 'El alias está vacío',
            tipo: 'alerta'
        })
    }
    if(comentario.trim() == ''){
        mensaje.push({
            contenido: 'El comentario está vacío',
            tipo: 'alerta'
        })
    }

    try {
        const todasCategorias = await Categoria.findAll();
        const entradasRecomendadas = await Entrada.findAll({
            where: {
                id: arrayAleatorio
            }
        });
        const entrada = await Entrada.findAll({
            where: {
                titulo
            }
        });
        await Comentario.create({
            alias, 
            comentario,
            comentarioId
        })
        const listadoComentarios = await Comentario.findAll();
        if(mensaje.length === 0){
            mensaje.push({
                contenido: 'Comentario insertado correctamente. muchas gracias.',
                tipo: 'exito'
            })
            res.render('entradaDetalle', {
                pagina: 'Entrada Detalle',
                entrada,
                todasCategorias,
                entradasRecomendadas,
                listadoComentarios,
                mensaje
            })
        } else {
            res.render('entradaDetalle', {
                pagina: 'Entrada Detalle',
                entrada,
                todasCategorias,
                entradasRecomendadas,
                listadoComentarios,
                mensaje,
                alias,
                comentario
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export {
    agregarComentario
}