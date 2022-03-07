import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AccountService } from '../shared/account.service';

import Swal from 'sweetalert2';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.accountService.getAuthorizationToken();

    let request: HttpRequest<any> = req;

    if (token) {
      request = req.clone({
        headers: req.headers.set('Authorization', `${token}`),
      });
    }

    return next.handle(request).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`Ocorreu um erro: ${error.error.message}`);
    } else {
      const json = JSON.stringify(error.error);
      const msg = JSON.parse(json);
      Swal.fire({
        title: 'Erro!',
        text: msg.error,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    return throwError(() =>
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um erro, verifique o e-mail ou a senha!',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    );
  }
}
