import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/envitonments'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly apiUrl = `${environment.baseUrl}/api/facultades`; // Asegúrate de que esta es la ruta correcta


  constructor(private http: HttpClient) { }

  getFacultades(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        catchError(err => throwError(() => new Error(err.message)))
      );
  }

}
