/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/api/usuario/usuario.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) { }

    async create(usuario: Usuario) {
        return await this.usuarioRepository.insert(usuario);
    }

    async getUserByEmail(correo: string): Promise<Usuario> {
        return await this.usuarioRepository.findOne({correo});
    }

    async getUserById(id: number): Promise<Usuario> {
       return await this.usuarioRepository.findOne(id);
    }

    async update(id: number, usuario: Usuario): Promise<Usuario> {

        await this.usuarioRepository.update(id, usuario);

        return await this.usuarioRepository.findOne(id);

    }

    async delete(id: number): Promise<any> {
        return await this.usuarioRepository.delete(id);
    }


}