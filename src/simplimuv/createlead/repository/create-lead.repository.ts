import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLead } from "../entities/create-lead.entity";
import { Repository } from "typeorm";

@Injectable()
export class CreateLeadRepository {
    constructor(
        @InjectRepository(CreateLead)
        private createLeadRepository: Repository<CreateLead>,
      ) {}

    async create(newLead: CreateLead): Promise<CreateLead> {
        try {
            const createLead: CreateLead = this.createLeadRepository.create(newLead);
            return await this.createLeadRepository.save(createLead);
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findAll(): Promise<CreateLead[]> {
        try {
          let leads = await this.createLeadRepository.find();
    
          return leads;
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findById(id: string): Promise<CreateLead> {
        try {
          return await this.createLeadRepository.findOne({ where: { uuid: id } });
        } catch (error) {
            throw new Error(error?.message);
        }
    }

}