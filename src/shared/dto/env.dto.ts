import { Transform } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class EnvDto{

    @Transform(({value}) => parseInt(value))
    @IsNumber()
    SERVICE_PORT: number;

    @IsString()
    DB_HOST: string;

    @Transform(({value}) => parseInt(value))
    @IsNumber()
    DB_PORT: number;

    @IsString()
    DB_USER: string;
    
    @IsString()
    DB_PASSWORD: string;

    @IsString()
    DB_NAME: string;

    @IsString()
    JWT_SECRET: string;

    @IsNumber()
    @Transform(({value})=> Number(value))
    JWT_EXPIRES_IN: number

    @IsString()
    API_VERSION: string;

    @IsString()
    NODE_ENV: string;
}