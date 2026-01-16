/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/users.module';
import { MoodModule } from './modules/mood-tracker/mood.module';
import { JournalModule } from './modules/journal/journal.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { EvaluationModule } from './modules/evaluation/evaluation.module';
import { Alert } from './entities/alert-entity';
import { User } from './entities/user.entity';
import { MoodEntry } from './entities/mood-entry.entity';
import { JournalEntry } from './entities/journal-entry';
import { Exercise } from './entities/exercise.entity';
import { ExerciseEvaluation } from './entities/exercise-evaluation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: +(process.env.DB_PORT ?? 5433),
      username: process.env.DB_USER ?? 'postgres',
      password: process.env.DB_PASS ?? '1234',
      database: process.env.DB_NAME ?? 'therapy_companion',
      entities: [
        User,
        MoodEntry,
        JournalEntry,
        Exercise,
        ExerciseEvaluation,
        Alert,
      ],
       autoLoadEntities: true,
      synchronize: true, // set to false in production and use migrations
    }),
    AuthModule,
    UsersModule,
    MoodModule,
    JournalModule,
    ExerciseModule,
    EvaluationModule,
  ],
})
export class AppModule {}
