import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);

  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required, Validators.email]),
    password:new FormControl("",Validators.required)
  })
  funIngresar(){
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res)=>{
        console.log(res)
      },
      (error)=>{
        console.log(error)
      }
    )
    //alert("Ingresando....")
  }
  ;
}
