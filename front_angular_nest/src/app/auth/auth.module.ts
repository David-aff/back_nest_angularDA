import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductoComponent } from './inventario/components/producto/producto.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProductoComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
