/* eslint-disable prettier/prettier */
// users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id: id });
  }

  async create(user: any): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, updateUser: any): Promise<User> {
    await this.findOne(id); // Check if the user exists
    await this.usersRepository.update(id, updateUser);
    return this.findOne(id);
  }

  async remove(id: number) {
    const user = await this.findOne(id); // Check if the user exists
    await this.usersRepository.remove(user);
    return "Removido com sucesso";
  }
}
