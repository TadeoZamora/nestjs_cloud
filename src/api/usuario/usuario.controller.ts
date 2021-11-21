import { Usuario as User } from './usuario.dto';
import { Controller, Body, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UserService } from 'src/api/usuario/user.service';

@Controller('api/usuario')
export class UsuarioController {
    constructor(private dbService : UserService){

    }
    // url dominio/usuario/crear
    @Post('crear')
    async Crear(@Body() usuario : User){
        try {
            // TODO: agregar validacion si el usuario ya existe
            //TODO: hacer llamada a servicio para obtener el usuario
            // if( verdadero ){
                // return { data : usuario }
            // }
            const { raw } =  await this.dbService.create(usuario)
            return {
                message : "Usuario creado",
                data : { id : raw.lastId, ...usuario }
            }
        } catch (error) {
            return {
                message : error.message,
                data : null
            }
        }
    }

}
