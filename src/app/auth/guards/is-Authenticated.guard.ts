import { TmplAstBoundDeferredTrigger } from '@angular/compiler';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';


export const IsAuthenticatedGuard: CanActivateFn= (route,state) =>{

  // const authService = inject(AuthService);
  // const router = inject(Router);

  // if(authService.authStatus() === AuthStatus.authenticated){
  //   return true;
  // }
  // // // const url = state.url;


  // router.navigateByUrl('/auth/login');
  return true;

  // console.log('isAutenticadoGuard');
  // console.log({route,state});
  // return true;

}
