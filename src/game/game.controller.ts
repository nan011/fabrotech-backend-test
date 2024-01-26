import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ScoreDto } from './game.dto';
import { GameService } from './game.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('')
export class GameController {
    constructor(private gameService: GameService) {}

    @UseGuards(AuthGuard)
    @Throttle({ default: { limit: 1, ttl: 1000 } })
    @Post('scores')
    submitScore(@Body() body: ScoreDto): Promise<ScoreDto> {
        return this.gameService.addScore(body)
    }

    @Get('leaderboard')
    findAll(): Promise<ScoreDto[]> {
        return this.gameService.getScores()
    }
}
