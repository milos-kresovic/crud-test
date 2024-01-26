import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async create(createuserDto: CreateUserDto) {
    const user = this.usersRepo.create(createuserDto);

    return await this.usersRepo.insert(user);
  }

  async findByToken(token: string) {
    return await this.usersRepo.findOneBy({ token });
  }
}
