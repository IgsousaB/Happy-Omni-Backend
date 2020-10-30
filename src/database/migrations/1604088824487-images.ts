import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class images1604088824487 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
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
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer'
        }
      ],
      foreignKeys: [ //RELACIONAMENTO DE TABELA ? 1:11:00
        { 
          name: 'ImageOrphanage', 
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}


// RODAR MIGRAÇÃO > yarn typeorm migration:run