import { Document } from 'mongoose';

export interface IUsers extends Document {
  username: string;
  password: string;
}
