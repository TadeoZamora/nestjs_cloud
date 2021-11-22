import { Usuario as User } from './usuario.dto';
import { Controller, Body, Post, Delete } from '@nestjs/common';
import { UsuarioService } from 'src/api/usuario/usuario.service';

@Controller('api/usuario')
export class UsuarioController {
    constructor(private dbService : UsuarioService){}
    
    // url dominio/usuario/crear
    @Post('crear')
    async Crear(@Body() usuario : User){

        try {
            
            // TODO: agregar validacion si el usuario ya existe
            const user = await this.dbService.getUserByEmail(usuario.correo)
            
            if (user?.id) {
                return {
                    message : "El correo ya existe",
                    data : user
                }
            }
          
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

    @Post('actualizar')
    async Actualizar(@Body() usuario : User){

        try {

            const user = await this.dbService.getUserById(usuario.id)
            
            if (!user?.id) {
                return {
                    message : "El usuario no existe",
                    data : null
                }
            }

            const updated = await this.dbService.update(usuario.id, usuario)

            return {
                message : 'Usuario actualizado',
                data : updated
            }

        } catch (error) {
            return {
                message : error.message,
                data : null
            }
        }
    }

    @Delete('eliminar')
    async Eliminar(@Body() id : number){

        try {

            // TODO: agregar validacion si el usuario ya existe
            const user = await this.dbService.getUserById(id)

            if (!user?.id) {
                return {
                    message : "El usuario no existe",
                    data : null
                }
            }
          
            const deleted =  await this.dbService.delete(id)

            if (deleted.affected == 1) {
                return {
                    message : "Usuario eliminado",
                    data : user.id
                }
        
            }
        } catch (error) {
            return {
                message : error.message,
                data : null
            }
        }
    }

}
