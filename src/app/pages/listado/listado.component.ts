import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
productos:Producto[]=[];
  constructor(private productosService:ProductosService){
this.productosService.getProductos().subscribe(data=>{
  this.productos=data
})
   }


}
