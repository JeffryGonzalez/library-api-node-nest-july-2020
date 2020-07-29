import { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: string;
  readonly author: string;
  readonly year: string;
  readonly genre: string;
  readonly created: Date;
}
