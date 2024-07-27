import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/UserModel';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { JwtService , JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';




@Module({
  imports:[MongooseModule.forFeature([{ name:User.name, schema: UserSchema }]),
  UsersModule,
  JwtModule.register({
    secret:'secret2',
    signOptions:{expiresIn:'1d'}
  }),],
  controllers: [AuthController],
  providers: [AuthService,UsersService,JwtStrategy],
})
export class AuthModule {}
