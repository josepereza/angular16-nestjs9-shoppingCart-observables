import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private  cartProductos: Producto[]=[]
private _productos:BehaviorSubject<Producto[]>
  constructor() { 
    this._productos=new BehaviorSubject<Producto[]>([])
  }
  addNewProducto(producto:Producto){
    this.cartProductos.push(producto)
    this._productos.next(this.cartProductos)

  }
  get productos(){
    return this._productos.asObservable();
  }

  deleteProducto(indice:number){
this.cartProductos.splice(indice,1)
this._productos.next(this.cartProductos)

  }
  

}
