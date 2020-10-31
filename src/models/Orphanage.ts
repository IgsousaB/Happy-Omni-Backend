// 13. EDITAR O ts.config.json:
    // "strictPropertyInitialization": false,
    // "experimentalDecorators": true,
    // "emitDecoratorMetadata": true,   


    // IMPORTAR DEPENDENCIAS
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages') // DECORATOR - ASSOCIAR A CLASSE COM A ENTIDADE NA TABELA
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;
    
    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image,  image => image.orphanage)
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
    
}