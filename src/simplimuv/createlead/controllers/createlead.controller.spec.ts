import { Test, TestingModule } from '@nestjs/testing';
import { CreateleadController } from './createlead.controller';
import { CreateleadService } from '../services/createlead.service';
import { AuthGuard } from '../../../auth/guards/auth.guard';
import { CreateLeadDto } from '../dto/createlead.dto';
import { CreateLeadResponseDTO } from '../dto/createlead.response.dto';
import { CreateLead } from '../entities/create-lead.entity';
import { MockAuthGuard } from '../../../auth/mocks/mock-auth.guard';
import { CreateLeadRequestMock } from '../mocks/create-lead.request.mock';
import { LeadEntityMock } from '../mocks/lead.entity.mock';

describe(CreateleadController.name, () => {
  let controller: CreateleadController;
  let service: CreateleadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateleadController],
      providers: [
        {
          provide: CreateleadService,
          useValue: {
            create: jest.fn().mockResolvedValue({} as CreateLeadResponseDTO),
            findAll: jest.fn().mockResolvedValue([] as CreateLead[]),
            findById: jest.fn().mockResolvedValue({} as CreateLead),
          },
        },
      ],
    })
    .overrideGuard(AuthGuard)
    .useValue(new MockAuthGuard())
    .compile();

    controller = module.get<CreateleadController>(CreateleadController);
    service = module.get<CreateleadService>(CreateleadService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe(CreateleadController.prototype.createLead.name, () => {
    it(`Should call create on ${CreateleadService.prototype.create.name}`, async () => {
      const dto: CreateLeadDto = new CreateLeadRequestMock();
      const result: CreateLeadResponseDTO = new CreateLeadResponseDTO();
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.createLead(dto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe(CreateleadController.prototype.getFindAll.name, () => {
    it(`Should call findAll on ${CreateleadService.prototype.findAll.name}`, async () => {
      const result: CreateLead[] = [];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.getFindAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe(CreateleadController.prototype.getLeadById.name, () => {
    it(`Should call findById on ${CreateleadService.prototype.findById.name}`, async () => {
      const result: CreateLead = new LeadEntityMock();
      const id = result.uuid;
      jest.spyOn(service, 'findById').mockResolvedValue(result);

      expect(await controller.getLeadById(id)).toBe(result);
      expect(service.findById).toHaveBeenCalledWith(id);
    });
  });
});
