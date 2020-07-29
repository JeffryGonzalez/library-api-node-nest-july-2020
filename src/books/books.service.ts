import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfaces/book';
import { Model } from 'mongoose';
import { BookCreate } from './models/book-create';
@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private bookModel: Model<Book>) {}

  async getAllBooks(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async getBook(bookId: string): Promise<Book> {
    console.log({ bookId });
    const book = await this.bookModel.findById(bookId).exec();
    return book;
  }

  async addBook(book: BookCreate) {
    const bookToAdd = await this.bookModel(book);
    return bookToAdd.save();
  }
}
