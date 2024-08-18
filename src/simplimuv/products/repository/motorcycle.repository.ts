import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Motorcycle } from "../entities/motorcycle.entity";
import { MotorcyclesDTO } from "../dto/motorcycle.dto";
import { MapProducts } from "src/utils/mapProducts";

@Injectable()
export class MotorcycleRepository {
    constructor(
        @InjectRepository(Motorcycle)
        private motorcycleRepository: Repository<Motorcycle>,
      ) {}

    async create(newMotor: MotorcyclesDTO):Promise<Motorcycle>{
      try {
            const newReg = MapProducts.dtoToEntity(newMotor);
            console.log('newReg: ', newReg);
            const createMotor: Motorcycle = this.motorcycleRepository.create(newReg);
            const result = await this.motorcycleRepository.insert(createMotor);
            return result.raw;
      } catch (error) {
        console.log(error);
        throw new Error(error?.message);
      }
    }

    async findAll(): Promise<Motorcycle[]> {
        try {
          let leads = await this.motorcycleRepository.find();
    
          return leads;
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findById(id: string): Promise<Motorcycle> {
        try {
          return await this.motorcycleRepository.findOne({ where: { uuid: id } });
        } catch (error) {
            throw new Error(error?.message);
        }
    }

}