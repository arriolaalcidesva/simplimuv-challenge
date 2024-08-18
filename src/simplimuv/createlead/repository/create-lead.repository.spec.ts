import { Repository } from "typeorm";
import { CreateLead } from "../entities/create-lead.entity";
import { CreateLeadRepository } from "./create-lead.repository";
import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { LeadEntityMock } from "../mocks/lead.entity.mock";

describe(CreateLeadRepository.name, () => {
    let repository: CreateLeadRepository;
    let mockCreateLeadRepository: Repository<CreateLead>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [
            CreateLeadRepository,
            {
              provide: getRepositoryToken(CreateLead),
              useClass: Repository,
            },
          ],
        }).compile();
    
        repository = await module.resolve<CreateLeadRepository>(CreateLeadRepository);
        mockCreateLeadRepository = await module.resolve<Repository<CreateLead>>(getRepositoryToken(CreateLead));
    });

    describe(CreateLeadRepository.name, () => {
        it('should be defined', () => {
          expect(repository).toBeDefined();
        });
    });

    describe(`${CreateLeadRepository.name}.${CreateLeadRepository.prototype.create.name}`, () => {
        const leadEntityMock: CreateLead = new LeadEntityMock();
    
        it(`should return a ${CreateLead.name}`, async () => {
          jest.spyOn(mockCreateLeadRepository, 'create').mockReturnValue(leadEntityMock);
          jest.spyOn(mockCreateLeadRepository, 'save').mockResolvedValue(leadEntityMock);
          await expect(repository.create(leadEntityMock)).resolves.toBeInstanceOf(CreateLead);
        });
    
        it(`should throw an error`, async () => {
          jest.spyOn(mockCreateLeadRepository, 'create').mockImplementation(() => {
            throw new Error('Error al guardar lead');
          });
          await expect(repository.create(leadEntityMock)).rejects.toThrow(Error);
        });
    });

    describe(`${CreateLeadRepository.name}.${CreateLeadRepository.prototype.findAll.name}`, () => {
        const leads: CreateLead[] = [new LeadEntityMock()];
    
        it(`should return an ${Array.name} ${CreateLead.name}`, async () => {
          jest.spyOn(mockCreateLeadRepository, 'find').mockResolvedValue(leads);
          await expect(repository.findAll()).resolves.toEqual(leads);
        });
    
        it(`should throw an ${Error.name}`, async () => {
          jest.spyOn(mockCreateLeadRepository, 'find').mockImplementation(() => {
            throw new Error('Simulated error');
          });
          await expect(repository.findAll()).rejects.toThrow(Error);
        });
    });

    describe(`${CreateLeadRepository.name}.${CreateLeadRepository.prototype.findById.name}`, () => {
        const leadEntityMock: CreateLead = new LeadEntityMock();
        const personId = leadEntityMock.uuid;
    
        it(`should return a ${CreateLead.name}`, async () => {
          jest.spyOn(mockCreateLeadRepository, 'findOne').mockResolvedValue(leadEntityMock);
          expect(repository.findById(personId)).resolves.toEqual(leadEntityMock);
        });
    
        it(`should throw an Error`, async () => {
          jest.spyOn(mockCreateLeadRepository, 'findOne').mockImplementation(() => {
            throw new Error('Error al buscar lead');
          });
          await expect(repository.findById(personId)).rejects.toThrow(Error);
        });
      });

});