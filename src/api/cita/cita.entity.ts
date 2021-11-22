import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { TipoCita } from '../tipo_cita/tipo_cita.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity()
export class Cita{
    
    // @ApiProperty() //swagger
    @PrimaryGeneratedColumn()
    id? : number;

    @Column()
    fecha : Date;

    @Column()
    hora : string;

    @Column()
    lugar : string;

    @Column()
    personas : number;

    @Column()
    estatus : string;

    @ManyToOne(type => Usuario, usuario => usuario.citas)
    usuario: number;
    
    @ManyToOne(type => TipoCita, tipoCita => tipoCita.citas)
    tipoCita: number;
    
    
}