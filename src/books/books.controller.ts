/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Get,
  NotFoundException,
  Post,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book';
import { BookCreate } from './models/book-create';

@Controller('books')
export class BooksController {
  constructor(private service: BooksService) {}

  // POST /books

  @Post()
  async addBook(@Body() book: BookCreate, @Res() res: any): Promise<Book> {
    const response = await this.service.addBook(book);
    return res.status(HttpStatus.CREATED).json(response);
  }
  // GET /books
  @Get()
  async getBooks(): Promise<{ books: Book[]; _links: any; count: number }> {
    const books = await this.service.getAllBooks();
    return {
      books,
      _links: {
        reviews: '/books/{id}/reviews',
      },
      count: books.length,
    };
  }
  // GET /books/93839

  @Get(':id')
  async getABook(@Param() params: any): Promise<Book> {
    const response = await this.service.getBook(params.id);
    console.log('RESPONSE:', response);
    if (!response) {
      throw new NotFoundException('No book with that id');
    } else {
      return response;
    }
  }
}
