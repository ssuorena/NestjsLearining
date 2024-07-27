import { HttpException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Model } from 'mongoose';
import { User } from 'src/UserModel';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import session from 'express-session';
import { Response } from 'express';


@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>,
  private readonly usersService: UsersService,
  private readonly JwtService: JwtService) {}



  async register(registerDto: RegisterDto) {
    const user = await this.userModel.findOne({"email": registerDto.email }).exec();
    console.log(registerDto.email)
    if(user){
      throw new HttpException("User already exist",400);
    }
    
    registerDto.password = await bcrypt.hash(registerDto.password,10);
  
    return await this.usersService.create(registerDto)
  }



  async login(LoginDto: LoginDto ,  req: Request ) {
    const user = await this.userModel.findOne({email: LoginDto.email }).exec();
  
    if(!user){
      throw new HttpException("User not found",404);
    }

    const ispasswordMatch = await bcrypt.compare(LoginDto.password,user.password)

    if(!ispasswordMatch){
      throw new HttpException("Password is wrong",400);
    }

    const accessToken = this.JwtService.sign({
      sub: user.id,
      email: user.email,
      roles: user.roles,
    })
    console.log(user)

    req.session.user = LoginDto //Save user information in session

    return {access_Token:accessToken,session:req.session};
  }

}
