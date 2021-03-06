import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.DB || 'localhost'}/library-api`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
