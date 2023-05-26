import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
   
  constructor(private http:HttpClient) { }


  getProductos():Observable<Producto[]>{
return this.http.get<Producto[]>('http://localhost:3000/productos')
  }
}
