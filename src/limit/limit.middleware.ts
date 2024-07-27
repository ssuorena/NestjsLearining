import { Injectable, NestMiddleware } from '@nestjs/common';
import { rateLimit } from 'express-rate-limit';
@Injectable()
export class LimitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    rateLimit({
      windowMs: 10 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })(req, res, next);
  }
}
