import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  email: string = "";
  password: string = "";
  errorMessage: String = "";

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      success => {
        this.router.navigate(['/portfolio']);
        console.log("te logueaste correctamente");
      },
      error => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }
}
