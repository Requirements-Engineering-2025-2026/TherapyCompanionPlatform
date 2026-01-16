/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import {
  ExerciseEvaluation,
  EvaluationStatus,
} from '../../entities/exercise-evaluation.entity';
import { UsersService } from '../user/users.service';
import { ExerciseService } from '../exercise/exercise.service';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(ExerciseEvaluation)
    private repo: Repository<ExerciseEvaluation>,
    private usersService: UsersService,
    private exerciseService: ExerciseService,
  ) {}

  // Psychologist: get evaluations of all their patients (for this psychologist)
  async getForPsychologist(psychologistId: number) {
    // Find patients
    const patients =
      await this.usersService.findPatientsOfPsychologist(psychologistId);
    const patientIds = patients.map((p) => p.id);
    return this.repo.find({
      where: { user: { id: In(patientIds) } } as any,
      relations: ['exercise', 'user'],
    });
  }

  // Psychologist evaluates (creates or updates) an evaluation for a user's exercise
  async evaluate(
    psychologistId: number,
    exerciseId: number,
    userId: number,
    status: EvaluationStatus,
    grade?: number,
  ) {
    // ensure exercise belongs to psychologist
    const ex = await this.exerciseService.findByPsychologist(psychologistId);
    const matches = ex.find((e) => e.id === exerciseId);
    if (!matches)
      throw new ForbiddenException(
        'Exercise does not belong to this psychologist',
      );

    // create or update evaluation
    let ev: ExerciseEvaluation | null = await this.repo.findOne({
      where: { exercise: { id: exerciseId }, user: { id: userId } } as any,
    });
    if (!ev) {
      ev = this.repo.create({
        exercise: { id: exerciseId } as any,
        user: { id: userId } as any,
        status,
        grade,
      } as any) as unknown as ExerciseEvaluation;
    } else {
      ev.status = status;
      ev.grade = grade ?? ev.grade;
    }
    return this.repo.save(ev);
  }

  // Patient: add evaluation entry for themselves (e.g. submit completion)
  async patientAddEvaluation(
    userId: number,
    exerciseId: number,
    status: EvaluationStatus,
    grade?: number,
  ) {
    let ev = await this.repo.findOne({
      where: { exercise: { id: exerciseId }, user: { id: userId } } as any,
    });
    if (!ev) {
      ev = this.repo.create({
        exercise: { id: exerciseId } as any,
        user: { id: userId } as any,
        status,
        grade,
      } as any) as unknown as ExerciseEvaluation;
    } else {
      ev.status = status;
      ev.grade = grade ?? ev.grade;
    }
    return this.repo.save(ev);
  }
}
