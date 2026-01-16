/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { MoodEntry } from './mood-entry.entity';
import { JournalEntry } from './journal-entry';
import { Exercise } from './exercise.entity';
import { ExerciseEvaluation } from './exercise-evaluation.entity';
import { Alert } from './alert-entity';

export enum UserType {
  PATIENT = 'patient',
  THERAPIST = 'therapist',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  bearer_token: string;

  @Column({ type: 'enum', enum: UserType })
  type: UserType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => MoodEntry, (m) => m.user)
  moodEntries: MoodEntry[];

  @OneToMany(() => JournalEntry, (j) => j.user)
  journalEntries: JournalEntry[];

  @OneToMany(() => Exercise, (e) => e.psychologist)
  exercises: Exercise[];

  @OneToMany(() => ExerciseEvaluation, (ev) => ev.user)
  exerciseEvaluations: ExerciseEvaluation[];

  @OneToMany(() => Alert, (a) => a.user)
  alerts: Alert[];

  // patients <-> psychologists relation
  @ManyToMany(() => User, (user) => user.psychologists)
  @JoinTable({
    name: 'patients_psychologists',
    joinColumn: { name: 'psychologist_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'patient_id', referencedColumnName: 'id' },
  })
  patients: User[]; // when this user is a psychologist

  @ManyToMany(() => User, (user) => user.patients)
  psychologists: User[]; // when this user is a patient
}
