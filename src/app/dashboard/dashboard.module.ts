import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FacultadesPageComponent } from './pages/facultades-page/facultades-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    DashboardPageComponent,
    FacultadesPageComponent // Asegúrate de que esté descomentado y añadido aquí
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule // Añade MatIconModule aquí
  ],
  exports: [
    LayoutPageComponent,
    DashboardPageComponent
    // No es necesario exportar MatIconModule a menos que otros módulos necesiten importarlo desde aquí
  ]
})
export class DashboardModule { }
