import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../../environments/envitonments';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError, of, map, tap, throwError } from 'rxjs';

import { AuthStatus, User, LoginResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environment.baseUrl;

  private http = inject(HttpClient);

  private _currentUser = signal<User|null>(null);

  //Verifica el Estado de Autenticacion
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //!Al mundo Exterior
  public currentUser = computed(()=>this._currentUser());
  public authStatus = computed(()=>this._authStatus());

  constructor() { }

  login(email:string, password:string):Observable<boolean>{
    const url = `${this.baseUrl}/api/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        tap(({ sessionToken, email }) => {
          this._currentUser.set({ email } as User);  // Ajusta según la estructura de User
          this._authStatus.set(AuthStatus.authenticated);
          localStorage.setItem('token', sessionToken);
          console.log({ email, token: sessionToken });
        }),
        map(() => true),

        //Todo: Error
        catchError(err => throwError(()=>err.error.message))
      );
  }


  checkAuthStatus():void{
  }
}
