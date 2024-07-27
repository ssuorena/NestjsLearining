import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator";

export class RegisterDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description:"ID of users in mongo db database",
        maximum:10000,
        minimum:100,
        example:150

    })
    id: number
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: "Email of user",
        example:"ssuorena@gmail.com",
        format:"email"
    })
    email: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @ApiProperty({
        description: "First name of user",
        example:"Suorena",
        minLength:2
    })
    first_name: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @ApiProperty({
        description: "Last name of user",
        example:"Saeedi",
        minLength:2
    })
    last_name: string;
    @IsNumber()
    @IsOptional()
    @Max(150)
    @ApiProperty(
        {
            description: "Age of user",
            example:28,
            maximum:150
        }
    )
    age: number;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Password of user",
        example:"12345",

    })
    password: string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Role of user",
        example:"ADMIN",

    })
    roles: string;
}