/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExerciseService } from './exercise.service';
import { UsersService } from '../user/users.service';

class CreateExerciseDto {
  content: string;
}

@Controller('exercises')
@UseGuards(AuthGuard('jwt'))
export class ExerciseController {
  constructor(
    private svc: ExerciseService,
    private usersService: UsersService,
  ) {}

  // Psychologist creates exercise
  @Post()
  async create(@Req() req, @Body() dto: CreateExerciseDto) {
    if (req.user.type !== 'therapist') throw new Error('Forbidden');
    return this.svc.create(req.user.id, dto.content);
  }

  // Psychologist lists own exercises
  @Get('mine')
  async mine(@Req() req) {
    if (req.user.type !== 'therapist') throw new Error('Forbidden');
    return this.svc.findByPsychologist(req.user.id);
  }

  // Patient lists exercises created by their psychologist(s)
  @Get('for-me')
  async forMe(@Req() req) {
    return this.svc.findForPatient(req.user.id);
  }
}
