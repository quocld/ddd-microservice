import { Module } from "@nestjs/common";

import { HttpModule } from "@nestjs/axios";
import { HttpClientService } from './http-client.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 180000,
      proxy: false,
    }),
  ],
  providers: [HttpClientService],
  exports: [HttpClientService],
})
export class HttpClientServiceModule {}
