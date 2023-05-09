import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent { /* implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private authenticacionService:AuthService, private ruta:Router) {
    this.formulario= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],     
      deviceInfo:this.formBuilder.group({
        deviceId: ["17867868768"],
        devideType: ["DEVICE_TYPE_ANDROID"],
        notificationToken:["67657575eececc34"]
        }) 
   })

  }

  ngOnInit(): void {
    
  }

  get Email(){
    return this.formulario.get('email');
  }

  get Password(){
    return this.formulario.get('password');
  }

  nviar(event:Event){
    event.preventDefault;
    this.authenticacionService.iniciarSesion(this.formulario.value).subscribe(data=>{
      console.log("Data:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }    */
  
}   

