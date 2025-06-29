import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User{
    
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({nullable:false})
    firstName: string;

    @Column({nullable:false})
    lastName:string

    @Column({unique: true})
    @IsEmail()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    hashedPassword: string;
}