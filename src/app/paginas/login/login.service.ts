import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//const apiUrlUsuario = environment.apiUrl + 'Usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  mostrarMenu = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.api}/api/login`, {
      email,
      password,
    });
  }

  storageToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');

    if (!!token) {
      this.mostrarMenu.emit(true);

      return token;
    } else {
      this.mostrarMenu.emit(false);

      this.router.navigate(['/login']);

      return;
    }
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }
}

export interface LoginResponse {
  token: string;
}
