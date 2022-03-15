import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  MatCommonModule,
  MatNativeDateModule,
  MatRippleModule,
} from '@angular/material/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomaComponent } from './paginas/soma/soma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './paginas/home/home.component';
import { UsersComponent } from './paginas/users/users.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from './paginas/toolbar/toolbar.component';
import { UserService } from './paginas/users/user.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './paginas/login/login.component';
import { AuthenticationComponent } from './paginas/authentication/authentication.component';
import { httpInterceptorProviders } from './shared';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SomaComponent,
        HomeComponent,
        LoginComponent,
        ToolbarComponent,
        UsersComponent,
        AuthenticationComponent,
      ],
      imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCommonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatToolbarModule,
        HttpClientModule,
        MatNativeDateModule,
        FlexLayoutModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule,
        RouterModule,
      ],
      providers: [UserService, httpInterceptorProviders],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'projeto1 app is running!'
    );
  });
});
