import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})

export class LayoutPageComponent {
  private authService = inject(AuthService);

  // Usando un getter para obtener el usuario actual
  get user() {
    return this.authService.currentUser();
  }

  public sidebarItems = [
    { name: 'Inicio', url: 'inicio' },
    { name: 'facultades', url: 'facultades' },
    { name: 'asistencia', url: 'asistencia' }
  ];

}
