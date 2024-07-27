import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAuthsession(@Session() session: Record<string,any>){
    session.visit = session.visit ? session.visit + 1 : 1;
    return session

  }
    
}
