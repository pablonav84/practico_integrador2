import { usuarioModelo } from "./usuariosModelo.js";

export class UsuariosManager{

    async create(usuario){
        let nuevoUsuario=await usuarioModelo.create(usuario)
        return nuevoUsuario.toJSON()
    }

    async getBy(filtro){   // {email}
        return await usuarioModelo.findOne(filtro).lean()
    }

    async validarEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //Uso expresiones regulares
        return emailRegex.test(email);
    }    

    async validarPassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return passwordRegex.test(password);
    }
}