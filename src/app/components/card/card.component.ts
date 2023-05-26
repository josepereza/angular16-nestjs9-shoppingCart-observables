import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() producto!:Producto;

constructor(private cartService:CartService){

}
comprar(producto:Producto){
  this.cartService.addNewProducto(producto)
  


}
}
