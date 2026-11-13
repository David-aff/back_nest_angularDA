import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './componets/producto/producto.component';
import { CategoriaComponent } from './componets/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    CategoriaComponent,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class InventarioModule { }
