import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cita } from '../cita/cita.entity';
@Entity()
export class Usuario{
    
    // @ApiProperty() //swagger
    @PrimaryGeneratedColumn()
    id? : number;

    @Column()
    nombre : string;

    @Column()
    telefono : string;

    @Column()
    correo : string;

    @OneToMany(type => Cita, cita => cita.id)
    citas: Cita[];
}