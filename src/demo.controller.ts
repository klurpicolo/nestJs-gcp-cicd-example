import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDemo(): string {
    return 'This is demo string';
  }

}
