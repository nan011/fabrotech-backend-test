import { IsNumber, IsString } from "class-validator";

export class ScoreDto {
    @IsString()
    name: string;

    @IsNumber()
    score: number;
}
