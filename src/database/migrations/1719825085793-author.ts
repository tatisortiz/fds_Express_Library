import { table } from "console";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Author1719825085793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "150",
                        isNullable: false,
                        isUnique: true
                    },

                    {
                        name: "password",
                        type: "varchar",
                        length: "250",
                        isNullable: false
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default: true,
                        isNullable: false
                        
                    },
                    {
                        name: "role",
                        type: "enum",
                        enum:['user','admin','super_admin'],
                       default: "'user'"

                        
                    },
                
                    {
                        name: "created_at",
                        type: "datetime",
                        default: "now()",

                    },
                    {
                        name: "updated_at",
                        type: "datetime",
                        default: "now()",
                        onUpdate: "now()",
                    },

            
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }


}
