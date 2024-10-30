import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from "class-validator"

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password!: string
}

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string

    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password?: string    
}