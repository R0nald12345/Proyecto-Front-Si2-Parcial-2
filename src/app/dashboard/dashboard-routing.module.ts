import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { FacultadesPageComponent } from './pages/facultades-page/facultades-page.component';
import { AsistenciaPageComponent } from './pages/asistencia-page/asistencia-page.component';
import {  MatIconModule } from '@angular/material/icon';


const routes:Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'inicio', component: InicioPageComponent},
      {path: 'facultades', component: FacultadesPageComponent},
      {path: 'asistencia', component: AsistenciaPageComponent},
      {path: '**', redirectTo: 'inicio'}, //Tomar en cuentaa Quizas haya Error..........................
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class DashboardRoutingModule { }
