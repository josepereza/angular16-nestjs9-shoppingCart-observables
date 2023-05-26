import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 
constructor(public cartService:CartService){

}

borrar(indice:number){
  this.cartService.deleteProducto(indice)

}
}
