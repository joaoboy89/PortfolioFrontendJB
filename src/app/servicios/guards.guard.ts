import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard {/* implements CanActivate {
  
  constructor(private autenticacionService:AuthService, private rutas:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser=this.autenticacionService.usuarioAutenticado;
      if (currentUser && currentUser.accessToken){
        return true;
      }
      else {
        this.rutas.navigate(['/login']);
        return false;
      };
     
  }*/
  
}
