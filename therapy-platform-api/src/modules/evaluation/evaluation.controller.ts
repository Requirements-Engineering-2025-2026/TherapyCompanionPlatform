/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EvaluationService } from './evaluation.service';
import { EvaluationStatus } from '../../entities/exercise-evaluation.entity';

class PsychEvaluateDto {
  userId: number;
  status: EvaluationStatus;
  grade?: number;
}

class PatientEvalDto {
  exerciseId: number;
  status: EvaluationStatus;
  grade?: number;
}

@Controller('evaluations')
@UseGuards(AuthGuard('jwt'))
export class EvaluationController {
  constructor(private svc: EvaluationService) {}

  // Psychologist: get evaluations of all associated patients
  @Get('psychologist')
  async getForPsych(@Req() req) {
    if (req.user.type !== 'therapist') throw new Error('Forbidden');
    return this.svc.getForPsychologist(req.user.id);
  }

  // Psychologist: evaluate a user's exercise
  @Post('psychologist/:exerciseId')
  async evaluateForUser(
    @Req() req,
    @Param('exerciseId') exerciseId: string,
    @Body() dto: PsychEvaluateDto,
  ) {
    if (req.user.type !== 'therapist') throw new Error('Forbidden');
    return this.svc.evaluate(
      req.user.id,
      +exerciseId,
      dto.userId,
      dto.status,
      dto.grade,
    );
  }

  // Patient: add evaluation entry (submit)
  @Post('me')
  async patientAdd(@Req() req, @Body() dto: PatientEvalDto) {
    return this.svc.patientAddEvaluation(
      req.user.id,
      dto.exerciseId,
      dto.status,
      dto.grade,
    );
  }
}
