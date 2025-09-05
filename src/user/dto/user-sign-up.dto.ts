import { IsEmail, IsMobilePhone, IsString } from "class-validator";


export class UserSignUpDto {

    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @IsMobilePhone('en-IN')
    mobile: string;

    @IsString()
    password: string;
}