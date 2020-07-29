import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  genre: String,
  created: { type: Date, default: Date.now },
});
