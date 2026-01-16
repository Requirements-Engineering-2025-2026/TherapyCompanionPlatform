/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { JournalEntry } from '../../entities/journal-entry';
import { User } from '../../entities/user.entity';

@Injectable()
export class JournalService {
  constructor(
    @InjectRepository(JournalEntry) private repo: Repository<JournalEntry>,
  ) {}

  private startOfDay(date: Date) {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    return d;
  }

  private endOfDay(date: Date) {
    const d = new Date(date);
    d.setUTCHours(23, 59, 59, 999);
    return d;
  }

  async create(user: User, content: string) {
    const todayStart = this.startOfDay(new Date());
    const todayEnd = this.endOfDay(new Date());
    const exists = await this.repo.findOne({
      where: {
        user: { id: user.id },
        createdAt: Between(todayStart, todayEnd),
      },
    });
    if (exists)
      throw new BadRequestException('Journal entry for today already exists');
    const entry = this.repo.create({ content, user } as any);
    return this.repo.save(entry);
  }

  findAllByUser(userId: number) {
    return this.repo.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' },
    });
  }

  findOne(userId: number, id: number) {
    return this.repo.findOne({ where: { id, user: { id: userId } } });
  }

  async update(userId: number, id: number, content: string) {
    const entry = await this.findOne(userId, id);
    if (!entry) throw new NotFoundException();
    entry.content = content;
    return this.repo.save(entry);
  }

  async remove(userId: number, id: number) {
    const entry = await this.findOne(userId, id);
    if (!entry) throw new NotFoundException();
    await this.repo.remove(entry);
    return { removed: true };
  }
}
