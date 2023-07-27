import { Newsletter } from '../models/Newsletter.js';

const agregarNewsletter = async (req, res) => {
    const { email } = req.body;
    const mensaje = [];

    const respuesta = await Newsletter.findAll({
        where: {
            email
        }
    });
    
    if(respuesta.length == 0) {
        try {
            await Newsletter.create({
                email
            })
            mensaje.push({
                contenido: 'inscrito correctamente. muchas gracias',
                tipo: 'exito'
            });
            res.render('nosotros', {
                pagina: 'Nosotros',
                mensaje
            })
        } catch (error) {
            console.log(error);
        }
    }
    if(respuesta.length > 0) {
        try {
            mensaje.push({
                contenido: 'ya estabas inscrito a nuestra newsletter. muchas gracias',
                tipo: 'alerta'
            });
            res.render('nosotros', {
                pagina: 'Nosotros',
                mensaje,
                email
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    agregarNewsletter
}