import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { HttpClientService } from 'apps/bff/src/services/http-client/http-client.service';
import { catchError, map } from "rxjs/operators";

@Controller('order')
export class OrderControllerController {
  constructor(private httpService: HttpClientService) {}

  @Get('random-create')
  random() {
    return this.httpService.get$({},'http://localhost:4001/orders').pipe(
      map((apiRes)=>apiRes),
      catchError((e: Error) => {
        throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
      }),
    )
  }

}
