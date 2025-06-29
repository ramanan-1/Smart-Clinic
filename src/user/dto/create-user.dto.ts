import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    // @IsNotEmpty()
    // phoneNumber: string;

    @IsNotEmpty()
    @Length(8, 20)
    password: string;
}
