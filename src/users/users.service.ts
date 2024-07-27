import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/UserModel';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto):Promise<User> {
    console.log(createUserDto)
    const createdUser = new this.userModel(createUserDto);
    
    return await createdUser.save();
  }

  async findAll(): Promise<any> {
    const result = await this.userModel.find().exec()
    return  result;
  }

  async findone(id: number): Promise<object | null> {
    const result = await this.userModel.findOne({ id });
    if(!result){
      throw new HttpException(`User with ID: ${id}  not found`,404);
    }
    return result;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
