/* eslint-disable prettier/prettier */
// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async login(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: {
        username,
        password
      }
    })

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Aqui você pode adicionar a lógica para verificar a senha, por exemplo:
    // const passwordMatch = await bcrypt.compare(password, user.password);
    // if (!passwordMatch) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }

    // Retorna os detalhes do usuário, excluindo a senha
    return ("Login efetuado com sucesso!")
  }
}
