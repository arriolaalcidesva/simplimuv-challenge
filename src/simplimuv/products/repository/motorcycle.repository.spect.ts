import { Repository } from "typeorm";
import { MotorcycleRepository } from "./motorcycle.repository";
import { Test, TestingModule } from "@nestjs/testing";
import { Motorcycle } from "../entities/motorcycle.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { MotorcycleMock } from "../mocks/motorcycle.mock";

describe(MotorcycleRepository.name, () => {
    let repository: MotorcycleRepository;
    let mockMotorcycleRepository: Repository<Motorcycle>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [
            MotorcycleRepository,
            {
              provide: getRepositoryToken(Motorcycle),
              useClass: Repository,
            },
          ],
        }).compile();
    
        repository = await module.resolve<MotorcycleRepository>(MotorcycleRepository);
        mockMotorcycleRepository = await module.resolve<Repository<Motorcycle>>(getRepositoryToken(Motorcycle));
    });

    describe(MotorcycleRepository.name, () => {
        it('should be defined', () => {
          expect(repository).toBeDefined();
        });
    });

    describe(`${MotorcycleRepository.name}.${MotorcycleRepository.prototype.findAll.name}`, () => {
        const motorcycles: Motorcycle[] = [new MotorcycleMock()];
    
        it(`should return an ${Array.name} ${Motorcycle.name}`, async () => {
          jest.spyOn(mockMotorcycleRepository, 'find').mockResolvedValue(motorcycles);
          await expect(repository.findAll()).resolves.toEqual(motorcycles);
        });
    
        it(`should throw an ${Error.name}`, async () => {
          jest.spyOn(mockMotorcycleRepository, 'find').mockImplementation(() => {
            throw new Error('Simulated error');
          });
          await expect(repository.findAll()).rejects.toThrow(Error);
        });
    });

    describe(`${MotorcycleRepository.name}.${MotorcycleRepository.prototype.findById.name}`, () => {
        const leadEntityMock: Motorcycle = new MotorcycleMock();
        const personId = leadEntityMock.uuid;
    
        it(`should return a ${Motorcycle.name}`, async () => {
          jest.spyOn(mockMotorcycleRepository, 'findOne').mockResolvedValue(leadEntityMock);
          expect(repository.findById(personId)).resolves.toEqual(leadEntityMock);
        });
    
        it(`should throw an Error`, async () => {
          jest.spyOn(mockMotorcycleRepository, 'findOne').mockImplementation(() => {
            throw new Error('Error al buscar lead');
          });
          await expect(repository.findById(personId)).rejects.toThrow(Error);
        });
      });

});