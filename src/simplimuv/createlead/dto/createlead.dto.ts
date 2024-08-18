import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID, IsArray } from 'class-validator';

export class ContactDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsPhoneNumber(null)
    phone: string;

    @ApiProperty()
    @IsBoolean()
    finance: boolean;

    @ApiProperty()
    @IsBoolean()
    trade: boolean;
}

export class CreateLeadDto {
    @ApiProperty()
    @IsUUID()
    uuid: string;

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    accesories: string[];

    @ApiProperty()
    @IsNotEmpty()
    contact: ContactDto;
}
