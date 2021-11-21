import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}