import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreEntity } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreEntity])],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule {}
