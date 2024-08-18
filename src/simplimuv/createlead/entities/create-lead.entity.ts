import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

class Contact {
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
  
    @Column()
    email: string;
  
    @Column()
    phone: string;
  
    @Column()
    finance: boolean;
  
    @Column()
    trade: boolean;
  }

@Entity({ name: 'create-lead' })
export class CreateLead {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column("simple-array")
  accesories: string[];

  @Column(() => Contact)
  contact: Contact;
}
