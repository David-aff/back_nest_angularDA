import { Component } from '@angular/core';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrl: './producto.component.scss'
})
export class ProductoComponent {

    products: any[] = [
        {
            id: 1,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 2,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 3,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 4,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 5,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 6,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 7,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 8,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 9,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 10,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 11,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 12,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 13,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 14,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        },
        {
            id: 15,
            nombre: 'Teclado',
            imagen: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=80',
            precio: 394.96,
            categoria_id: 5,
            stock: 12
        }
    ];

    cols: any[] = [
        { field: 'id', header: 'Id' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'imagen', header: 'Imagen' },
        { field: 'precio', header: 'Precio' },
        { field: 'categoria_id', header: 'Categoria' },
        { field: 'stock', header: 'Stock' }
    ];

    openNew() {
    }

    editProduct(product: any) {
    }

    deleteProduct(product: any) {
    }

}