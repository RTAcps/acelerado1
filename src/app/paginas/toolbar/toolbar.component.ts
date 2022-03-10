import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  mostrarMenu: boolean = false;

  logout(): void {
    this.loginService.clearToken();
    this.router.navigate(['/login']);

    this.mostrarMenu = false;
  }

  ngOnInit() {
    this.loginService.mostrarMenu.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
}
