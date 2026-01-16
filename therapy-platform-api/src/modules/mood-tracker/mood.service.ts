/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MoodEntry } from '../../entities/mood-entry.entity';
import { User } from '../../entities/user.entity';

@Injectable()
export class MoodService {
  constructor(
    @InjectRepository(MoodEntry) private repo: Repository<MoodEntry>,
  ) {}

  create(user: User, data: { content: string; scale: number; emoji?: string }) {
  const entry = this.repo.create({
    content: data.content,
    scale: data.scale,
    emoji: data.emoji,
    user,
  });

  return this.repo.save(entry);
}


  findAllByUser(userId: number) {
    return this.repo.find({
      where: { user: { id: userId } },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }
}
