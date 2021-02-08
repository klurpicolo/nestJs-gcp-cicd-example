import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMain(): string {
    return 'Hello World! this is main features';
  }
}
