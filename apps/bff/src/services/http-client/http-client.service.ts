import { Injectable } from '@nestjs/common';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

export type Rid = number | string;
export interface RequestParams {
  rid?: Rid;
}
export interface ServiceParams {
  reqParams: RequestParams;
}

@Injectable()
export class HttpClientService {
  public constructor(private readonly http: HttpService) {}

  public get$<T>(
    reqParams: RequestParams,
    path: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    const startTime = Date.now();
    return this.http.get<T>(path, config).pipe(
      tap(() =>
        console.log(`Request sucess: time = ${Date.now() - startTime} `),
      ),
      catchError((e) => {
        console.log(`Request sucess: time = ${Date.now() - startTime} `);
        return throwError(() => e);
      }),
    );
  }

  public post$<T>(
    reqParams: RequestParams,
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    const startTime = Date.now();
    return this.http.post<T>(path, data, config).pipe(
      tap(() =>
        console.log(`Request sucess: time = ${Date.now() - startTime} `),
      ),
      catchError((e) => {
        console.log(`Request sucess: time = ${Date.now() - startTime} `);
        return throwError(() => e);
      }),
    );
  }

  public delete$<T>(
    reqParams: RequestParams,
    path: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    const startTime = Date.now();

    return this.http.delete<T>(path, config).pipe(
      tap(() =>
        console.log(`Request sucess: time = ${Date.now() - startTime} `),
      ),
      catchError((e) => {
        console.log(`Request sucess: time = ${Date.now() - startTime} `);
        return throwError(() => e);
      }),
    );
  }
}
