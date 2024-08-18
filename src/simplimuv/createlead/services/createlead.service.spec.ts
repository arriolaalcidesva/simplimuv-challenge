import { Test, TestingModule } from '@nestjs/testing';
import { CreateleadService } from './createlead.service';
import { CreateLeadRepository } from '../repository/create-lead.repository';
import { CreateLead } from '../entities/create-lead.entity';
import { CreateLeadResponseDTO } from '../dto/createlead.response.dto';
import { LeadEntityMock } from '../mocks/lead.entity.mock';

describe(CreateleadService.name, () => {
  let service: CreateleadService;
  let repository: CreateLeadRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateleadService,
        {
          provide: CreateLeadRepository,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CreateleadService>(CreateleadService);
    repository = module.get<CreateLeadRepository>(CreateLeadRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a lead', async () => {
    const createLeadData: CreateLead = new LeadEntityMock();
    const mockCreatedLead: CreateLead = createLeadData;

    jest.spyOn(repository, 'create').mockResolvedValue(mockCreatedLead);

    const result = await service.create(createLeadData);

    const expectedResponse: CreateLeadResponseDTO = {
      response: 'OK',
      msg: 'Lead Created',
      code: 200
    };
    expect(result).toEqual(expectedResponse);
  });

  it('should find all leads', async () => {
    const mockLeads: CreateLead[] = [new LeadEntityMock()];

    jest.spyOn(repository, 'findAll').mockResolvedValue(mockLeads);

    const result = await service.findAll();

    expect(result).toEqual(mockLeads);
  });

  it('should find a lead by ID', async () => {
    const mockLead: CreateLead = new LeadEntityMock();
    const mockId = mockLead.uuid;

    jest.spyOn(repository, 'findById').mockResolvedValue(mockLead);

    const result = await service.findById(mockId);

    expect(result).toEqual(mockLead);
  });

  it('should throw an error if createLeadRepository.create() fails', async () => {
    const createLeadData: CreateLead = new LeadEntityMock();
    jest.spyOn(repository, 'create').mockRejectedValue(new Error('Database error'));

    await expect(service.create(createLeadData)).rejects.toThrow('Database error');
  });

  it('should throw an error if createLeadRepository.findAll() fails', async () => {
    jest.spyOn(repository, 'findAll').mockRejectedValue(new Error('Database error'));

    await expect(service.findAll()).rejects.toThrow('Database error');
  });

  it('should throw an error if createLeadRepository.findById() fails', async () => {
    jest.spyOn(repository, 'findById').mockRejectedValue(new Error('Database error'));

    await expect(service.findById('mockId')).rejects.toThrow('Database error');
  });
});
