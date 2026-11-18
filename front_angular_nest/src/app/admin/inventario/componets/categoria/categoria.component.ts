
import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import Swal from 'sweetalert2';

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
  categoria_id: number = -1;

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

  mostrarDialog(): void {
    this.categoria_id = -1;
    this.categoriaForm.reset();
    this.dialog_visible = true;
  }

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

    if (this.categoria_id > 0) {

      this.categoriaService.funModificar(
        this.categoria_id,
        registro
      ).subscribe({

        next: (res: any) => {

          this.dialog_visible = false;
          this.categoriaForm.reset();
          this.categoria_id = -1;

          this.alerta(
            'ACTUALIZACIÓN',
            'La categoría se modificó con éxito.',
            'success'
          );

          this.getCategorias();

        },

        error: (error: any) => {

          this.alerta(
            'ERROR AL ACTUALIZAR',
            'Verifica los datos.',
            'error'
          );

          console.error('Error al modificar categoría:', error);

        }

      });

    } else {

      this.categoriaService.funGuardar(registro).subscribe({

        next: (res: any) => {

          this.dialog_visible = false;
          this.categoriaForm.reset();

          this.alerta(
            'REGISTRADO',
            'La categoría se creó con éxito.',
            'success'
          );

          this.getCategorias();

        },

        error: (error: any) => {

          this.alerta(
            'ERROR AL REGISTRAR',
            'Verifica los datos.',
            'error'
          );

          console.error('Error al guardar categoría:', error);

        }

      });

    }

  }

  editarCategoria(categoria: Categoria): void {

    this.dialog_visible = true;
    this.categoria_id = categoria.id ?? -1;

    this.categoriaForm.setValue({
      nombre: categoria.nombre ?? '',
      detalle: categoria.detalle ?? ''
    });

  }

  eliminarCategoria(cat: Categoria): void {

    if (cat.id == null) {
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Una vez eliminada no se podrá recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {

        this.categoriaService.funEliminar(cat.id!).subscribe({

          next: (res: any) => {

            this.alerta(
              '¡ELIMINADO!',
              'Categoría eliminada correctamente.',
              'success'
            );

            this.getCategorias();
            this.categoria_id = -1;

          },

          error: (error: any) => {

            this.alerta(
              '¡ERROR!',
              'Error al intentar eliminar la categoría.',
              'error'
            );

            console.error('Error al eliminar categoría:', error);

          }

        });

      }

    });

  }

  alerta(
    title: string,
    text: string,
    icon: 'success' | 'error' | 'info' | 'question'
  ): void {

    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });

  }

}
