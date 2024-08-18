import { Injectable } from '@nestjs/common';
import { CreateLeadRepository } from '../repository/create-lead.repository';
import { CreateLead } from '../entities/create-lead.entity';
import { CreateLeadResponseDTO } from '../dto/createlead.response.dto';

@Injectable()
export class CreateleadService {
    constructor(
        private readonly createLeadRepository: CreateLeadRepository,
      ) {}

    async create(createLead: CreateLead): Promise<CreateLeadResponseDTO>{
        try {
            const newLead = await this.createLeadRepository.create(createLead);
            if(newLead){
                const response: CreateLeadResponseDTO = {
                    response: 'OK',
                    msg: 'Lead Created',
                    code: 200
                };
                return response;
            }else{
                throw new Error('Error save Lead');
            }
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findAll(): Promise<CreateLead[]> {
        try {
            const leads = await this.createLeadRepository.findAll();
            return leads;
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findById(id: string): Promise<CreateLead> {
        try {
            const lead = await this.createLeadRepository.findById(id);
            return lead;
        } catch (error) {
            throw new Error(error?.message);
        }
    }
}
