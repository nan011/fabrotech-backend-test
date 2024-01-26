import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ScoreEntity {
    @PrimaryColumn({ nullable: false})
    name: string;

    @Column({ nullable: false})
    score: number;
}
