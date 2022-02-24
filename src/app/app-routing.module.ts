import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'soma',
    loadChildren: () =>
      import('./paginas/soma/soma.module).then(
        (modulo) => modulo.ItemListarModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./paginas/users').then(
        (modulo) => modulo.ItemCadastrarEditarModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
