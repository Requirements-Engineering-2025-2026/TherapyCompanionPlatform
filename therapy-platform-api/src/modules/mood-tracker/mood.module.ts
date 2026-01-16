/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodEntry } from '../../entities/mood-entry.entity';
import { MoodService } from './mood.service';
import { MoodController } from './mood.controller';
import { UsersModule } from '../user/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([MoodEntry]), UsersModule],
  providers: [MoodService],
  controllers: [MoodController],
})
export class MoodModule {}
