import { CitaController } from './cita.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './cita.entity';
import { CitaService } from 'src/api/cita/cita.service';

@Module({
    imports: [TypeOrmModule.forFeature([Cita])],
    providers: [CitaService],
    controllers: [CitaController],
})
export class CitaModule { }
