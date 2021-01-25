import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemStatusService } from './item-status/item-status.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ItemStatusService],
})
export class AppModule {}
