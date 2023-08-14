import { Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka, Payload } from '@nestjs/microservices';
import { toArray } from 'rxjs';
@Controller('order-kafka')
export class OrderController implements OnModuleInit {
  constructor(
    @Inject('SERVER')
    protected readonly serverClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.serverClient.subscribeToResponseOf('count');
    await this.serverClient.connect();
  }

  @Get()
  hello() {
    return 'hello';
  }

  @Post('billing')
  billingOrder(@Payload() data: {order_id: string}) {
    return this.serverClient
      .send<string>('count', { order_id: String(data.order_id) })
      .pipe(toArray());
  }
}
