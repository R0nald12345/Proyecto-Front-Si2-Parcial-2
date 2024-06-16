import { DashboardService } from './../../services/dashboard.Service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facultades-page',
  templateUrl: './facultades-page.component.html',
  styleUrl: './facultades-page.component.css'
})
export class FacultadesPageComponent {

  facultades: any[] = [];

  constructor(private DashboardService: DashboardService) { }

  ngOnInit(): void {
    this.DashboardService.getFacultades().subscribe(data => {
      this.facultades = data;
    });
  }
}
