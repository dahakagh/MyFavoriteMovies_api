import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTable1603024750604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "login",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar(20)",
                    },
                    {
                        name: "genres",
                        type: "varchar",
                    },
                    {
                        name: "movies",
                        type: "varchar",
                    },
                ], 
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User")
    }

}
