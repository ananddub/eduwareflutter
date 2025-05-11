import { IsNotEmpty, Length } from 'class-validator';

export class Auth {
    @IsNotEmpty()
    @Length(10, 15)
    phone: string;
    @IsNotEmpty()
    database: string;
    @IsNotEmpty()
    password: string;
}
