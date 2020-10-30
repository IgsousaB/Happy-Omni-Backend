import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603548040772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      //Realizar alterações
      //criar nova tabela, criar novo campo, deleter novo campo

      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          { 
            name: 'id',
            type: 'integer',
            unsigned: true, // nao negativa
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name:'about',
            type: 'text'
          },
          {
            name:'instructions',
            type: 'text'
          },
          {
            name: 'opening_hours',
            type: 'text'
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false
          }
        ],
    
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfazer o que foi feito no up
        await queryRunner.dropTable('orphanages');
    }

}

// 10. RODAR MIGRAÇÕES
// TERMINAL > yarn typeorm migration:run 

// 11. INSTALAR O BEEKEPER E CONECTAR NO BANCO