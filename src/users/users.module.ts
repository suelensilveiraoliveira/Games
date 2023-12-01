// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService], // Certifique-se de incluir o UsersService aqui
  exports: [UsersService], // E exportá-lo se for utilizado fora do módulo
})
export class UsersModule {}
