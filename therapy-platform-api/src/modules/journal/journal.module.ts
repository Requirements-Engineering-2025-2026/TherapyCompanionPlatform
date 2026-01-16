/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntry } from '../../entities/journal-entry';
import { JournalService } from './journal.service';
import { JournalController } from './journal.controller';
import { UsersModule } from '../user/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([JournalEntry]), UsersModule],
  providers: [JournalService],
  controllers: [JournalController],
})
export class JournalModule {}
