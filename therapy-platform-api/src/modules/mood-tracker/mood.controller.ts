/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { MoodService } from './mood.service';
import { UsersService } from '../user/users.service';

class CreateMoodDto {
  content: string;
  scale: number;
  emoji?: string;
}

interface JwtRequest extends Request {
  user: {
    id: number;
  };
}

@Controller('mood')
@UseGuards(AuthGuard('jwt'))
export class MoodController {
  constructor(
    private moodService: MoodService,
    private usersService: UsersService,
  ) {}

  @Post()
  async create(@Req() req: JwtRequest, @Body() dto: CreateMoodDto) {
    console.log('RAW BODY DTO:', dto);
  console.log('CONTENT VALUE:', dto?.content);
    const user = await this.usersService.findById(req.user.id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.moodService.create(user, dto);
  }

  @Get()
  all(@Req() req: JwtRequest) {
    return this.moodService.findAllByUser(req.user.id);
  }
}
