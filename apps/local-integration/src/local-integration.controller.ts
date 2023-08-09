import { Controller, Get } from '@nestjs/common';
import { LocalIntegrationService } from './local-integration.service';

@Controller()
export class LocalIntegrationController {
  constructor(private readonly localIntegrationService: LocalIntegrationService) {}

  @Get()
  getHello(): string {
    return this.localIntegrationService.getHello();
  }
}
