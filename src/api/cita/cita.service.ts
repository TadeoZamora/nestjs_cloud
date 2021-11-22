/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cita } from 'src/api/cita/cita.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CitaService {

    constructor(@InjectRepository(Cita) private citaRepository: Repository<Cita>) { }

    async create(cita: Cita) {
        return await this.citaRepository.insert(cita);
    }

    async update(id: number, cita: Cita): Promise<Cita> {

        await this.citaRepository.update(id, cita);

        return await this.citaRepository.findOne(id);
    }

    async delete(id: number): Promise<any> {
        return await this.citaRepository.delete(id);
      }

    async getCitaById(id: number): Promise<Cita> {
        return await this.citaRepository.findOne(id);
    }
}