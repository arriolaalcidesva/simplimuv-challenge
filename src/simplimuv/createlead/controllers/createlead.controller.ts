import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateleadService } from '../services/createlead.service';
import { CreateLeadDto } from '../dto/createlead.dto';
import { CreateLeadResponseDTO } from '../dto/createlead.response.dto';
import { CreateLead } from '../entities/create-lead.entity';
import { AuthGuard } from '../../../auth/guards/auth.guard';
import { PublicAccess } from '../../../auth/decorators/public.decorator';

@ApiTags('createlead')
@Controller('createlead')
@UseGuards(AuthGuard)
export class CreateleadController {
    constructor(private readonly createleadService: CreateleadService) {}

    @Post()
    async createLead(@Body() createLeadDTO: CreateLeadDto): Promise<CreateLeadResponseDTO> {
        return await this.createleadService.create(createLeadDTO);
    }

    @PublicAccess()
    @Get()
    async getFindAll(): Promise<CreateLead[]> {
        return await this.createleadService.findAll();
    }

    @Get(':id')
    async getLeadById(@Param('id') id: string): Promise<CreateLead> {
        return await this.createleadService.findById(id);
    }
}
