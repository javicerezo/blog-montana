import { Categoria } from '../models/Categoria.js';
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
            const user = await Perfil.create({
                nombre: email.substring(0, email.indexOf('@')),
                apellidos: email.substring(0, email.indexOf('@')),
                imagen: 'sinperfil.jpeg',
                correo: email,
                password: password,
                rolId: 2
            });
            res.render('/tuperfil', {
                //COMPROBAR SI ESTA BIEN ESTO 
                user
            });
        } catch (error){
            console.log(error);
        }
    }
}

const nuevoLogin = async (req, res) => {
    const errores = [];
    const categorias = await Categoria.findAll();
    if(req.body.emailLogin) {
        const { emailLogin, passwordLogin } = req.body;
        const user = await Perfil.findAll({
            where: {
                correo: emailLogin,
                password: passwordLogin
            }
        })
        console.log(user)
        
        if(user.length === 0){
            errores.push({
                mensaje: 'El email o la contraseña no coinciden',
            }) 
        }

        if(errores.length > 0) {
            // mostramos la vista con los errores
            res.render('login', {
                pagina: 'login',
                errores,
                emailLogin,
                passwordLogin
            })
        } else {
            console.log('LOGUEADO OK')
            // todo ok logueamos usuario
            try {
                res.render('inicio', {
                    pagina: 'Inicio',
                    categorias,
                    user
                });
                // TERMINAR BIEN MANDAR EL PERFIL PARA LOGUEAR
            } catch (error) {
                console.log(error);
            }
        }
    }
    if(req.body.emailOlvido) {
        const { emailOlvido } = req.body;
        if( emailOlvido.trim() === ''){
            console.log('olvidado no está vacio')
            // HAY QUE MANDAR CORREO PARA CONFIRMAR CONTRASEÑA
        }
    }
}



export {
    nuevoPerfil,
    nuevoLogin
}