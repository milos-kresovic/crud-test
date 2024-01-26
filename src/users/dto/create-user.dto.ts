import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../user-role.enum';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  @IsEnum(UserRole)
  role: UserRole;

  @IsNotEmpty()
  @IsString()
  token: string;
}
