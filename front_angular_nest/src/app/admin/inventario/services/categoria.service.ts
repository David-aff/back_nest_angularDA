
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Categoria {
  id?: number;
  nombre: string;
  detalle: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = environment.urlServidor;
  private http = inject(HttpClient);

  // Listar categorías
  funLista(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/categoria`);
  }

  // Guardar categoría
  funGuardar(registro: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      `${this.baseUrl}/categoria`,
      registro
    );
  }
  funModificar(id:number,registro:any){
    return this.http.patch(`${this.baseUrl}/categoria/${id}`,registro);

  }

  funEliminar(id:number){
    return this.http.delete(`${this.baseUrl}/categoria/${id}`);

  }

  constructor() { }
}
