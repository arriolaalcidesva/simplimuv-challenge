import { Module } from '@nestjs/common';
import { ProductsService } from './products/services/products.service';
import { ProductsController } from './products/controllers/products.controller';
import { CreateleadService } from './createlead/services/createlead.service';
import { CreateleadController } from './createlead/controllers/createlead.controller';
import { CreateLeadRepository } from './createlead/repository/create-lead.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateLead } from './createlead/entities/create-lead.entity';
import { MotorcycleRepository } from './products/repository/motorcycle.repository';
import { Motorcycle } from './products/entities/motorcycle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreateLead, Motorcycle])],
  providers: [ProductsService, CreateleadService, CreateLeadRepository, MotorcycleRepository],
  controllers: [ProductsController, CreateleadController]
})
export class SimplimuvModule {}
