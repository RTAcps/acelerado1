import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { HomeComponent } from '../home/home.component';

import { LoginComponent } from './login.component';
import { LoginResponse, LoginService } from './login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let router: Router;
  let template: HTMLElement;

  beforeEach(async () => {
    mockLoginService = jasmine.createSpyObj('mockLoginService', [
      'login',
      'token',
    ]);

    const routes = [
      {
        path: 'home',
        component: HomeComponent,
      },
    ];

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        AppModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        { provide: FormBuilder },
        { provide: LoginService, useValue: mockLoginService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onSubmit', () => {
    describe('When form is valid', () => {
      beforeEach(() => {
        const fakeLoginResponse: LoginResponse = { token: 'qwerty' };
        mockLoginService.login.and.returnValue(of(fakeLoginResponse));

        const email = 'email';
        const password = 'password';

        component.form.controls[email].setErrors(null);
        component.form.controls[password].setErrors(null);
      });

      it('should update login button message', () => {
        //Given
        component.loginButtonMessage = 'Entrar';
        //When
        component.onSubmit();
        //Then
        expect(component.loginButtonMessage).toEqual('Entrando...');
      });

      it('Should call LoginService.login', () => {
        //Given
        component.form.controls['email'].setValue('test@test.com');
        component.form.controls['password'].setValue('123456');
        //When
        component.onSubmit();
        //Then
        expect(mockLoginService.login).toHaveBeenCalledWith(
          'test@test.com',
          '123456'
        );
      });
    });
  });
});
