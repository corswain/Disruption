import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/landing/landing.module#LandingModule'
  },
  {
    path: 'sample',
    redirectTo: 'sample'
  },
  {
    path: 'errors',
    loadChildren: './main/errors/errors.module#ErrorsModule'
  },
  {
    path: '**',
    redirectTo: 'errors/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
