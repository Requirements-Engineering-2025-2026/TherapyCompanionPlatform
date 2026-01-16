/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEvaluation } from '../../entities/exercise-evaluation.entity';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { UsersModule } from '../user/users.module';
import { ExerciseModule } from '../exercise/exercise.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseEvaluation]),
    UsersModule,
    forwardRef(() => ExerciseModule),
  ],
  providers: [EvaluationService],
  controllers: [EvaluationController],
})
export class EvaluationModule {}
