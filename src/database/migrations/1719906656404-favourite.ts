import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Favourite1719906656404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "favourite",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                
                    {
                        name: "user_id",
                        type: "int",
                       
                    },
                    {
                        name: "books_id",
                        type: "int",
                
                    },
                   
                ],
                
             foreignKeys:[
                {
                    columnNames: ['user_id'],
                    referencedTableName: 'user',
                    referencedColumnNames: ['id']
                },

                {
                    columnNames: ['books_id'],
                    referencedTableName: 'books',
                    referencedColumnNames: ['id']
                }
            ],
            uniques: [
                new TableUnique({
                    name: "user_book_unique",
                    columnNames: ["user_id", "book_id"],
                }),
            ],
            


            
            }),
            true
        );
    }



    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
