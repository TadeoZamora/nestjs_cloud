import { UsuarioController } from './usuario.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioService } from 'src/api/usuario/usuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService],
    controllers: [UsuarioController],
})
export class UsuarioModule { }
