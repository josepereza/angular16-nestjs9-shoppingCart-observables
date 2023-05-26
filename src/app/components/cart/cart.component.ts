import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  totalCart:number=0
productos:Producto[]=[]
constructor(private cartService:CartService){
this.cartService.productos.subscribe(data=>{
console.log('mi carrito ',data)
this.productos=data
this.totalCart=this.productos.reduce((prev,ac)=>prev + ac.precio,0)
})
}
borrar(indice:number){
  this.cartService.deleteProducto(indice)

}
}
