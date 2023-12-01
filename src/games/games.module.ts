// games.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { Game } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])], // Certifique-se de incluir o TypeOrmModule aqui
  controllers: [GamesController],
  providers: [GamesService], // Certifique-se de incluir o GamesService aqui
})
export class GamesModule {}
