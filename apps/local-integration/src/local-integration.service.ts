import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalIntegrationService {
  getHello(): string {
    return 'Hello World!';
  }
}
