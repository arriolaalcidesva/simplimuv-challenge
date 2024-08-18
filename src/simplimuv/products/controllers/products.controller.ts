import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Motorcycle } from '../entities/motorcycle.entity';
import { PublicAccess } from '../../../auth/decorators/public.decorator';
import { AuthGuard } from '../../../auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { MotorcyclesDTO } from '../dto/motorcycle.dto';

@ApiTags('products')
@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
    async createProduct(@Body() createMotor: MotorcyclesDTO): Promise<Motorcycle> {
        return await this.productService.create(createMotor);
    }

    @PublicAccess()
    @Get()
    async getFindAll(): Promise<Motorcycle[]> {
        return await this.productService.findAll();
    }

    @Get(':id')
    async getProductById(@Param('id') id: string): Promise<Motorcycle> {
        return await this.productService.findById(id);
    }
}
