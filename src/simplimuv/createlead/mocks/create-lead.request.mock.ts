import { CreateLeadDto } from "../dto/createlead.dto";

export class CreateLeadRequestMock extends CreateLeadDto {
    uuid = '293874928374kjashdka';
    accesories = ["alskjda92837942"];
    contact = {
    firstname : 'Test',
    lastname:"Test",
    email:"test@test.com",
    phone:"203984023",
    finance: true,
    trade:  false
    };
  }
  