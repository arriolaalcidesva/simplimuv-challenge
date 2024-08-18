import { IsBoolean, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


class TypeDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsUUID()
  uuid: string;
}

class SellerDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsUUID()
  uuid: string;

  @ApiProperty()
  @IsOptional()
  metadata: any;
}

class BrandDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsUUID()
  uuid: string;
}

class CategoryDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  locale: string;

  @ApiProperty()
  @IsUUID()
  uuid: string;
}

class ImageFormatDTO {
  @ApiProperty()
  @IsString()
  ext: string;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  hash: string;

  @ApiProperty()
  @IsString()
  mime: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  path: string;

  @ApiProperty()
  @IsNumber()
  size: number;

  @ApiProperty()
  @IsNumber()
  width: number;

  @ApiProperty()
  @IsNumber()
  height: number;
}

class ImageDTO {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  alternativeText: string;

  @ApiProperty()
  @IsOptional()
  caption: string;

  @ApiProperty()
  @IsNumber()
  width: number;

  @ApiProperty()
  @IsNumber()
  height: number;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ImageFormatDTO)
  formats: ImageFormatDTO;

  @ApiProperty()
  @IsString()
  hash: string;

  @ApiProperty()
  @IsString()
  ext: string;

  @ApiProperty()
  @IsString()
  mime: string;

  @ApiProperty()
  @IsNumber()
  size: number;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsOptional()
  previewUrl: string;

  @ApiProperty()
  @IsString()
  provider: string;

  @ApiProperty()
  @IsOptional()
  provider_metadata: any;

  @ApiProperty()
  @IsOptional()
  data: any;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsOptional()
  uuid: string;
}

class PriceDTO {
  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsString()
  purpose: string;

  @ApiProperty()
  @IsUUID()
  uuid: string;
}

class DetailDTO {
  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsOptional()
  extra: string;
}

class DetailsDTO {
  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  years: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  motors: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  features: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  fuel_types: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  doors: DetailDTO[];

  @ApiProperty()
  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  transmissions: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  body_types: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  testdrive: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  kilometers: DetailDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => DetailDTO)
  description: DetailDTO[];
}

class VariantDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  slug: string;

  @ApiProperty()
  @IsOptional()
  uid: string;

  @ApiProperty()
  @IsString()
  externalId: string;

  @ApiProperty()
  @IsUUID()
  uuid: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  used: boolean;

  @ApiProperty()
  @IsBoolean()
  featured: boolean;

  @ApiProperty()
  @IsBoolean()
  favourite: boolean;

  @ApiProperty()
  @IsBoolean()
  main: boolean;

  @ApiProperty()
  @IsOptional()
  metadata: any;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => ImageDTO)
  images: ImageDTO[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => PriceDTO)
  prices: PriceDTO[];

  @ApiProperty()
  @ValidateNested()
  @Type(() => DetailsDTO)
  details: DetailsDTO;

  @ApiProperty()
  @IsNumber()
  stock: number;
}

export class MotorcyclesDTO {

  @ApiProperty()
  @IsUUID()
  uuid: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => TypeDTO)
  type: TypeDTO;

  @ApiProperty()
  @IsOptional()
  uid: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => SellerDTO)
  seller: SellerDTO;

  @ApiProperty()
  @IsString()
  slug: string;

  @ApiProperty()
  @IsOptional()
  metadata: any;

  @ApiProperty()
  @ValidateNested()
  @Type(() => BrandDTO)
  brand: BrandDTO;

  @ApiProperty()
  @IsBoolean()
  used: boolean;

  @ApiProperty()
  @IsBoolean()
  featured: boolean;

  @ApiProperty()
  @IsBoolean()
  favourite: boolean;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => CategoryDTO)
  categories: CategoryDTO[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => VariantDTO)
  variants: VariantDTO[];
}
