import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from '../services/products.service';
import { Motorcycle } from '../entities/motorcycle.entity';
import { AuthGuard } from '../../../auth/guards/auth.guard';
import { MockAuthGuard } from '../../../auth/mocks/mock-auth.guard';
import { MotorcycleMock } from '../mocks/motorcycle.mock';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            create: jest.fn().mockResolvedValue({} as Motorcycle),
            findAll: jest.fn().mockResolvedValue([] as Motorcycle[]),
            findById: jest.fn().mockResolvedValue({} as Motorcycle),
          },
        },
      ],
    })
    .overrideGuard(AuthGuard)
    .useValue(new MockAuthGuard())
    .compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe(ProductsController.prototype.createProduct.name, () => {
    it(`Should call create on ${ProductsService.prototype.create.name}`, async () => {
      const dto: Motorcycle = new MotorcycleMock();
      const result = new MotorcycleMock();
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.createProduct(dto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it(`Should call findAll on ${ProductsService.prototype.findAll.name}`, async () => {
      const result: Motorcycle[] = [];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.getFindAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });

    it(`Should call findById on ${ProductsService.prototype.findById.name}`, async () => {
      const result: Motorcycle = new MotorcycleMock();
      const id = result.uuid;
      jest.spyOn(service, 'findById').mockResolvedValue(result);

      expect(await controller.getProductById(id)).toBe(result);
      expect(service.findById).toHaveBeenCalledWith(id);
    });

  });
});
