import { IsString, IsNumber } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre: string;
  @IsString()
  descripcion: string;
  @IsString()
  imagen: string;

  @IsNumber()
  precio: number;
}
