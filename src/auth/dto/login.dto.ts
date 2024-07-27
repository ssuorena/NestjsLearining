import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsEmail()
    @ApiProperty({
        description: "Email of user",
        example:"ssuorena@gmail.com",
        format:"email"
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Password of user",
        example:"12345",

    })
    password: string;
}
