import { IsEmail, IsString, IsPhoneNumber, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  password!: string;

  @ApiProperty()
  @IsString()
  firstName!: string;

  @ApiProperty()
  @IsString()
  lastName!: string;

  @ApiProperty()
  @IsPhoneNumber('KE')
  phone!: string;

  @ApiProperty()
  @IsString()
  idNumber!: string;

  @ApiProperty()
  @IsString()
  university!: string;

  @ApiProperty()
  @IsString()
  program!: string;

  @ApiProperty()
  @IsString()
  academicLevel!: string;

  @ApiProperty()
  @IsNumber()
  graduationYear!: number;

  @ApiProperty()
  @IsString()
  constituency!: string;

  @ApiProperty()
  @IsString()
  ward!: string;
}