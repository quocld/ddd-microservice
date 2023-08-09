import { Test, TestingModule } from '@nestjs/testing';
import { LocalIntegrationController } from './local-integration.controller';
import { LocalIntegrationService } from './local-integration.service';

describe('LocalIntegrationController', () => {
  let localIntegrationController: LocalIntegrationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocalIntegrationController],
      providers: [LocalIntegrationService],
    }).compile();

    localIntegrationController = app.get<LocalIntegrationController>(LocalIntegrationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(localIntegrationController.getHello()).toBe('Hello World!');
    });
  });
});
