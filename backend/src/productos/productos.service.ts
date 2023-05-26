import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}


  create(createProductoDto: CreateProductoDto) {
    return this.productosRepository.save(createProductoDto);
  }

  findAll() {
    return this.productosRepository.find();
  }

  findOne(id: number) {
    return this.productosRepository.findOneBy({ id });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.productosRepository.save(
      this.productosRepository.create({
        id,
        ...updateProductoDto,
      }),
    );
  }

  remove(id: number) {
    return this.productosRepository.delete(id);
  }
}
