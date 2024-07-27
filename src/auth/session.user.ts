// 

import { Session, SessionData } from 'express-session';
import { LoginDto } from './dto/login.dto';

declare module 'express-session' {
  interface SessionData {
    user?: LoginDto; // Assuming 'LoginDto' is your user model
  }
}