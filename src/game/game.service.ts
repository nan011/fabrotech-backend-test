import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { ScoreEntity } from './game.entity';
import { ScoreDto } from './game.dto';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(ScoreEntity)
        private scoreRepository: Repository<ScoreEntity>
    ) {
        this.scoreRepository = scoreRepository;
    }

    addScore(score: ScoreDto): Promise<ScoreDto> {
        return this.scoreRepository.save(score)
    }

    getScores(): Promise<ScoreDto[]> {
        return this.scoreRepository.find({
            order: {
                score: 'DESC'
            },
            take: 10,
        })
    }
}
