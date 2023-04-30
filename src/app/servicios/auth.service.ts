import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlapi = 'https://jbproyectbe.onrender.com/login';

  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient, private route: Router) { 
    console.log("el servicio de autenticacion esta funcionando");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
   }

  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.urlapi, credenciales).pipe(map(data => { 
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      
      return data;}));
  }


  get usuarioAutenticado(){

     return this.currentUserSubject.value;
  }



  /* login(email:string, password: string){

      this.http.post(this.api + '/authenticate', {email: email, password: password}).subscribe((resp:any) => {this.route.navigate(['inicio']);
        localStorage.setItem('auth_token', resp.token);
      
      })

  };
  

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);

  }*/
}