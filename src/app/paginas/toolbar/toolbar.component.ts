import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  logout(): void {
    this.loginService.clearToken();
    this.router.navigate(['/login']);
  }
}
