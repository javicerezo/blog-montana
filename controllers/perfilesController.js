import { Perfil } from '../models/Perfil.js';

const nuevoPerfil = async (req, res) => {
    const { email, password } = req.body;
    const errores = [];

    if ( email.trim() === ''){
        errores.push({
            mensaje: 'el email esta vacio',
        })
    }
    if ( password.trim() === ''){
        errores.push({
            mensaje:'el password esta vacio',
        })
    }

    if(errores.length > 0) {
        // mostramos la vista con los errores
        res.render('registro', {
            pagina: 'registro',
            errores,
            email,
            password
        })
    } else {
        // almacenarlo en la base de datos
        try {
            await Perfil.create({
                nombre: email.substring(0, email.indexOf('@')),
                apellidos: email.substring(0, email.indexOf('@')),
                imagen: 'sinperfil.jpeg',
                correo: email,
                password: password,
                rolId: 2
            });
            res.redirect('/tuperfil');
        } catch (error){
            console.log(error);
        }

    }
}

export {
    nuevoPerfil
}