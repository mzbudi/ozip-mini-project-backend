import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schema/users.schema';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(
    @Res() response,
    @Body('password') password: string,
    @Body('username') username: string,
  ): Promise<User> {
    try {
      const user = await this.usersService.findUserByUsername(username);
      if (user) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          message: 'Error: User already exist',
          status: 400,
        });
      }

      const saltOrRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltOrRounds);
      await this.usersService.createUser(username, hashedPassword);
      return response.status(HttpStatus.OK).json({
        message: 'User has been created successfully',
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: User not created',
        status: 400,
      });
    }
  }
}
