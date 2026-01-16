/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JournalService } from './journal.service';
import { UsersService } from '../user/users.service';

class JournalDto {
  content: string;
}

@Controller('journal')
@UseGuards(AuthGuard('jwt'))
export class JournalController {
  constructor(
    private journalService: JournalService,
    private usersService: UsersService,
  ) {}
  @Post()
  async create(@Req() req, @Body() dto: JournalDto) {
    const user = await this.usersService.findById(req.user.id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.journalService.create(user, dto.content);
  }

  @Get()
  all(@Req() req) {
    return this.journalService.findAllByUser(req.user.id);
  }

  @Get(':id')
  one(@Req() req, @Param('id') id: string) {
    return this.journalService.findOne(req.user.id, +id);
  }

  @Put(':id')
  async update(@Req() req, @Param('id') id: string, @Body() dto: JournalDto) {
    return this.journalService.update(req.user.id, +id, dto.content);
  }

  @Delete(':id')
  async remove(@Req() req, @Param('id') id: string) {
    return this.journalService.remove(req.user.id, +id);
  }
}
