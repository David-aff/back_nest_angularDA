
import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

interface Categoria {
  id?: number;
  nombre: string;
  detalle?: string;
}

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    ReactiveFormsModule
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {

  private categoriaService = inject(CategoriaService);

  categorias: Categoria[] = [];

  dialog_visible: boolean = false;

  categoriaForm = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    detalle: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  ngOnInit(): void {
    this.getCategorias();
  }

  // Listar categorías
  getCategorias(): void {
    this.categoriaService.funLista().subscribe({
      next: (res: Categoria[]) => {
        this.categorias = res;
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
      }
    });
  }

  // Mostrar formulario
  mostrarDialog(): void {
    this.categoriaForm.reset();
    this.dialog_visible = true;
  }

  // Guardar categoría
  guardarCategoria(): void {

    if (this.categoriaForm.invalid) {
      this.categoriaForm.markAllAsTouched();
      return;
    }

    const registro = {
      nombre: this.categoriaForm.controls.nombre.value.trim(),
      detalle: this.categoriaForm.controls.detalle.value.trim()
    };

    if (!registro.nombre || !registro.detalle) {
      return;
    }

    this.categoriaService.funGuardar(registro).subscribe({
      next: (res) => {
        console.log('Categoría guardada:', res);

        this.dialog_visible = false;
        this.categoriaForm.reset();

        this.getCategorias();
      },
      error: (error) => {
        console.error('Error al guardar categoría:', error);
      }
    });
  }
}
