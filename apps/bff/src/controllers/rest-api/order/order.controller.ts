import { HttpService } from '@nestjs/axios';
import { Controller, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { HttpClientService } from 'apps/bff/src/services/http-client/http-client.service';
import { catchError, map } from 'rxjs/operators';

@Controller('order')
export class OrderControllerController {
  constructor(
    private httpServiceClient: HttpClientService,
    private httpService: HttpService,
  ) {}

  @Get('random-create')
  random(@Req() req: Request) {
    const rid = req.headers["x-requestid"] as string;
    const reqParams = {
      rid: rid,
    };
    const headerRequest = {}
    headerRequest["x-requestid"] = rid;
    const axiosConfig = { headers: headerRequest };
    return this.httpServiceClient.get$(reqParams, 'http://localhost:4001/orders',axiosConfig).pipe(
      map((apiRes) => apiRes),
      catchError((e: Error) => {
        throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
      }),
    );
  }

  @Get('all')
  getAll(@Req() req: Request) {
    const axiosConfig = req.headers;
    return this.httpService.get('http://localhost:4001/orders');
  }

  @Get('hello')
  hello() {
    return 'Hello bff';
  }
}
