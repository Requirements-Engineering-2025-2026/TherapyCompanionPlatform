/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../../entities/exercise.entity';
import { UsersService } from '../user/users.service';
import { In } from 'typeorm';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise) private repo: Repository<Exercise>,
    private usersService: UsersService,
  ) {}

  async create(psychologistId: number, content: string) {
    const psy = await this.usersService.findById(psychologistId);
    if (!psy) throw new NotFoundException('Psychologist not found');
    const ex = this.repo.create({ psychologist: psy, content } as any);
    return this.repo.save(ex);
  }

  async findByPsychologist(psychologistId: number) {
    return this.repo.find({
      where: { psychologist: { id: psychologistId } },
      order: { createdAt: 'DESC' },
    });
  }

  // For a patient: find exercises created by their psychologist(s)
  async findForPatient(patientId: number) {
    const psychs =
      await this.usersService.findPsychologistsOfPatient(patientId);
    const psyIds = psychs.map((p) => p.id);
    if (psyIds.length === 0) return [];
    return this.repo.find({
      where: { psychologist: { id: In(psyIds) } } as any,
      order: { createdAt: 'DESC' },
    });
  }
}
