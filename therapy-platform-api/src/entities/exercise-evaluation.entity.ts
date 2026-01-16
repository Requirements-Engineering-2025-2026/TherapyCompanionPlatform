/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Exercise } from './exercise.entity';
import { User } from './user.entity';

export enum EvaluationStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

@Entity()
export class ExerciseEvaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Exercise, (e) => e.evaluations, { onDelete: 'CASCADE' })
  exercise: Exercise;

  @ManyToOne(() => User, (u) => u.exerciseEvaluations, { onDelete: 'CASCADE' })
  user: User;

  @Column({
    type: 'enum',
    enum: EvaluationStatus,
    default: EvaluationStatus.PENDING,
  })
  status: EvaluationStatus;

  @Column({ type: 'int', nullable: true })
  grade: number;
}
