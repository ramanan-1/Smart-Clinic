import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueEmailConstraint1751189115134 implements MigrationInterface {
    name = 'AddUniqueEmailConstraint1751189115134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phoneNo\` \`phoneNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phoneNumber\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phoneNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phoneNumber\` \`phoneNo\` varchar(255) NOT NULL`);
    }

}
