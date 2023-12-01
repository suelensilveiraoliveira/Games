/* eslint-disable prettier/prettier */
// auth.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module'; // Importe o UsersModule
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Module({
  imports: [UsersModule,TypeOrmModule.forFeature([User])], // Importe o UsersModule aqui
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
