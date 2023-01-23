import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUsers>) {}
  async createUser(username: string, password: string): Promise<IUsers> {
    return this.userModel.create({
      username,
      password,
    });
  }
  async getUser(query: object): Promise<IUsers> {
    return this.userModel.findOne(query);
  }
}
