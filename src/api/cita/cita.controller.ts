import { Cita } from './cita.dto';
import { Controller, Body, Post, Delete } from '@nestjs/common';
import { CitaService } from 'src/api/cita/cita.service';

@Controller('api/cita')
export class CitaController {
    constructor(private dbService : CitaService){}

    @Post('crear')
    async Crear(@Body() cita : Cita){

        try {

            const { raw } = await this.dbService.create(cita)
            return {
                message : "Cita creada",
                data : { id : raw.lastId, ...cita }
            }
            
        } catch (error) {
            return {
                message : error.message,
                data : null
            }
        }
    }

    @Post('actualizar')
    async Actualizar(@Body() cita : Cita){

        try {

            const meet = await this.dbService.getCitaById(cita.id)
            
            if (!meet?.id) {
                return {
                    message : "La cita no existe",
                    data : null
                }
            }

            const updated = await this.dbService.update(cita.id, cita)

            return {
                message : 'Cita actualizada',
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

            const meet = await this.dbService.getCitaById(id)
            
            if (!meet?.id) {
                return {
                    message : "La cita no existe",
                    data : null
                }
            }
        
            const deleted =  await this.dbService.delete(id)

            if (deleted.affected == 1) {
                return {
                    message : "Cita eliminada",
                    data : meet.id
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
