import { Module } from '@nestjs/common';
import { RestControllerModule } from './controllers/rest.controller.module';

@Module({
  imports: [RestControllerModule],
  controllers: [],
  providers: [],
})
export class BffModule {}
