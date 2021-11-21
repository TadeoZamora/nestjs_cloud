import { UsuarioController } from './usuario.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UserService } from 'src/api/usuario/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UserService],
    controllers: [UsuarioController],
})
export class UsuarioModule { }
