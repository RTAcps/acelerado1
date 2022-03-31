import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HomeComponent } from '../home/home.component';

import { LoginComponent } from './login.component';
import { LoginResponse, LoginService } from './login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockRouter: jasmine.SpyObj<Router>;
  //let router: Router;
  let template: HTMLElement;

  beforeEach(async () => {
    mockLoginService = jasmine.createSpyObj('mockLoginService', [
      'login',
      'storageToken',
      'token',
    ]);

    mockRouter = jasmine.createSpyObj('mockRouter', ['navigate', 'home']);

    const routes = [
      {
        path: 'home',
        component: HomeComponent,
      },
    ];

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes),
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRippleModule,
      ],
      providers: [
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter },
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
        const fakeLoginResponse: LoginResponse = { token: 'zxcvbn' };
        mockLoginService.login.and.returnValue(of(fakeLoginResponse));

        component.form.controls['email'].setErrors(null);
        component.form.controls['password'].setErrors(null);
      });

      describe('Given login is sucessfull', () => {
        it('should update login button message', () => {
          //Given
          component.loginButtonMessage = 'Entrar';
          //When
          component.onSubmit();
          //Then
          expect(component.loginButtonMessage).toEqual('Entrando...');
        });

        it('Should call LoginService.login with email and password from form', () => {
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

        it('Should call LoginService.storageToken', () => {
          //Given
          //When
          component.onSubmit();
          //Then
          expect(mockLoginService.storageToken).toHaveBeenCalledWith('zxcvbn');
        });

        it('Should navigate to home', () => {
          //Given

          //When
          component.onSubmit();
          //Then
          expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
        });
      });
    });

    describe('When form is invalid', () => {
      it('should not update login button message', () => {
        //Given
        component.loginButtonMessage = '';
        //When
        component.onSubmit();
        //Then
        expect(component.loginButtonMessage).not.toEqual('Entrando...');
      });
    });
  });
});
