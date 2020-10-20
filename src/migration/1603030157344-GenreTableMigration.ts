import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class GenreTableMigration1603030157344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "Genre",
                columns: [
                    {
                        name: "id",
                        type: "int",
                    },
                    {
                        name: "genreId",
                        type: "int",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "select",
                        type: "boolean",
                    },
                    {
                        name: "owner",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Genre")
    }
}
