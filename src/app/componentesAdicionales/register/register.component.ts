import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registroDeUsuario: FormGroup;

  constructor(private http: HttpClient, private fb:FormBuilder) {
    this.registroDeUsuario = this.fb.group(
      {
        usuario: [''],
        password: [''],
        email: ['']
      }
    );

  }
  
    onSubmit(){
      if (this.registroDeUsuario.valid){
        this.http.post('https://jbproyectbe.onrender.com/register', this.registroDeUsuario.value).subscribe(
          data => console.log('Registro exitoso', data),
        (error: any) => console.error('Error al registrar', error.error));
  
      }
      else{
        console.log ("debe poner valores validos en el registro");
      }
      
    }

   
}
