import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/UserModel';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Roles } from 'src/authorization/roles.decorator';
import { Role } from 'src/authorization/role.enum';
import { RolesGuard } from 'src/authorization/role.guard';



@Controller('users')
@ApiTags("Users")
export class UsersController {
  constructor(private readonly usersService: UsersService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

  @Get(':id')
  //@Roles(Role.ADMIN) // attaching metadata
  @Roles(Role.USER,Role.ADMIN) // attaching metadata
  @UseGuards(JwtAuthGuard,RolesGuard)
  @ApiHeader({
    name:"Authorization",
    description: "Send Authorization Token"
  })
  @ApiBearerAuth()
  @ApiResponse({
    status:200,description:"Data send properly",type:CreateUserDto
  })
  @ApiParam({
    name:"id",
    description:"ID of The user"
  })
  @ApiOperation({ summary: 'This API retun user with certain id' })
  async find(@Param('id') id: number) {
    return await this.usersService.findone(id);
  }

  @Post()
  //@UseGuards(JwtStrategy)
  @ApiOperation({ summary: 'This API Create user' })
  @ApiBody({
    type:CreateUserDto
  })
  async createUser(@Body() createUserDto: CreateUserDto):Promise<User> {
    return await this.usersService.create(createUserDto);
  }
  
  // now in milliseconds (1 minute === 60000)
  @Get() 
  @Roles(Role.ADMIN) // attaching metadata
  @UseGuards(ThrottlerGuard)
  @UseGuards(JwtAuthGuard,RolesGuard)
  @ApiHeader({
    name:"Authorization",
    description: "Send Authorization Token"
  })
  @ApiResponse({
    status:200,description:"Data send properly",type:CreateUserDto
  })
  @ApiBearerAuth()
  @ApiOperation({ summary: 'This API retun all users ' })
  async simpleGet() {
    // Check if c has a value
    const allUsers = await this.cacheManager.get('users')
    console.log(allUsers)
    if (allUsers) {
      return  allUsers
    }
    else{
      const allUsers = await this.usersService.findAll();
      await this.cacheManager.set('users', allUsers,100000)
      return  allUsers



    }
  
  }



  @Delete(':id')
  @ApiOperation({ summary: 'This API remove user with certain id' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
