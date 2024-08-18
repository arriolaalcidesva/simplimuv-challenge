import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { MotorcycleRepository } from '../repository/motorcycle.repository';
import { MotorcycleMock } from '../mocks/motorcycle.mock';
import { Motorcycle } from '../entities/motorcycle.entity';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: MotorcycleRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService,
        {
          provide: MotorcycleRepository,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
          },
        },],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<MotorcycleRepository>(MotorcycleRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a Motor', async () => {
    const createMotorData: Motorcycle = new MotorcycleMock();
    const mockCreatedLead: Motorcycle = new MotorcycleMock();

    jest.spyOn(repository, 'create').mockResolvedValue(mockCreatedLead);

    const result = await service.create(createMotorData);
    expect(result).toEqual(mockCreatedLead);
  });

  it('should find all Motors', async () => {
    const mockMotors: Motorcycle[] = [new MotorcycleMock()];

    jest.spyOn(repository, 'findAll').mockResolvedValue(mockMotors);

    const result = await service.findAll();

    expect(result).toEqual(mockMotors);
  });

  it('should find a Motor by ID', async () => {
    const mockMotor: Motorcycle = new MotorcycleMock();
    const mockId = mockMotor.uuid;

    jest.spyOn(repository, 'findById').mockResolvedValue(mockMotor);

    const result = await service.findById(mockId);

    expect(result).toEqual(mockMotor);
  });

});
