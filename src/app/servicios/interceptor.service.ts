import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService { /*implements HttpInterceptor { 

  constructor(private autenticacionServicio:AuthService) { } 

   intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
   
     var currentUser=this.autenticacionServicio.usuarioAutenticado;
     if(currentUser && currentUser.accessToken){
      //req=req.clone({
      //  setHeaders:{
      //    Authorization: `Bearer ${currentUser.accessToken}`
      //  }
     // })
     }

     console.log("interceptor esta funcionando" + JSON.stringify(currentUser));
     
    return next.handle(req);  
  } */
}
