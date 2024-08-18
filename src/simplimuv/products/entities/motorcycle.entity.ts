import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    PrimaryColumn,
  } from 'typeorm';
  import { v4 as uuidv4 } from 'uuid';
  
  class Image {
    @Column({ nullable: true })
    id: number;
  
    @Column({ nullable: true })
    name: string;
  
    @Column({ nullable: true })
    alternativeText: string;
  
    @Column({ nullable: true })
    caption: string;
  
    @Column({ nullable: true })
    width: number;
  
    @Column({ nullable: true })
    height: number;
  
    @Column({ nullable: true })
    ext: string;
  
    @Column({ nullable: true })
    url: string;
  
    @Column({ nullable: true })
    hash: string;
  
    @Column({ nullable: true })
    mime: string;
  
    @Column({ nullable: true })
    size: number;
  
    @Column({ nullable: true })
    previewUrl: string;
  
    @Column({ nullable: true })
    provider: string;
  
    @Column({ nullable: true })
    provider_metadata: string;
  
    @Column({ nullable: true })
    view_type: string;
  
    @Column({ nullable: true })
    type: string;
  }
  
  class Price {
    @Column({ nullable: true })
    uuid: string;
  
    @Column('decimal',{ default: 0 })
    amount: number;
  
    @Column({ nullable: true })
    currency: string;
  
    @Column({ nullable: true })
    purpose: string;
  }
  
  class Detail {
    @Column({ nullable: true })
    id: number;
  
    @Column({ nullable: true })
    value: string;
  
    @Column({ nullable: true })
    description: string;
  
    @Column({ nullable: true })
    extra: string;
  }
  
  class Variant {
    @Column({default: 'e5bbdf04-1380-4ac3-9e6b-8d96be3ed40d'})
    uuid: string;
  
    @Column({default: 'Variant_name_default'})
    name: string;
  
    @Column({ nullable: true })
    slug: string;
  
    @Column({ nullable: true })
    uid: string;
  
    @Column({default: 'Variant_externalId_default'})
    externalId: string;
  
    @Column({ nullable: true })
    used: boolean;
  
    @Column({ default: false })
    featured: boolean;
  
    @Column({ default: false })
    favourite: boolean;
  
    @Column({ default: false })
    main: boolean;
  
    @Column(type => Image)
    images?: Image[];
  
    @Column(type => Price)
    prices?: Price[];
  
    @Column(type => Detail)
    details?: Detail[];
  
    @Column({ default: 1 })
    stock: number;
  }
  
  class Type {
    @Column({default: 'e5bbdf04-1380-4ac3-9e6b-8d96be3ed53k'})
    uuid: string;
  
    @Column({default: 'Type_name_default'})
    name: string;
  }
  
  class Seller {
    @Column({default: 'e5bbdf04-1380-4ac3-9e6b-8d96be3ed40d'})
    uuid: string;
  
    @Column({default: 'Seller_name_default'})
    name: string;
  
    @Column({ nullable: true })
    metadata: string;
  }
  
  class Brand {
    @Column({default: 'e5bbdf04-1380-4ac3-9e6b-8d96be3ed41f'})
    uuid: string;
  
    @Column({default: 'Brand_name_default'})
    name: string;
  }
  
  class Category {
    @Column({default: 'e5bbdf04-1380-4ac3-9e6b-8d96be3ed41h'})
    uuid: string;
  
    @Column({default: 'Category_name_default'})
    name: string;
  
    @Column({default: 'Category_locale_default'})
    locale: string;
  }
  
  @Entity({ name: 'motorcycle' })
  export class Motorcycle {
    @PrimaryColumn('uuid')
    uuid: string;
  
    @Column({ nullable: true })
    name: string;
  
    @Column(type => Type)
    type: Type;
  
    @Column({ nullable: true })
    uid: string;
  
    @Column(type => Seller)
    seller: Seller;
  
    @Column()
    slug: string;
  
    @Column({ nullable: true })
    metadata: string;
  
    @Column(type => Brand)
    brand: Brand;
  
    @Column()
    used: boolean;
  
    @Column()
    featured: boolean;
  
    @Column()
    favourite: boolean;
  
    @Column(type => Category)
    categories: Category[];
  
    @Column(type => Variant)
    variants?: Variant[];

    constructor() {
      this.uuid = uuidv4(); // Generar UUID al crear la instancia
    }
  }
  