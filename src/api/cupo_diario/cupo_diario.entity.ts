import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { TipoCita } from '../tipo_cita/tipo_cita.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity()
export class CupoDiario{
    
    // @ApiProperty() //swagger
    @PrimaryGeneratedColumn()
    id? : number;

    @Column()
    cupo : number;
    
    @ManyToOne(type => TipoCita, tipoCita => tipoCita.citas)
    tipoCita: TipoCita;
    
}