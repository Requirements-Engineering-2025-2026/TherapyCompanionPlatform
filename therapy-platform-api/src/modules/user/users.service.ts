/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  create(data: Partial<User>) {
    return this.repo.save(data as User);
  }

  findByEmail(email: string) {
    return this.repo.findOne({
      where: { email },
      relations: ['psychologists', 'patients'],
    });
  }

  findById(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['psychologists', 'patients'],
    });
  }

  async setBearerToken(userId: number, token: string) {
    await this.repo.update(userId, { bearer_token: token });
  }

  async findPatientsOfPsychologist(psyId: number) {
    const psy = await this.repo.findOne({
      where: { id: psyId },
      relations: ['patients'],
    });
    return psy?.patients ?? [];
  }

  async findPsychologistsOfPatient(patientId: number) {
    const p = await this.repo.findOne({
      where: { id: patientId },
      relations: ['psychologists'],
    });
    return p?.psychologists ?? [];
  }
}
