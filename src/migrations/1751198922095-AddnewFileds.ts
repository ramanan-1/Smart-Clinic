import { MigrationInterface, QueryRunner } from "typeorm";

export class AddnewFileds1751198922095 implements MigrationInterface {
    name = 'AddnewFileds1751198922095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phoneNumber\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phoneNumber\` varchar(255) NOT NULL`);
    }

}
