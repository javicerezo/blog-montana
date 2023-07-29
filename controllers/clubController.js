import { Categoria } from '../models/Categoria.js';


const incribirClub = async (req, res) => {
    console.log(req.body);
    const scripts = 'paginaClub';
    const { nombre, email, comentario } = req.body;
    const mensaje = [];

    if(nombre == '') {
        mensaje.push({
            contenido: 'El nombre está vacío',
            tipo: 'alerta'
        })
    }
    if(email == '') {
        mensaje.push({
            contenido: 'El correo está vacío',
            tipo: 'alerta'
        })
    }

    try {
        const todasCategorias = await Categoria.findAll();

        if(mensaje.length == 0) {
            mensaje.push({
                contenido: 'El correo se ha enviado correctamente',
                tipo: 'exito'
            })
            res.render('club', {
                pagina: 'Club de montaña',
                todasCategorias,
                scripts,
                mensaje
            });
        } else {
            res.render('club', {
                pagina: 'Club de montaña',
                todasCategorias,
                scripts,
                mensaje,
                nombre,
                email,
                comentario
            });
        }
    } catch (error) {
        console.log(error);
    }
}


export {
    incribirClub
}