import { CreateLead } from "../entities/create-lead.entity";

export class LeadEntityMock extends CreateLead {
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