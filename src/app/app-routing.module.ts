import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './paginas/authentication/authentication.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { SomaComponent } from './paginas/soma/soma.component';
import { UsersComponent } from './paginas/users/users.component';
<<<<<<< HEAD
import { AuthGuard } from './shared/auth.guard';
=======
>>>>>>> ef3b8ed (Resolve as rotas)

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: HomeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'soma', component: SomaComponent },
      { path: 'users', component: UsersComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
=======
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'soma', component: SomaComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: AuthenticationComponent },
>>>>>>> ef3b8ed (Resolve as rotas)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
