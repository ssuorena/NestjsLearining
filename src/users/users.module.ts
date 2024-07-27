import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from 'src/UserModel';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule } from '@nestjs/throttler';


@Module({
  imports:[MongooseModule.forFeature([{ name:User.name, schema: UserSchema }]),
  CacheModule.register(),
  ThrottlerModule.forRoot([
    {
    ttl:5*60*1000,
    limit:10
  },

]),

],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
