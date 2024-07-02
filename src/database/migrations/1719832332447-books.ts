import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Books1719832332447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                
                    {
                        name: "title",
                        type: "varchar",
                        length: "250",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "250",
                    },
                    {
                        name: "author_id",
                        type: "int",
                       
                    },
                ],
                
             foreignKeys:[
                {
                    columnNames: ['author_id'],
                    referencedTableName: 'authors',
                    referencedColumnNames: ['id']
                }
             ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }

}
