import { Injectable, computed, signal } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public  cartProductos=signal<Producto[]>([])
private  _productos=signal<Producto[]>([])
public subTotal = computed(() => this.cartProductos().reduce((prev: any, curr: Producto) => {
  return prev + curr.precio;
}, 0));
public totalItems = computed(() => this.cartProductos().length);
  constructor() { 
   
  }
  addNewProducto(producto:Producto){
    this.cartProductos.mutate((val) => {
      val.push(producto);
    });

  }
  

  deleteProducto(indice:number){

    this.cartProductos.mutate(val => {
      const product = val.splice(indice, 1);


  })
}

}
