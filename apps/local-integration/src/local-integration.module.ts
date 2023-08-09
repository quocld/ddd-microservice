import { Module } from '@nestjs/common';
import { LocalIntegrationController } from './local-integration.controller';
import { LocalIntegrationService } from './local-integration.service';

@Module({
  imports: [],
  controllers: [LocalIntegrationController],
  providers: [LocalIntegrationService],
})
export class LocalIntegrationModule {}
