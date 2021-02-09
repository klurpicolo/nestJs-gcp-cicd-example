import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('main')
  getMain(): string {
    return this.appService.getMain();
  }

  @Get('foo')
  getFoo(): string {
    return 'Foo feature';
  }
}
