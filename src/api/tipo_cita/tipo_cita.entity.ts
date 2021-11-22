import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cita } from '../cita/cita.entity';
import { CupoDiario } from '../cupo_diario/cupo_diario.entity';
@Entity()
export class TipoCita{
    
    // @ApiProperty() //swagger
    @PrimaryGeneratedColumn()
    id? : number;

    @Column()
    nombre : string;

    @Column()
    costo : number;

    @OneToMany(type => Cita, cita => cita.id)
    citas: Cita[];

    @OneToMany(type => CupoDiario, cupoDiario => cupoDiario.id)
    cupo_diario: CupoDiario[];
}