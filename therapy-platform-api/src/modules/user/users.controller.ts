/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Get,
  Req,
  UseGuards,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UsersService } from './users.service';

export class JwtAuthGuard extends AuthGuard('jwt') {}

interface JwtUser {
  id: number;
}

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private svc: UsersService) {}

  // patient -> get contacts of associated psychologists
  @Get('my-psychologists/contacts')
  async myPsychologistsContacts(@Req() req: Request & { user?: JwtUser }) {
    if (!req.user || typeof req.user.id !== 'number') {
      throw new UnauthorizedException('Invalid user in request');
    }

    try {
      const result = await this.svc.findPsychologistsOfPatient(req.user.id);
      if (!Array.isArray(result)) {
        // defensive: the service returned something unexpected
        throw new InternalServerErrorException(
          'Unexpected response from service',
        );
      }

      const psychs = result as Array<{
        id: number;
        email: string;
        phone_number?: string | null;
        address?: string | null;
        username: string;
      }>;

      return psychs.map((p) => ({
        id: p.id,
        email: p.email,
        phone_number: p.phone_number,
        address: p.address,
        username: p.username,
      }));
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
