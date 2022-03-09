import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  loginErrorMessage: string | undefined;
  loginButtonMessage = 'Entrar';

  hide = true;

  formLogin: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  onSubmit(): void {
    if (!!this.form.invalid) {
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um erro, verifique o e-mail ou a senha!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });

      return;
    }

    this.loginButtonMessage = 'Entrando';

    this.loginService
      .login(this.form.value.email, this.form.value.password)
      .subscribe({
        next: (val) => {
          console.log('val', val);

          this.loginService.storageToken(val.token);

          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log('err', err);

          this.loginErrorMessage = 'Erro ao realizar o login, tente novamente.';

          this.loginButtonMessage = 'Entrar';
        },
      });
  }
}
