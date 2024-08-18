import { Injectable } from '@nestjs/common';
import { MotorcycleRepository } from '../repository/motorcycle.repository';
import { MotorcyclesDTO } from '../dto/motorcycle.dto';
import { Motorcycle } from '../entities/motorcycle.entity';

@Injectable()
export class ProductsService {
    constructor(
        private readonly motorcycleRepository: MotorcycleRepository,
    ) {}

    async create(createMotor: MotorcyclesDTO): Promise<Motorcycle>{
        try {
            const newLead = await this.motorcycleRepository.create(createMotor);
            if(newLead){
                return newLead;
            }else{
                throw new Error('Error save Motorcycle');
            }
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findAll(): Promise<Motorcycle[]> {
        try {
            const motors = await this.motorcycleRepository.findAll();
            return motors;
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findById(id: string): Promise<Motorcycle> {
        try {
            const motor = await this.motorcycleRepository.findById(id);
            return motor;
        } catch (error) {
            throw new Error(error?.message);
        }
    }

}
