import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class MovieTableMigration1603028106942 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "Movie",
                columns: [
                    {
                        name: "id",
                        type: "int",
                    },
                    {
                        name: "movieId",
                        type: "int",
                    },
                    {
                        name: "user",
                        type: "varchar",
                    },
                    {
                        name: "watched",
                        type: "boolean"
                    }
                ]
               
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Movie")
    }
}
