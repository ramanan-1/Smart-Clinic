import { MigrationInterface, QueryRunner } from "typeorm";

export class AddnewFiled1751195347391 implements MigrationInterface {
    name = 'AddnewFiled1751195347391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`hashedPassword\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`hashedPassword\``);
    }

}
