import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { IsAuthenticatedGuard } from './auth/guards/is-Authenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    //guards
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard',
    // canActivate: [IsAuthenticatedGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
