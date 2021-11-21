/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/api/usuario/usuario.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

    constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) { }

    async create(usuario: Usuario) {
        return await this.usuarioRepository.insert(usuario);
    }

}