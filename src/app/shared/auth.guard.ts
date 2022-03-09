import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../paginas/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.loginService.isLoggedIn;

    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

    /*const token = this.accountService.isUserLoggedIn();
    if (token) {
      return false;
    } else {
      this.router.navigate(['login']);
      return true;
    }*/
  }
}
