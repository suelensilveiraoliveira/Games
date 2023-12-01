/* eslint-disable prettier/prettier */
// games/games.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gamesRepository.find();
  }

  findOne(id: number) {
    return this.gamesRepository.findOneBy({ id: id });
  }

  async create(game: any): Promise<Game> {
    return this.gamesRepository.save(game);
  }

  async update(id: number, updateGame: any): Promise<Game> {
    await this.findOne(id); // Check if the game exists
    await this.gamesRepository.update(id, updateGame);
    return this.findOne(id);
  }

  async remove(id: number) {
    const game = await this.findOne(id); // Check if the game exists
    await this.gamesRepository.remove(game);
    return ("removido com sucesso")
  }
}
