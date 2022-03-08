import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login = {
    email: '',
    password: '',
  };

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required]);

  hide = true;

  formLogin: any = FormGroup;

  constructor(private accountService: AccountService, private router: Router) {}

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);

      console.log(result);

<<<<<<< HEAD
      this.router.navigate(['']);
=======
      this.router.navigate(['/home']);
>>>>>>> ef3b8ed (Resolve as rotas)
    } catch (error) {
      console.error(error);
    }
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'E-mail obrigatório!';
    }
    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Senha obrigatória!';
    }
    return this.password.hasError('senha') ? 'Senha inválida' : '';
  }
}
