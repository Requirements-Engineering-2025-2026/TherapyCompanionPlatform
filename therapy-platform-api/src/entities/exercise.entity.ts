/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { ExerciseEvaluation } from './exercise-evaluation.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (u) => u.exercises, { onDelete: 'SET NULL' })
  psychologist: User;

  @Column('text')
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => ExerciseEvaluation, (ev) => ev.exercise)
  evaluations: ExerciseEvaluation[];
}
