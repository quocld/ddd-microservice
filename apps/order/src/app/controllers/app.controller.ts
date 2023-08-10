import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  hello() {
    return "Hello GSV"
  }

  @Get('/orders')
  getOrders() {
    return "Orders heare:/...."
  }
}
