import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DemoController } from './demo.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
